import styled from "styled-components";

export const WeatherWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  border-radius: 12px;
  border: 1px solid rgba(98, 96, 96, 0.1);
  background: rgba(98, 96, 96, 0.47);
  backdrop-filter: blur(6.900000095367432px);
  margin-left: 5%;
`;

export const NavbarWrapper = styled.div`
  display: flex;
  margin-left: 80%;
  margin-top: 12px;
`;

export const SearchBarWrapper = styled.div`
  display: flex;
  border-radius: 24px;
  backdrop-filter: blur(10px) saturate(130%);
  background-color: rgba(98, 96, 96, 0.45);
  width: fit-content;
  padding: 6px;
  align-items: center;
`;

export const LanguageChangeButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  backdrop-filter: blur(10px) saturate(130%);
  background-color: #b8b7b7;
  border-radius: 24px;
`;

export const CityWeatherWrapper = styled.div`
  width: 50%;
  margin-left: 5%;

  margin-top: 5%;
`;

export const ForecastWeatherWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  border-radius: 12px;
  border: 1px solid rgba(98, 96, 96, 0.1);
  background: rgba(98, 96, 96, 0.47);
  backdrop-filter: blur(6.900000095367432px);
  margin-left: 5%;
`;
