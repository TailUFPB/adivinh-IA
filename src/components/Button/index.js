import * as S from "./styled";

export const Button = ({ children, onClick }) => {
  return <S.Button onClick={onClick}>{children}</S.Button>;
};
