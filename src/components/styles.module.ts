import styled from "styled-components";

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
