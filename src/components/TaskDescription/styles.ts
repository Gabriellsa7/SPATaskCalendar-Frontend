import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 30px;
  margin: 10px 20px;
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

export const DescriptionSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Description = styled.p`
  display: flex;
  align-items: center;
  gap: 5px;
  padding-right: 1.25rem;
`;

export const TextArea = styled.textarea`
  /* background-color: transparent;
  border: none;
  width: 80%;
  padding: 0.625rem 0.625rem;
  outline: none;

  &:hover {
    outline: none;
  } */
  width: 100%;
  height: 100px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  resize: vertical;
  outline: none;

  &:hover {
    outline: none;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.9375rem 1.25rem;
  border: none;
  border-radius: 10px;
  background-color: #c0c0c0;

  &:hover {
    cursor: pointer;
    background-color: #dfdfdf;
    border-radius: 10px;
  }
`;
