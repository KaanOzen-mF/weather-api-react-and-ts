import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
const media = {
  mobile: `(max-width: 600px)`,
  tablet: `(min-width: 768px) and (max-width: 1024px)`,
  laptop: `(min-width: 1024px) and (max-width: 1200px)`,
  desktop: `(min-width: 1200px) and (max-width: 2000px)`,
};

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
