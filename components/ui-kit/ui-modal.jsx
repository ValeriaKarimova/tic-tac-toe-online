import { createPortal } from "react-dom";
import { CloseBtnIcon } from "../shared/icons/close-btn";

export function UiModal({ className, isOpen, onClose, children }) {
  if (!isOpen) return null;
  const handleClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  const modal = (
    <div
      onClick={handleClick}
      className="fixed inset-0 bg-slate-900/60 backdrop-blur"
    >
      <div
        data-id="modal"
        className={`bg-white relative p-6 rounded-lg mx-auto min-h-[320px] w-[640px] mt-20 ${className}`}
      >
        <button
          onClick={onClose}
          className="absolute cursor-pointer top-5 right-5"
        >
          <CloseBtnIcon />
        </button>
        {children}
      </div>
    </div>
  );

  return createPortal(modal, document.getElementById("modals"));
}

UiModal.Header = function UiModalHeader({ children, className }) {
  return <div className={`text-2xl ${className}`}>{children}</div>;
};
UiModal.Body = function UiModalBody({ children, className }) {
  return <div className={`${className}`}>{children}</div>;
};
UiModal.Footer = function UiModalFooter({ children, className }) {
  return (
    <div className={`flex gap-4 mt-[inherit] justify-end ${className}`}>
      {children}
    </div>
  );
};
