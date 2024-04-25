import CalendarSection from "./components/CalendarSection";
import CategoriesSection from "./components/CategoriesSection";
import * as S from "./styles";

export default function Home() {
  return (
    <S.Container>
      <S.RightSection>
        <CalendarSection />
      </S.RightSection>
      <S.LeftSection>
        <CategoriesSection />
      </S.LeftSection>
    </S.Container>
  );
}
