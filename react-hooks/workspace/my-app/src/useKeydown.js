import React, { useEffect } from "react";

const useKeydown = (onKeydown, keyCode) => {
  const handleKeydown = (e) => {
    if (e.key === keyCode) {
      console.log(keyCode);
      onKeydown();
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  });
};

export default useKeydown;
