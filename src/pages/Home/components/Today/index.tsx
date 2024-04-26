import * as S from "./styles";
import { TfiMenuAlt } from "react-icons/tfi";

export default function Today() {
  return (
    <S.Container>
      <S.SectionIconTitle>
        <TfiMenuAlt />
        <S.Title>Today</S.Title>
      </S.SectionIconTitle>
      <S.SectionInput>
        <S.MainInput placeholder="Add a task to the list" />
      </S.SectionInput>
    </S.Container>
  );
}
