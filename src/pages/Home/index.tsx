import CalendarSection from "./components/CalendarSection";
import CategoriesSection from "./components/CategoriesSection";
import Profile from "./components/Profile";
import * as S from "./styles";

export default function Home() {
  return (
    <S.Container>
      <S.RightSection>
        <S.Title>Task Calendar</S.Title>
        <CalendarSection />
        <CategoriesSection />
        <Profile />
      </S.RightSection>
      <S.LeftSection></S.LeftSection>
    </S.Container>
  );
}
