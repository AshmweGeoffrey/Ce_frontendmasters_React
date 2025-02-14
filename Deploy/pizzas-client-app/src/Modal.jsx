import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  const elref = useRef(null);
  if (!elref.current) {
    elref.current = document.createElement("div");
  }

  useEffect(() => {
    const modalroot = document.getElementById("modal");
    modalroot.appendChild(elref.current);
    return () => modalroot.removeChild(elref.current);
  }, []);

  return createPortal(<div>{children}</div>, elref.current);
};

export default Modal;
