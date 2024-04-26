import CalendarSection from "./components/CalendarSection";
import CategoriesSection from "./components/CategoriesSection";
import * as S from "./styles";

export default function Home() {
  return (
    <S.Container>
      <S.RightSection>
        <S.Title>Task Calendar</S.Title>
        <CalendarSection />
        <CategoriesSection />
      </S.RightSection>
      <S.LeftSection></S.LeftSection>
    </S.Container>
  );
}
