import * as S from "./styles";
import * as I from "./mocks";

export default function CalendarSection() {
  return (
    <S.Container>
      <S.CalendarSection>
        <S.IconSection>
          <S.IconText>
            <I.MdOutlineCalendarToday />
            Today
          </S.IconText>
        </S.IconSection>
        3
      </S.CalendarSection>
      <S.CalendarSection>
        <S.IconSection>
          <S.IconText>
            <I.LuSunrise />
            Tomorrow
          </S.IconText>
        </S.IconSection>
        2
      </S.CalendarSection>
      <S.CalendarSection>
        <S.IconSection>
          <S.IconText>
            <I.TbArrowsCross />
            Next 7 days
          </S.IconText>
        </S.IconSection>
        5
      </S.CalendarSection>
    </S.Container>
  );
}
