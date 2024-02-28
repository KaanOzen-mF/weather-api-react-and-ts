import { FaPlus } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import {
  AddCityButton,
  CloseButton,
  ModalBackdrop,
  ModalButtonContainer,
  ModalContent,
} from "./styles.module";

// Define the props for the Modal component
type ModalProps = {
  show: boolean; // Whether the modal should be displayed
  onClose: () => void; // Function to call when closing the modal
  children: React.ReactNode; // Content to be displayed inside the modal
  onAddCity?: () => void; // Optional function to call when adding a city
};

// Modal component definition
const Modal: React.FC<ModalProps> = ({
  show,
  onClose,
  children,
  onAddCity,
}) => {
  // If the modal is not supposed to show, return null to render nothing
  if (!show) {
    return null;
  }
  // Return the modal structure
  return (
    <ModalBackdrop>
      {/* Modal backdrop for the overlay effect */}
      <ModalContent>
        {/* Content container of the modal */}
        {children} {/* Render the children elements passed to the modal */}
        <ModalButtonContainer>
          {/* Container for the modal action buttons */}
          {onAddCity && ( // If the onAddCity function is provided, render the Add City button
            <AddCityButton onClick={onAddCity}>
              <FaPlus /> {/* Add City button icon */}
            </AddCityButton>
          )}
          <CloseButton onClick={onClose}>
            {/* Close button for the modal */}
            <FaX /> {/* Close button icon */}
          </CloseButton>
        </ModalButtonContainer>
      </ModalContent>
    </ModalBackdrop>
  );
};
export default Modal;
