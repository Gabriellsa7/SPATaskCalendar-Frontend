import CalendarSection from "./components/CalendarSection";
import CategoriesSection from "./components/CategoriesSection";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

import Profile from "./components/Profile";
import * as S from "./styles";

export default function Home() {
  return (
    <S.Container>
      <S.RightSection>
        <S.IconSection>
          <IoMdCheckmarkCircleOutline />
          <S.Title>Task Calendar</S.Title>
        </S.IconSection>
        <CalendarSection />
        <CategoriesSection />
        <Profile />
      </S.RightSection>
      <S.LeftSection></S.LeftSection>
    </S.Container>
  );
}
