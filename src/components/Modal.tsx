import Cart from "./Cart";
import { createPortal } from "react-dom";

const Modal = () => {
  return createPortal(
    <dialog
      open
      className="fixed inset-0 m-auto w-[90%] max-w-lg rounded-lg p-6 bg-white"
    >
      <Cart />
    </dialog>,
    document.getElementById("modal-root")!
  );
};

export default Modal;
