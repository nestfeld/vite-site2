import React, { useState } from "react";

const DialogueBlock = ({
  title = "Диалог",
  dialogues = [],
  notes = []
}) => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="dialogue-block">
      <h2>{title}</h2>
      <div className="dialogue-lines">
        {dialogues.map((line, idx) => (
          <div
            key={idx}
            className={`dialogue-line ${activeIndex === idx ? "highlighted" : ""}`}
            onClick={() => setActiveIndex(activeIndex === idx ? null : idx)} // Toggle translation
          >
            <span className="speaker">{line.speaker}</span>
            <div className={`text-container ${activeIndex === idx ? "expanded" : ""}`}>
              <p className="text">{line.text}</p>
              <p className="translation">{line.translation}</p>
            </div>
          </div>
        ))}
      </div>
      {notes.length > 0 && (
        <div className="notes">
          <h3>Заметки</h3>
          <ul>
            {notes.map((note, i) => (
              <li key={i}>{note}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DialogueBlock;