import React from "react";
import { useParams } from "react-router-dom";
import StudySession from "./StudySession";
import Header from "../Header/Header";

const StudyPage = () => {
  const { deckId } = useParams();

  return(
    <>
      <div className="appContainerMain">
        <Header/>
        <div className="study-block-container">
          <div className="study-block-wrapper">
            <StudySession deckId={deckId} />
          </div>
        </div>
      </div>
    </>
  ) 
};

export default StudyPage;
