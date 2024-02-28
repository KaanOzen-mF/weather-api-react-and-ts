import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { Swiper } from "swiper/react";

const media = {
  mobile: `(max-width: 600px)`,
  tablet: `(min-width: 768px) and (max-width: 1024px)`,
  laptop: `(min-width: 1024px) and (max-width: 1200px)`,
  desktop: `(min-width: 1200px) and (max-width: 2000px)`,
};

/*App.tsx Start*/
export const MainPage = styled.div`
  background: url("/public/daoudi-aissa-Pe1Ol9oLc4o-unsplash.jpg") no-repeat
    center center fixed;
  background-size: cover;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const WeatherMainPageContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 36px;
  @media ${media.mobile} {
    flex-direction: column;
    width: 100%;
  }
  @media ${media.tablet} {
    flex-direction: column;
    width: 100%;
  }
`;

export const WeatherMainPageLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  @media ${media.mobile} {
    width: 100%;
  }
  @media ${media.tablet} {
    width: 100%;
  }
`;

export const WeatherMainPageRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  @media ${media.mobile} {
    width: 100%;
    margin-top: 5%;
  }
  @media ${media.tablet} {
    width: 100%;
    margin-top: 5%;
  }
`;

export const LoadingScreen = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
/*App.tsx End */

/*Weather Navbar Components Start */
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
    width: 40%;
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

/*Weather Components Start */
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

export const DateContainer = styled.div`
  margin-left: 5%;
`;

export const DateText = styled.p`
  font-size: 42px;
  font-weight: 500;
  margin-bottom: 3%;
  color: white;
  margin-top: 3%;
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
    font-size: 32px;
  }
`;

export const WeatherInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  color: white;
`;

export const WeatherInfoImg = styled.img`
  width: 112px;
  @media ${media.mobile} {
    width: 48px;
  }
  @media ${media.tablet} {
    width: 48px;
  }
  @media ${media.laptop} {
    width: 48px;
  }
  @media ${media.desktop} {
    width: 56px;
  }
`;

export const WeatherInfoCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const WeatherInfoTitle = styled.p`
  font-size: 36px;
  font-weight: 500;
  text-shadow: 1px 0px 2px rgba(0, 0, 0, 0.6);
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
    font-size: 24px;
  }
`;

export const WeatherInfoSubTitle = styled.p`
  font-size: 24px;
  font-weight: 300;
  text-shadow: 1px 0px 2px rgba(0, 0, 0, 0.6);

  @media ${media.mobile} {
    font-size: 12px;
  }
  @media ${media.tablet} {
    font-size: 12px;
  }
  @media ${media.laptop} {
    font-size: 12px;
  }
  @media ${media.desktop} {
    font-size: 16px;
  }
`;

export const WeatherCard = styled.div`
  border-radius: 16px;
  background: #cdcdcd;
  padding: 22px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin-right: 24px;
  margin-left: 24px;
  margin-bottom: 36px;
  user-select: none;
`;

export const WeatherCardText = styled.p`
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 6px;

  @media ${media.mobile} {
    font-size: 12px;
  }
  @media ${media.tablet} {
    font-size: 12px;
  }
  @media ${media.laptop} {
    font-size: 12px;
  }
  @media ${media.desktop} {
    font-size: 16px;
  }
`;

export const WeatherCardImg = styled.img`
  width: 84px;
  @media ${media.mobile} {
    width: 64px;
  }
  @media ${media.tablet} {
    width: 64px;
  }
  @media ${media.laptop} {
    width: 64px;
  }
  @media ${media.desktop} {
    width: 72px;
  }
`;

export const ActiveSwiperPaginationBullet = styled.div`
  background-color: #8cd2ce !important;
`;

export const WeatherHourlyCardContainer = styled(Swiper)`
  width: 100%;
  .swiper-pagination-bullet-active {
    background-color: #8cd2ce !important;
  }
  @media ${media.tablet} {
    width: 100%;
    margin-top: 12px;
    margin-left: 12px;
  }
  @media ${media.laptop} {
    width: 100%;
    margin-top: 12px;
    margin-left: 12px;
  }
  @media ${media.desktop} {
    width: 100%;
    margin-top: 12px;
    margin-left: 12px;
  }
`;

export const WeatherHourlyCard = styled.div`
  border-radius: 16px;
  background: #cdcdcd;
  padding: 22px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin-right: 24px;
  margin-left: 24px;
  margin-bottom: 36px;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
