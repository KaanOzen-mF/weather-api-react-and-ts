const AddCityCard: React.FC<{ onAddClick: () => void }> = ({ onAddClick }) => {
  return (
    <div className="add-city-card" onClick={onAddClick}>
      <div className="add-city-content">
        <span className="plus-icon">+</span>
        <span>Add City</span>
      </div>
    </div>
  );
};

export default AddCityCard;
