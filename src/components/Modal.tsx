import { FaPlus } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

type ModalProps = {
  show: boolean;
  onClose: () => void;
  children: React.ReactNode;
  onAddCity?: () => void;
};

const Modal: React.FC<ModalProps> = ({
  show,
  onClose,
  children,
  onAddCity,
}) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modalBackdrop">
      <div className="modalContent">
        {children}
        <div className="modalButtonContainer">
          {onAddCity && (
            <button className="modalAddCityBtn" onClick={onAddCity}>
              <FaPlus />
            </button>
          )}
          <button className="modalCloseBtn" onClick={onClose}>
            <FaX />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Modal;
