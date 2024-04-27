import * as S from "./styles";
import { FaRegCircleXmark } from "react-icons/fa6";
import { ImRadioChecked } from "react-icons/im";

export default function Completed() {
  return (
    <S.Container>
      <S.Title>Completed</S.Title>
      <S.CompletedWrapper>
        <S.SectionCompleted>
          <S.Task>
            <S.SectionIconText>
              <ImRadioChecked />
              Task
            </S.SectionIconText>
            <S.SectionIconDelete>
              6 de Dec.
              <FaRegCircleXmark />
            </S.SectionIconDelete>
          </S.Task>
        </S.SectionCompleted>
      </S.CompletedWrapper>
    </S.Container>
  );
}
