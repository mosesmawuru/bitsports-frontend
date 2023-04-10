import { Ball } from "@/public/icons";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface IModal {
  Body: React.ReactComponentElement;
  isOpen: boolean;
  close: () => void;
}

const Modal = ({ Body, isOpen = false, close }: IModal) => {
  const [open, setOpen] = useState(isOpen);

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);
  return (
    <>
      <motion.div
        animate={{ opacity: open ? 1 : 0 }}
        exit={{ opacity: open ? 0 : 1 }}
        transition={{ ease: "easeOut", duration: 0.4 }}
        initial={false}
        onClick={() => {
          setOpen(!open);
          setTimeout(() => {
            close();
          }, 500);
        }}
        className={`${
          isOpen ? "block" : "hidden"
        } fixed modal-container z-50 top-0 right-0 min-h-screen w-full flex flex-col justify-center items-center`}
      >
        <div className="relative top-7 hidden z-50 lg:inline-block">
          <Ball fill="#ffffff" width="57" height="57" />
        </div>
        <div className="lg:w-modal top-12 lg:top-0 z-40 px-5 py-10 lg:py-14 flex flex-col items-center relative lg:rounded-sm w-full modal min-h-90vh lg:min-h-60vh max-h-90vh lg:max-h-modal overflow-auto">
          <Body />
        </div>
      </motion.div>
    </>
  );
};

export default Modal;
