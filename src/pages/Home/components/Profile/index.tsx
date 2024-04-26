import * as S from "./styles";
import profile from "../../../../assets/profile.png";

export default function Profile() {
  return (
    <S.Container>
      <S.Image src={profile} alt="Profile Image" />
      <S.Name>Gabriel Santana</S.Name>
    </S.Container>
  );
}
