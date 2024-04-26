import CalendarSection from "./components/CalendarSection";
import CategoriesSection from "./components/CategoriesSection";

import Profile from "./components/Profile";
import * as S from "./styles";

export default function Home() {
  return (
    <S.Container>
      <S.RightSection>
        <CalendarSection />
        <CategoriesSection />
        <Profile />
      </S.RightSection>
      <S.LeftSection>volta aqui</S.LeftSection>
    </S.Container>
  );
}
