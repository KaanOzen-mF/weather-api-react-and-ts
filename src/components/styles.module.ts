import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
const media = {
  mobile: `(max-width: 600px)`,
  tablet: `(min-width: 768px) and (max-width: 1024px)`,
  laptop: `(min-width: 1024px) and (max-width: 1200px)`,
  desktop: `(min-width: 1200px) and (max-width: 2000px)`,
};

/*Weather Navbar Components Start */
export const SearchBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: 24px;
  backdrop-filter: blur(10px) saturate(130%);
  background-color: rgba(98, 96, 96, 0.45);
  width: fit-content;
  padding: 6px;
  align-items: center;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  z-index: 2;
`;

export const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const SearchIcon = styled(FaSearch)`
  margin-left: 6px;
  font-size: 24px;
  color: white;

  @media ${media.mobile} {
    font-size: 16px;
  }

  @media ${media.tablet} {
    font-size: 16px;
  }

  @media ${media.laptop} {
    font-size: 16px;
  }

  @media ${media.desktop} {
    font-size: 16px;
  }
`;

export const SearchBarInput = styled.input`
  border: none;
  height: 48px;
  margin-left: 16px;
  background: none;
  color: white;
  outline: none;
  width: 480px;
  font-size: 24px;

  @media ${media.mobile} {
    height: 24px;
    margin-left: 12px;
    width: 142px;
    font-size: 16px;
  }

  @media ${media.tablet} {
    height: 24px;
    margin-left: 12px;
    width: 142px;
    font-size: 16px;
  }
  @media ${media.laptop} {
    height: 24px;
    margin-left: 12px;
    width: 142px;
    font-size: 16px;
  }
  @media ${media.desktop} {
    height: 36px;
    margin-left: 12px;
    width: 360px;
    font-size: 24px;
  }
`;

export const SuggestionBox = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 496px;
  cursor: pointer;
  background-color: #8cd2ce;
  border-radius: 24px;
  padding: 6px;
  font-size: 24px;

  @media ${media.mobile} {
    top: 100%;
    width: 172px;
    font-size: 16px;
  }
  @media ${media.tablet} {
    top: 100%;
    width: 172px;
    font-size: 16px;
  }
  @media ${media.laptop} {
    top: 100%;
    width: 172px;
    font-size: 16px;
  }
  @media ${media.desktop} {
    top: 100%;
    width: 400px;
    font-size: 24px;
  }
`;

export const Suggestions = styled.div`
  &:hover {
    border-radius: 24px;
    color: white;
  }
`;

export const SwitchContainer = styled.div`
  width: 96px;
  height: 64px;
  margin-left: 96px;
  margin-right: 12px;
  backdrop-filter: blur(10px) saturate(130%);
  background: rgba(140, 210, 206, 0.47);
  border-radius: 30px;
  position: relative;
  cursor: pointer;
  user-select: none;
  box-shadow: -1px 0px 5px 0px rgba(0, 0, 0, 0.75) inset;
  font-size: 24px;

  @media ${media.mobile} {
    width: 58px;
    height: 32px;
    font-size: 16px;
  }
  @media ${media.tablet} {
    width: 58px;
    height: 32px;
    font-size: 16px;
  }
  @media ${media.laptop} {
    width: 58px;
    height: 32px;
    font-size: 16px;
  }
  @media ${media.desktop} {
    width: 72px;
    height: 48px;
    font-size: 16px;
  }
`;

export const Switch = styled.div<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  position: relative;
  transition: background-color 0.3s ease;
  color: #fff;
  .switch-circle {
    width: 48px;
    height: 60px;
    backdrop-filter: blur(10px) saturate(130%);
    background-color: #b8b7b7;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
    transition: transform 0.3s ease;
    transform: ${({ isActive }) =>
      isActive ? "translateX(0)" : "translateX(50px)"};
    box-shadow: 1px 0px 5px 0px rgba(0, 0, 0, 0.75);
  }
`;

export const TemperatureLabel = styled.span<{ isActive: boolean }>`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  transition: color 0.3s ease;
  color: ${({ isActive }) => (isActive ? "#fff" : "initial")};
  font-size: 24px;
  @media ${media.mobile} {
    font-size: 16px;
  }
  @media ${media.tablet} {
    font-size: 16px;
  }
  @media ${media.laptop} {
    font-size: 16px;
  }
  @media ${media.desktop} {
    font-size: 20px;
  }
