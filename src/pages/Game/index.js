import * as S from "./styled";
import ReactPlayer from "react-player";
import { useState, useEffect } from "react";
import { db } from "../../firebase.config";
import { collection, getDocs } from "firebase/firestore";
import { Modal } from "../../components/Modal";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
import { waitFor } from "@testing-library/dom";

 function Game() {
  const objectsCollectionRef = collection(db, "objects");
  const [objects, setObjects] = useState([]);
  const [timerCounter, setTimerCounter] = useState(50);
  const [objectCounter, setObjectCounter] = useState(0);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [guessWord, setGuessWord] = useState("");
  const [color, setColor] = useState("white")
  const [score, setScore] = useState(0.0)
  const [skip, setSkip] = useState(false)
  const [right, setRightChoices] = useState(0)
  const [wrongDebit, setDebit] = useState(false)
  const [labelList, setLabelList] = useState([])
  
  var stringSimilarity = require("string-similarity");

  useEffect(() => {
    if (timerCounter > 0 && !skip) {
      if(wrongDebit){
        setTimerCounter(timerCounter - 2)
        setDebit(!wrongDebit)
      }
      else
      setTimeout(() => setTimerCounter(timerCounter - 1), 1000);
    } else if (timerCounter === 0 || skip) {
      if (objectCounter === objects.length - 1) {
        setShowModal(true);
      } else {
        setSkip(false)
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

  

  const validateGuess = () => {
    if(guessWord){
      console.log(objects[objectCounter].labels)
      var possibleMatches = stringSimilarity.findBestMatch(guessWord.toLowerCase(), objects[objectCounter].labels.map((item)=>item.toLowerCase()));
      var bestMatch = possibleMatches['bestMatch']
      if(bestMatch['rating'] > 0.75){
        console.log("acertou!");
        setColor("green");
        setRightChoices(right+1)
        var score_ = 1/25*(50-timerCounter)**2-4*(50-timerCounter) + 100;
        setScore(score + score_);

        setTimeout(() => setColor("white"), 600);
        setTimeout(() => setSkip(true), 600);
        setTimeout(() => setGuessWord(""), 600);

      }else{
        console.log("errou!")
        setColor("red") 
        setTimeout(() => setColor("white"), 600);
        setDebit(!wrongDebit)
      }
    }

  }
  
  const handleKeyPress = (event) => {
    // look for the `Enter` keyCode
    if (event.keyCode === 13 || event.which === 13) {
      validateGuess()
    }
  }


  return (
    <>
      <S.Wrapper>
        <S.PageTitle>Quais foram os inputs para o modelo?</S.PageTitle>
        <S.Row>
          <div style={{ width: "160px", marginRight: "100px" }} />
          <S.VideoFrame>
            {(!loading) && (
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
          <S.GuessInput
            required
            placeholder="Insira um palpite..."
            value={guessWord}
            onInput={(e) => setGuessWord(e.target.value)}
            disabled={loading}
            color = {color}
            onKeyPress={handleKeyPress}
          />
          <S.NextButton onClick={validateGuess} />
        </S.Row>
      </S.Wrapper>
      {showModal && (
        <Modal>
          <S.ModalTitle>Fim de jogo</S.ModalTitle>
          <S.ModalParagraph>Você passou por todos os vídeos!</S.ModalParagraph>
          <S.ModalParagraph>Score: {score}</S.ModalParagraph>
          <Button
            onClick={() => redirectTo("https://github.com/TailUFPB/adivinh-IA")}
          >
            Saiba mais!
          </Button>
          
          <Button
            
          >
            <Link style={{color:"white"}} to="/">
            Home Page
            </Link>
          </Button>
        </Modal>
      )}
    </>
  );
}

export default Game;
