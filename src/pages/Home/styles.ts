import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  height: 100vh;
  width: 100vw;
  flex: 1;
  background: #e5e5e5;
`;

export const IconSection = styled.section`
  display: flex;
  align-items: center;
`;

export const RightSection = styled.section`
  display: flex;
  flex: 4;
  flex-direction: column;
  background-color: #fff;
  padding-top: 1.6875rem;
`;

export const LeftSection = styled.section`
  flex: 1;
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: 3.125rem;
  padding-top: 1.25rem;
`;
