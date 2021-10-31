import * as S from "./styled";

export const Modal = ({ children }) => {
  return (
    <S.ModalWrapper>
      <S.ModalContent>{children}</S.ModalContent>
    </S.ModalWrapper>
  );
};
