import styled from "styled-components";
import NextButtonLogo from "../../assets/NextButton.png";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
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

export const PageTitle = styled.h1`
  font-weight: bold;
  font-size: 40px;
  text-align: center;
  margin: 0;
  color: #ffffff;
`;

export const VideoFrame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 490px;
  height: 490px;
  background: white;
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
  background-color: ${props => props.color || "#ffffff"};
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

export const ModalTitle = styled.h1`
  font-weight: bold;
  font-size: 28px;
  text-align: center;
  margin: 0;
  margin-bottom: 12px;
`;

export const ModalParagraph = styled.p`
  font-size: 18px;
  text-align: center;
  margin: 0;
  margin-bottom: 16px;
`;
