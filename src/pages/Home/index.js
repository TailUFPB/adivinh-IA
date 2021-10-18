import * as S from "./styled";
import { useState, useEffect } from "react";
import TailLogo from "../../assets/logo-tail.png";

export const Home = () => {
  const [counter, setCounter] = useState(30);

  useEffect(() => {
    if (counter > 0) {
      setTimeout(() => setCounter(counter - 1), 1000);
    }
  }, [counter]);

  return (
    <S.Wrapper>
      <S.PageLogo src={TailLogo} />
      <S.PageTitle>Quais foram os inputs para o modelo?</S.PageTitle>
      <S.Row>
        <div style={{ width: "160px", marginRight: "100px" }} />
        <S.ImageFrame>
          <S.Image src="https://i.ibb.co/sWbh6wP/castle-by-van-gogh.png" />
        </S.ImageFrame>
        <S.CounterContainer>
          <h1>{counter}</h1>
        </S.CounterContainer>
      </S.Row>
      <S.Row>
        <div style={{ width: "65px", marginRight: "21px" }} />
        <S.GuessInput placeholder="Insira um palpite..." />
        <S.NextButton />
      </S.Row>
    </S.Wrapper>
  );
};
