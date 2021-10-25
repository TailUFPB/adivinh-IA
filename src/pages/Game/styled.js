import styled from "styled-components";
import NextButtonLogo from "../../assets/NextButton.png";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
  justify-content: space-around;
  align-items: center;
  background: linear-gradient(180deg, #a1d2d2 0%, #185a80 100%);
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  margin-top: 12px;
`;

export const PageLogo = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 183px;
  height: 176px;
`;

export const PageTitle = styled.h1`
  font-weight: bold;
  font-size: 40px;
  text-align: center;
  margin: 0;
  color: #ffffff;
`;

export const ImageFrame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 490px;
  height: 490px;
  background: white;
`;

export const Image = styled.img`
  width: 450px;
  height: 450px;
  object-fit: cover;
`;

export const CounterContainer = styled.div`
  display: flex;
  width: 160px;
  height: 118px;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  border-radius: 30px;
  margin-left: 100px;

  h1 {
    font-weight: bold;
    font-size: 100px;
    margin: 0;
    text-align: center;
    color: #1f67ef;
    margin-bottom: 10px;
  }
`;

export const GuessInput = styled.input`
  border: none;
  outline: none;
  width: 537px;
  height: 65px;
  background: #ffffff;
  border-radius: 24px;

  font-size: 30px;
  line-height: 37px;
  text-align: center;
  color: #000000;
`;

export const NextButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  margin-left: 21px;
  width: 65px;
  height: 65px;
  border-radius: 50%;
  background: #ffffff;
  background-image: url(${NextButtonLogo});
`;
