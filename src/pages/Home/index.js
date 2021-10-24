import * as S from "./styled";
import ReactPlayer from "react-player";
import { useState, useEffect } from "react";
import TailLogo from "../../assets/logo-tail.png";

import { db } from "../../firebase.config";
import { collection, getDocs } from "firebase/firestore";
import { Modal } from "../../components/Modal";
import { Button } from "../../components/Button";

export const Home = () => {
  const objectsCollectionRef = collection(db, "objects");
  const [objects, setObjects] = useState([]);
  const [timerCounter, setTimerCounter] = useState(50);
  const [objectCounter, setObjectCounter] = useState(0);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (timerCounter > 0) {
      setTimeout(() => setTimerCounter(timerCounter - 1), 1000);
    } else if (timerCounter === 0) {
      if (objectCounter === objects.length - 1) {
        setShowModal(true);
      } else {
        setObjectCounter(objectCounter + 1);
        setTimerCounter(50);
      }
    }
  }, [timerCounter]);

  useEffect(() => {
    const getObjects = async () => {
      const data = await getDocs(objectsCollectionRef);
      setObjects(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setLoading(false);
    };

    getObjects();
  }, [objectsCollectionRef]);

  const redirectTo = (url) => {
    window.open(url);
  };

  return (
    <>
      <S.Wrapper>
        <S.PageLogo src={TailLogo} />
        <S.PageTitle>Quais foram os inputs para o modelo?</S.PageTitle>
        <S.Row>
          <div style={{ width: "160px", marginRight: "100px" }} />
          <S.VideoFrame>
            {!loading && (
              <ReactPlayer
                url={objects[objectCounter].videoUrl}
                width="450px"
                height="450px"
                controls={false}
                muted
                playing
              />
            )}
          </S.VideoFrame>
          <S.CounterContainer>
            <h1>{timerCounter}</h1>
          </S.CounterContainer>
        </S.Row>
        <S.Row>
          <div style={{ width: "65px", marginRight: "21px" }} />
          <S.GuessInput placeholder="Insira um palpite..." />
          <S.NextButton />
        </S.Row>
      </S.Wrapper>
      {showModal && (
        <Modal>
          <S.ModalTitle>Fim de jogo</S.ModalTitle>
          <S.ModalParagraph>
            Voce passou por todas as imagens parabens por favor acesso o site da
            tail para mais informações
          </S.ModalParagraph>
          <Button
            onClick={() => redirectTo("https://github.com/TailUFPB/adivinh-IA")}
          >
            Saiba mais!
          </Button>
        </Modal>
      )}
    </>
  );
};
