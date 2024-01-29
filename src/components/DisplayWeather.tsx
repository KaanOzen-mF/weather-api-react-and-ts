import LanguageChangeButton from "./LanguageChangeBtn";
import SearchBar from "./SearchBar";
import { MainWrapper } from "./styles.module";
import TemperatureSwitch from "./TemperatureSwitch";

export const DisplayWeeather = () => {
  return (
    <MainWrapper>
      <SearchBar />
      <LanguageChangeButton />
      <TemperatureSwitch />
    </MainWrapper>
  );
};
