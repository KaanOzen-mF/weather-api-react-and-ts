import { FaSearch } from "react-icons/fa";
import { SearchBarWrapper } from "./styles.module";

export default function SearchBar() {
  return (
    <SearchBarWrapper>
      <FaSearch color="white" className="searchBarIcon" />
      <input placeholder="Search city or postcode" className="searchBar" />
    </SearchBarWrapper>
  );
}