`;

export const SwitchCircle = styled.div<{ isCelsius: boolean }>`
  width: 48px;
  height: 60px;
  backdrop-filter: blur(10px) saturate(130%);
  background-color: #b8b7b7;
  border-radius: 50%;
  position: absolute;
  top: 2px;
  left: 0;
  transform: ${({ isCelsius }) =>
    isCelsius ? "translateX(0)" : "translateX(50px)"};
  transition: left 0.8s ease;
  box-shadow: 1px 0px 5px 0px rgba(0, 0, 0, 0.75);

  @media ${media.mobile} {
    top: 0;
    transform: ${({ isCelsius }) =>
      isCelsius ? "translateX(0)" : "translateX(25px)"};
    width: 32px;
    height: 30px;
  }
  @media ${media.tablet} {
    top: 0;
    transform: ${({ isCelsius }) =>
      isCelsius ? "translateX(0)" : "translateX(25px)"};
    width: 32px;
    height: 30px;
  }
  @media ${media.laptop} {
    top: 0;
    transform: ${({ isCelsius }) =>
      isCelsius ? "translateX(0)" : "translateX(25px)"};
    width: 32px;
    height: 30px;
  }
  @media ${media.desktop} {
    transform: ${({ isCelsius }) =>
      isCelsius ? "translateX(0)" : "translateX(30px)"};
    width: 42px;
    height: 46px;
  }
`;
/*Weather Navbar Components End */

/*Weather Graph Components Start */
export const TitleBtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const TitleContainer = styled.div`
  font-size: 42px;
  font-style: normal;
  font-weight: 500;
  padding: 5%;
  color: white;

  @media ${media.mobile} {
    font-size: 16px;
    width: 40%;
  }
  @media ${media.tablet} {
    font-size: 16px;
    width: 40%;
  }
  @media ${media.laptop} {
    font-size: 16px;
    width: 40%;
  }
  @media ${media.desktop} {
    font-size: 32px;
    width: 20%;
  }
`;

export const ButtonContainer = styled.div`
  background-color: #626060;
  border-radius: 32px;
  margin-right: 5%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 40%;
  @media ${media.mobile} {
    width: 50%;
  }
  @media ${media.tablet} {
    width: 25%;
  }
  @media ${media.laptop} {
    width: 35%;
  }
  @media ${media.desktop} {
    width: 50%;
  }
`;

export const GraphButton = styled.button<{ isActive: boolean }>`
  background-color: transparent;
  color: ${({ isActive }) =>
    isActive ? "#fff" : "#ccc"}; // Active state color change
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 32px;
  outline: none;
  transition: background-color 0.3s, color 0.3s;
  font-size: 28px;
  font-weight: 300;

  ${({ isActive }) =>
    isActive &&
    `
    background-color: #8cd2ce;
    color: #fff;
    box-shadow: 1px 0px 5px 0px rgba(0, 0, 0, 0.4);
  `}
  @media ${media.mobile} {
    font-size: 12px;
    padding: 4px 4px;
  }
  @media ${media.tablet} {
    font-size: 12px;
    padding: 4px 4px;
  }
  @media ${media.laptop} {
    font-size: 12px;
    padding: 4px 4px;
  }
  @media ${media.desktop} {
    font-size: 24px;
    padding: 8px 4px;
  }
`;
/*Weather Graph Components End */

export const WeatherWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  border: 1px solid rgba(98, 96, 96, 0.1);
  background: rgba(98, 96, 96, 0.47);
  backdrop-filter: blur(6.900000095367432px);
  margin-left: 5%;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  @media ${media.mobile} {
    margin-right: 4%;
  }

  @media only screen and (min-width: 600px) and (max-width: 768px) {
    margin-right: 4%;
  }

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    margin-right: 4%;
  }
`;

export const NavbarWrapper = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 12px;
  margin-right: 42px;

  @media only screen and (max-width: 600px) {
    justify-content: space-between;
    margin-right: 0;
    margin-left: 5%;
  }
  @media only screen and (min-width: 600px) and (max-width: 768px) {
    justify-content: space-between;
    margin-right: 3%;
    margin-left: 5%;
  }

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    justify-content: space-between;
    margin-right: 3%;
    margin-left: 5%;
  }
  @media only screen and (min-width: 1024px) and (max-width: 1200px) {
    margin-right: 2%;
  }
`;

export const CityWeatherWrapper = styled.div`
  margin-right: 5%;
  margin-left: 5%;
`;

export const ForecastWeatherWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  border: 1px solid rgba(98, 96, 96, 0.1);
  background: rgba(98, 96, 96, 0.47);
  backdrop-filter: blur(6.900000095367432px);
  margin-left: 5%;
  margin-right: 5%;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
`;

export const WeatherGraphsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  border: 1px solid rgba(98, 96, 96, 0.1);
  background: rgba(98, 96, 96, 0.47);
  backdrop-filter: blur(6.900000095367432px);
  margin-left: 5%;
  margin-top: 32px;
  margin-bottom: 12px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  @media only screen and (max-width: 600px) {
    margin-right: 4%;
  }
  @media only screen and (min-width: 600px) and (max-width: 768px) {
    margin-right: 4%;
  }
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    margin-right: 4%;
  }
`;
