import React from 'react';

const Avatar = ({ src, alt, size = '10' }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`w-${size} h-${size} rounded-full`}
    />
  );
};

export default Avatar;
