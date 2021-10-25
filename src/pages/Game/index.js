import * as S from "./styled";
import { useState, useEffect } from "react";

import { db } from "../../firebase.config";
import { collection, getDocs } from "firebase/firestore";

function Game() {
  const objectsCollectionRef = collection(db, "objects");
  const [objects, setObjects] = useState([]);
  const [counter, setCounter] = useState(30);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (counter > 0) {
      setTimeout(() => setCounter(counter - 1), 1000);
    }
  }, [counter]);

  useEffect(() => {
    const getObjects = async () => {
      const data = await getDocs(objectsCollectionRef);
      setObjects(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setLoading(false);
    };

    getObjects();
  }, [objectsCollectionRef]);

  return (
    <S.Wrapper>
      <S.PageTitle>Quais foram os inputs para o modelo?</S.PageTitle>
      <S.Row>
        <div style={{ width: "160px", marginRight: "100px" }} />
        <S.ImageFrame>
          {!loading && objects.length>0 && <S.Image src={objects[0].imgUrls[1]} />}
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

export default Game;