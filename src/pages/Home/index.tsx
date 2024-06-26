import CalendarSection from "./components/CalendarSection";
import CategoriesSection from "./components/CategoriesSection";

import Profile from "./components/Profile";
import Today from "./components/Today";
import * as S from "./styles";

export default function Home() {
  return (
    <S.Container>
      <S.LeftSection>
        <CalendarSection />
        <CategoriesSection />
        <Profile />
      </S.LeftSection>
      <S.RightSection>
        <Today />
      </S.RightSection>
    </S.Container>
  );
}
