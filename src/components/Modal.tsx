import { useImperativeHandle, useRef, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { FoodContext } from "../store/foodContext";
import { useContext } from "react";

type ModalProps = {
  children: ReactNode;
};

const Modal = ({ children, ref }: ModalProps) => {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const { EscModal } = useContext(FoodContext);

  useImperativeHandle(
    ref,
    () => {
      return {
        open: () => {
          dialogRef.current?.showModal();
        },
        close: () => {
          dialogRef.current?.close();
        },
      };
    },
    []
  );

  return createPortal(
    <dialog
      ref={dialogRef}
      onClose={EscModal}
      onCancel={EscModal}
      className="fixed inset-0 m-auto w-[90%] max-w-lg rounded-lg p-6 bg-white"
    >
      {children}
    </dialog>,
    document.getElementById("modal-root")!
  );
};

export default Modal;
