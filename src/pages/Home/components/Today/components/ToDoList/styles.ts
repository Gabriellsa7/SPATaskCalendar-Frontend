import styled from "styled-components";

export const Container = styled.section`
  margin-right: 20px;
  /* Styling the scrollbar */
  ::-webkit-scrollbar {
    width: 8px; /* Sets the width of the scroll bar */
  }

  ::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 4px;
  }
`;

export const Title = styled.p``;

export const TaskName = styled.p`
  text-decoration: none;
  color: black;
`;

export const SectionToDoList = styled.section`
  margin: 2rem 2rem 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const ToDoListWrapper = styled.div`
  max-height: 12.5rem;
  overflow-y: auto;
`;

export const Task = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TaskBorderBottom = styled.div`
  border-bottom: 1px solid gray;
`;

export const SectionIconText = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const SectionIconDelete = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-right: 0.3125rem;
`;

export const ButtonRemove = styled.button`
  background: transparent;
  border: none;

  &:hover {
    cursor: pointer;
  }
`;

export const UncheckedButton = styled.button`
  background: transparent;
  border: none;

  &:hover {
    cursor: pointer;
  }
`;
