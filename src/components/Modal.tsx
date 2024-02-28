import { FaPlus } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import {
  AddCityButton,
  CloseButton,
  ModalBackdrop,
  ModalButtonContainer,
  ModalContent,
} from "./styles.module";

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
    <ModalBackdrop>
      <ModalContent>
        {children}
        <ModalButtonContainer>
          {onAddCity && (
            <AddCityButton onClick={onAddCity}>
              <FaPlus />
            </AddCityButton>
          )}
          <CloseButton onClick={onClose}>
            <FaX />
          </CloseButton>
        </ModalButtonContainer>
      </ModalContent>
    </ModalBackdrop>
  );
};
export default Modal;