/*Weather Components End */

/*Forecast Weather Components Start */
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

export const ForecastWeatherTempContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ForecastContainer = styled.div`
  margin-top: 1%;
  margin-left: 6%;
  margin-right: 6%;
  margin-bottom: 3%;
`;

export const ForecastWeatherContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  border-radius: 12px;
  background: #626060;
  margin-bottom: 12px;
  padding: 3px 6px;
`;

export const ForecastTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 42px;
  font-weight: 500;
  margin-bottom: 12px;
  color: white;
  margin-top: 24px;
  text-shadow: 1px 0px 2px rgba(0, 0, 0, 0.6);
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
    font-size: 32px;
  }
`;

export const ForecastTitleDays = styled.p`
  background-color: #8cd2ce;
  border-radius: 30px;
  padding: 12px;
  font-size: 28px;
  font-weight: 300;
  box-shadow: 1px 0px 5px 0px rgba(0, 0, 0, 0.4);
  @media ${media.mobile} {
    font-size: 16px;
  }
  @media ${media.tablet} {
    font-size: 12px;
  }
  @media ${media.laptop} {
    font-size: 12px;
  }
  @media ${media.desktop} {
    font-size: 16px;
  }
`;

export const ForecastWeatherImg = styled.img`
  width: 90px;
  @media ${media.mobile} {
    width: 64px;
  }
  @media ${media.tablet} {
    width: 64px;
  }
  @media ${media.laptop} {
    width: 64px;
  }
  @media ${media.desktop} {
    width: 64px;
  }
`;

export const ForecastWeatherMaxTemp = styled.p`
  font-size: 36px;
  font-weight: 500;
  margin-right: 3px;
  margin-left: 8px;
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
    font-size: 24px;
  }
`;

export const ForecastWeatherMinTemp = styled.p`
  font-size: 24px;
  font-weight: 300;
  @media ${media.mobile} {
    font-size: 12px;
  }
  @media ${media.tablet} {
    font-size: 12px;
  }
  @media ${media.laptop} {
    font-size: 12px;
  }
  @media ${media.desktop} {
    font-size: 16px;
  }
`;

export const ForecastWeatherDate = styled.p`
  font-size: 24px;
  @media ${media.mobile} {
    font-size: 12px;
  }
  @media ${media.tablet} {
    font-size: 12px;
  }
  @media ${media.laptop} {
    font-size: 12px;
  }
  @media ${media.desktop} {
    font-size: 16px;
  }
`;
/*Forecast Weather Components End */

/* City Weather Components Start */
export const CityWeatherWrapper = styled.div`
  margin-right: 5%;
  margin-left: 5%;
`;

/** AddCityCard.tsx **/
export const AddCityCardWrapper = styled.div`
  display: flex;
  justify-content: center;
  border: dashed 2px #fff;
  border-radius: 24px;
  text-align: center;
  cursor: pointer;
  background: rgba(98, 96, 96, 0.47);
  backdrop-filter: blur(6.9px);
  color: white;
  font-size: 36px;
  height: 240px;
  width: 160px;
  margin-left: 6px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  @media ${media.mobile} {
    font-size: 16px;
    height: 180px;
    width: 138px;
    margin-left: 0;
    margin-right: 26px;
  }
  @media ${media.tablet} {
    font-size: 16px;
    height: 180px;
    width: 138px;
    margin-left: 0;
    margin-right: 26px;
  }
  @media ${media.laptop} {
    font-size: 16px;
    height: 180px;
    width: 138px;
    margin-left: 0;
    margin-right: 26px;
  }
  @media ${media.desktop} {
    font-size: 24px;
    height: 180px;
    width: 138px;
    margin-left: 0;
    margin-right: 26px;
  }
`;

export const PlusIcon = styled.span`
  font-size: 36px;
  color: yellow;
  border: dashed 2px #fff;
  border-radius: 640px;
  padding: 4px 14px;
  margin-bottom: 6px;
  font-weight: 900;

  &:hover {
    background-color: #8cd2ce;
  }
  @media ${media.mobile} {
    font-size: 16px;
    border-radius: 64px;
    padding: 4px 8px;
  }
  @media ${media.tablet} {
    font-size: 16px;
    border-radius: 64px;
    padding: 4px 8px;
  }
  @media ${media.laptop} {
    font-size: 16px;
    border-radius: 64px;
    padding: 4px 8px;
  }
  @media ${media.desktop} {
    font-size: 24px;
    border-radius: 64px;
    padding: 4px 8px;
  }
`;

