import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
  justify-content: space-around;
  align-items: center;
  background: linear-gradient(180deg, #a1d2d2 0%, #185a80 100%);
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



export const Image = styled.img`
  width: 450px;
  height: 450px;
  object-fit: cover;
`;



export const StartButton = styled.button`
  border: 2px solid black;
  outline: none;
  cursor: pointer;
  width: 30vw;
  margin: 10px;
  height: 65px;
  border-radius: 5%;
  background: #ffffff;
`;
