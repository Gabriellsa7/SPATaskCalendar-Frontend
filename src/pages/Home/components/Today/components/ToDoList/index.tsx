import * as S from "./styles";
// import { FaRegCircleXmark } from "react-icons/fa6";
import { ImRadioUnchecked } from "react-icons/im";
// import { ImRadioChecked } from "react-icons/im";

export default function ToDoList() {
  return (
    <S.Container>
      <S.Title>To do List</S.Title>
      <S.SectionToDoList>
        <S.Task>
          <S.SectionIconText>
            <ImRadioUnchecked /> Task
          </S.SectionIconText>
          19 de Dec.
        </S.Task>
      </S.SectionToDoList>
    </S.Container>
  );
}
