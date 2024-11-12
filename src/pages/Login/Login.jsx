import React, { useEffect, useRef, useState } from "react";
import { useAuth } from "../../utils/auth";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

function Login() {
  const [nbi, setNbi] = useState("");
  const [password, setPassword] = useState("");
  const { login, loading, error, user } = useAuth();
  const inputNbi = useRef(null)
  const inputPassword = useRef(null)
  const buttonLogin = useRef(null)
  const navigate = useNavigate();
  
  const handleKeyDown = (e, next) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      next.current.focus(); 
    }
  };

  const handleLogin = async () => {
    try {
      await login(nbi, password);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    if (user) {
      // console.log(user);
      navigate("/admin/dashboard");
    }
  }, [user]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Login
        </h2>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-2">
            NBI
          </label>
          <Input placeholder={"Masukkan NBI"} value={nbi} onChange={(e) => setNbi(e.target.value)} className={`w-full border-gray-300`} ref={inputNbi} onKeyDown={(e) => handleKeyDown(e,inputPassword)}/>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Password
          </label>
          <Input type={"password"} placeholder={"Masukkan Password"} value={password} onChange={(e) => setPassword(e.target.value)} className={`w-full border-gray-300`} ref={inputPassword} onKeyDown={(e) => handleKeyDown(e,buttonLogin)}/>
          
        </div>
        <Button
          children={loading ? "Logging in..." : "Login"}
          onClick={handleLogin}
          disabled={loading}
          className={`w-full font-semibold transition duration-200 ${
            loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"
          }`}
          ref={buttonLogin}
        />

        {error && (
          <p className="text-red-500 text-center text-sm mt-4">{error}</p>
        )}
      </div>
    </div>
  );
}

export default Login;
