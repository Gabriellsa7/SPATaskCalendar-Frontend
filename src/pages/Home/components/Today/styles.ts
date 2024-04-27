import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.875rem;
  padding-left: 1.875rem;
`;

export const SectionIconTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;
`;

export const Title = styled.h1``;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 1.25rem;
  background-color: #eaeaea;
  padding: 0.3125rem 0.625rem;
  border-radius: 8px;
  height: 100%;
`;

export const Calendar = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  padding-right: 1.25rem;
`;

export const MainInput = styled.input`
  background-color: transparent;
  border: none;
  width: 80%;
  padding: 0.625rem 0.625rem;
  outline: none;

  &:hover {
    outline: none;
  }
`;
