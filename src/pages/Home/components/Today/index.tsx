import * as S from "./styles";
import { TfiMenuAlt } from "react-icons/tfi";
import { MdOutlineCalendarToday } from "react-icons/md";
import { format } from "date-fns";
import { pt } from "date-fns/locale";

export default function Today() {
  // Gets today's date
  const today = new Date();

  // Formats the date using the desired format with the month in full
  const formattedDate = format(today, "dd MMMM yyyy", { locale: pt });

  return (
    <S.Container>
      <S.SectionIconTitle>
        <TfiMenuAlt />
        <S.Title>Today</S.Title>
      </S.SectionIconTitle>
      <S.Form>
        <S.MainInput placeholder="+ Add a task to the list" />
        <S.Calendar>
          <MdOutlineCalendarToday />
          <p>{formattedDate}</p>
        </S.Calendar>
      </S.Form>
    </S.Container>
  );
}
