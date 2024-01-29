import styled from "styled-components";

export const MainWrapper = styled.div`
  display: flex;
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
