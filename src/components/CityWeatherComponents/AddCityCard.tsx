// Import styled components from styles.module
import { AddCityCardWrapper, AddCityContent, PlusIcon } from "../styles.module";

// Define AddCityCard component with a prop for handling click events
const AddCityCard: React.FC<{ onAddClick: () => void }> = ({ onAddClick }) => {
  return (
    // AddCityCardWrapper is a styled div that will trigger onAddClick when clicked
    <AddCityCardWrapper onClick={onAddClick}>
      <AddCityContent>
        <PlusIcon>+</PlusIcon>
        <span>Add City</span>
      </AddCityContent>
    </AddCityCardWrapper>
  );
};

export default AddCityCard;
