import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { SearchBarWrapper } from "../styles.module";
import { fetchCitySuggestions } from "../../utils/fetchWeather";

const SearchBar: React.FC<{ onCitySelect: (city: string) => void }> = ({
  onCitySelect,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState<any[]>([]);

  useEffect(() => {
    const loadSuggestions = async () => {
      const newSuggestions = await fetchCitySuggestions(searchQuery);
      setSuggestions(newSuggestions);
    };

    if (searchQuery.length > 2) {
      loadSuggestions();
    } else {
      setSuggestions([]);
    }
  }, [searchQuery]);

  const handleSuggestionClick = (name: string) => {
    setSearchQuery(name);
    setSuggestions([]);
    onCitySelect(name);
  };

  return (
    <>
      <SearchBarWrapper>
        <div className="searchBox">
          <FaSearch color="white" className="searchIcon" />
          <input
            placeholder="Search city"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="searchBar"
          />
        </div>

        {suggestions.length > 0 && (
          <div className="suggestionBox">
            {suggestions.map((suggestion, index) => (
              <div
                key={index}
                onClick={() => handleSuggestionClick(suggestion.name)}
              >
                {suggestion.name}, {suggestion.country}
              </div>
            ))}
          </div>
        )}
      </SearchBarWrapper>
    </>
  );
};

export default SearchBar;
