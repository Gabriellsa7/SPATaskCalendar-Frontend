import * as S from "./styles";
import * as I from "./mocks";

export default function CategoriesSection() {
  return (
    <S.Container>
      <S.CategoryTitle>Categories</S.CategoryTitle>
      <S.CategoriesSection>
        <S.IconSection>
          <S.IconText>
            <I.SlMenu /> Category A
          </S.IconText>
        </S.IconSection>
        5
      </S.CategoriesSection>
      <S.CategoriesSection>
        <S.IconSection>
          <S.IconText>
            <I.SlMenu /> Category B
          </S.IconText>
        </S.IconSection>
        5
      </S.CategoriesSection>
      <S.CategoriesSection>
        <S.IconSection>
          <S.IconText>
            <I.SlMenu /> Category C
          </S.IconText>
        </S.IconSection>
        5
      </S.CategoriesSection>
    </S.Container>
  );
}
