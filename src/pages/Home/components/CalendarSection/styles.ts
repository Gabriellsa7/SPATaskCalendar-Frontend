import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 15px 0 10px 15px;
  gap: 30px;
  width: 40%;
`;

export const Title = styled.h1``;

export const CalendarSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 15px;
  width: 25%;
`;

export const IconSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;
`;

export const IconText = styled.p`
  font-size: 18px;
`;
