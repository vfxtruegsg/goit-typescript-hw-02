import Modal from "react-modal";
import { KeyboardEvent, useEffect } from "react";
Modal.setAppElement("#root");
import css from "./ImageModal.module.css";

interface Image {
  modalImg: string;
  altDescr: string;
}

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  image?: Image;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, image }) => {
  useEffect(() => {
    const handleKeyDownClose = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDownClose);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDownClose);
    };
  }, [isOpen, onClose]);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName={css["overlay"]}
      shouldCloseOnOverlayClick={true}
      className={css["modal"]}
    >
      <div onClick={handleOverlayClick} className={css["inf-container"]}>
        <img
          className={css["modal-img"]}
          src={image?.modalImg || {}}
          alt={image?.altDescr || {}}
        />
        <p style={{ textAlign: "center" }}>{image?.altDescr || ""}</p>
      </div>
    </Modal>
  );
};
export default ImageModal;