export const AddCityContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
/** AddCityCard.tsx **/

/** CityCard.tsx **/
export const CityCardWrapper = styled.div`
  background: rgba(98, 96, 96, 0.47);
  backdrop-filter: blur(6.9px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 24px;
  color: white;
  height: 220px;
  align-self: flex-start;
  width: 168px;
  padding: 12px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);

  @media ${media.mobile} {
    align-self: flex-start;
    height: 160px;
    width: 120px;
    padding: 12px;
  }
  @media ${media.tablet} {
    align-self: flex-start;
    height: 160px;
    width: 120px;
    padding: 12px;
  }
  @media ${media.laptop} {
    align-self: flex-start;
    height: 160px;
    width: 120px;
    padding: 12px;
  }
  @media ${media.desktop} {
    align-self: flex-start;
    height: 160px;
    width: 120px;
    padding: 12px;
    margin-bottom: 12px;
  }
`;

export const CityWeatherName = styled.p`
  font-size: 32px;

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
  }
`;

export const CityWeatherDegree = styled.p`
  font-size: 24px;
  font-weight: 100;
  @media ${media.mobile} {
    font-size: 12px;
  }
  @media ${media.tablet} {
    font-size: 12px;
  }
  @media ${media.laptop} {
    font-size: 12px;
  }
  @media ${media.desktop} {
  }
`;

export const CityWeatherIconImg = styled.img`
  width: 96px;
  @media ${media.mobile} {
    width: 64px;
  }
  @media ${media.tablet} {
    width: 64px;
  }
  @media ${media.laptop} {
    width: 64px;
  }
  @media ${media.desktop} {
    width: 72px;
  }
`;

export const RemoveButton = styled(FaX)`
  cursor: pointer;
  padding: 6px;
  border-radius: 50%;
  background-color: #8cd2ce;
  margin-top: 12px;
  transition: ease-out 0.3s;
  width: 24px;
  height: 24px;
  background-color: #8cd2ce;

  &:hover {
    background-color: rgb(184, 17, 17);
  }

  @media ${media.mobile} {
    margin-top: 6px;
    width: 12px;
    height: 12px;
  }
  @media ${media.tablet} {
    margin-top: 6px;
    width: 12px;
    height: 12px;
  }
  @media ${media.laptop} {
    margin-top: 6px;
    width: 12px;
    height: 12px;
  }
  @media ${media.desktop} {
  }
`;
/** CityCard.tsx **/

/** CityWeather.tsx **/
export const CitySwiper = styled(Swiper)`
  .swiper-pagination-bullet-active {
    background-color: #8cd2ce !important;
  }
`;

export const CitySlider = styled.div`
  margin-top: 32px;
  margin-bottom: 32px;
  @media ${media.mobile} {
    margin-bottom: 12px;
  }
  @media ${media.tablet} {
    margin-bottom: 12px;
  }
  @media ${media.laptop} {
    margin-bottom: 12px;
  }
  @media ${media.desktop} {
    margin-bottom: 16px;
  }
`;
/** CityWeather.tsx **/

/** Modal.tsx **/
export const AddCityInput = styled.input`
  border: none;
  border-radius: 12px;
  height: 32px;
  margin-bottom: 12px;
  padding: 12px;
  font-size: 32px;

  @media ${media.mobile} {
    padding: 6px;
    font-size: 18px;
  }
  @media ${media.tablet} {
    padding: 6px;
    font-size: 18px;
  }
  @media ${media.laptop} {
    padding: 6px;
    font-size: 18px;
  }
`;

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(98, 96, 96, 0.47);
  backdrop-filter: blur(6.9px);
`;

export const ModalButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

export const AddCityButton = styled.button`
  background-color: #8cd2ce;
  font-weight: 500;
  color: white;
  cursor: pointer;
  border-radius: 64px;
  border: none;
  font-size: 24px;
  padding: 6px 6px 2px 6px;
`;

export const CloseButton = styled.button`
  background-color: rgb(184, 17, 17);
  font-weight: 500;
  color: white;
  cursor: pointer;
  border-radius: 64px;
  border: none;
  font-size: 24px;
  padding: 6px 6px 2px 6px;
`;
/** Modal.tsx **/

/* City Weather Component End */
