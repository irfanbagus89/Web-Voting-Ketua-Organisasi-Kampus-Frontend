import { useContext, useEffect } from "react";
import { Context } from "../../utils/fetch";
import { useParams } from "react-router-dom";
const Dasboard = () => {
  const { daftarSurat, isLoading, setId, detailSurat } = useContext(Context);
  const { id } = useParams();
  useEffect(() => {
    setId(id);
  });
  return (
    <div className="">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          {daftarSurat != undefined ? (
            <div className="w-full h-[85vh] flex"></div>
          ) : (
            ""
          )}
        </>
      )}
    </div>
  );
};

export default Dasboard;
