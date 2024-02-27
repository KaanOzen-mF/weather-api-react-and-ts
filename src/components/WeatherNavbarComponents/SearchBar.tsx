import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";

// Import styled components for styling the search bar elements
import {
  SearchBarInput,
  SearchBarWrapper,
  SearchBox,
  SearchIcon,
  SuggestionBox,
  Suggestions,
} from "../styles.module";

// Import the utility function to fetch city suggestions based on user input
import { fetchCitySuggestions } from "../../utils/fetchWeather";

// Define the SearchBar functional component with a prop for handling city selection
const SearchBar: React.FC<{ onCitySelect: (city: string) => void }> = ({
  onCitySelect,
}) => {
  // State for the search query input by the user
  const [searchQuery, setSearchQuery] = useState("");
  // State for the list of suggestions returned from the API
  const [suggestions, setSuggestions] = useState<any[]>([]);

  // UseEffect hook to handle side effects, in this case, fetching suggestions
  useEffect(() => {
    // Function to load suggestions from the API
    const loadSuggestions = async () => {
      const newSuggestions = await fetchCitySuggestions(searchQuery);
      // Update the suggestions state with the new suggestions
      setSuggestions(newSuggestions);
    };
    // If the search query length is more than 2 characters, load suggestions
    if (searchQuery.length > 2) {
      loadSuggestions();
    } else {
      // If the search query is less than 3 characters, clear suggestions
      setSuggestions([]);
    }
  }, [searchQuery]); // This effect depends on changes to searchQuery

  // Function to handle click on a suggestion
  const handleSuggestionClick = (name: string) => {
    // Set the search query to the selected suggestion's name
    setSearchQuery(name);
    // Clear out the current suggestions
    setSuggestions([]);
    // Call the onCitySelect prop with the selected city name
    onCitySelect(name);
  };

  return (
    // Render the search bar with suggestions
    <>
      <SearchBarWrapper>
        <SearchBox>
          <SearchIcon>
            <FaSearch />
          </SearchIcon>
          <SearchBarInput
            placeholder="Search city"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </SearchBox>

        {suggestions.length > 0 && (
          <SuggestionBox>
            {suggestions.map((suggestion, index) => (
              <Suggestions
                key={index}
                onClick={() => handleSuggestionClick(suggestion.name)}
              >
                {suggestion.name}, {suggestion.country}
              </Suggestions>
            ))}
          </SuggestionBox>
        )}
      </SearchBarWrapper>
    </>
  );
};

export default SearchBar;
