import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  overflow-y: scroll;
  backdrop-filter: blur(2px);

  &::-webkit-scrollbar {
    width: 0px;
  }
`;

export const ModalContent = styled.div`
  display: flex;
  max-width: 40%;
  flex-direction: column;
  align-items: center;
  background: white;
  text-align: center;
  border-radius: 8px;
  padding 16px;
`;
