import * as S from "./styles";
import * as I from "./mocks";
import { useState } from "react";

export default function CalendarSection() {
  const [selectedItem, setSelectedItem] = useState("today");

  return (
    <S.Container>
      <S.IconSection>
        <I.IoMdCheckmarkCircleOutline color="green" size={40} />
        <S.Title>Task Calendar</S.Title>
      </S.IconSection>
      <S.CalendarSection
        className={selectedItem === "today" ? "selected" : ""}
        onClick={() => setSelectedItem("today")}
      >
        <S.IconSection>
          <I.MdOutlineCalendarToday size={25} />
          <S.IconText>Today</S.IconText>
        </S.IconSection>
        3
      </S.CalendarSection>
      <S.CalendarSection
        className={selectedItem === "tomorrow" ? "selected" : ""}
        onClick={() => setSelectedItem("tomorrow")}
      >
        <S.IconSection>
          <I.LuSunrise size={25} />
          <S.IconText>Tomorrow</S.IconText>
        </S.IconSection>
        2
      </S.CalendarSection>
      <S.CalendarSection
        className={selectedItem === "next7days" ? "selected" : ""}
        onClick={() => setSelectedItem("next7days")}
      >
        <S.IconSection>
          <I.TbArrowsCross size={25} />
          <S.IconText>Next 7 days</S.IconText>
        </S.IconSection>
        5
      </S.CalendarSection>
    </S.Container>
  );
}
