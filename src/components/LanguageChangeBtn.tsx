import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { LanguageChangeButtonWrapper } from "./styles.module";

export default function LanguageChangeButton() {
  //state for focus select elements
  const [isFocused, setIsFocused] = useState(false);

  return (
    <LanguageChangeButtonWrapper>
      <select
        className="selectButton"
        onFocus={() => setIsFocused(true)} // when focused, isFocused become true
        onBlur={() => setIsFocused(false)} // when not focused, isFocused become true
      >
        <option value="eng">ENG</option>
        <option value="tr">TR</option>
      </select>
      {isFocused ? (
        <FaAngleUp className="selectIcon" color="white" />
      ) : (
        <FaAngleDown className="selectIcon" color="white" />
      )}
    </LanguageChangeButtonWrapper>
  );
}
