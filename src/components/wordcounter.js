import { useState, useEffect } from "react";
export function Wordcounter() {
  const [text, setText] = useState("");
  const [wordCounter, setwordCounter] = useState(0);
  const handleChange = (event) => {
    setText(event.target.value);
  };
  useEffect(() => {
    const words = text.split(" ");
    let wordCounter = 0;
    words.forEach((word) => {
      if (word.trim() !== "") {
        wordCounter++;
      }
    });
    setwordCounter(wordCounter);
  }, [text]);
  return (
    <div class="container1">
      <div class="container2">
        <h1>Responsive Paragraph Word Counter </h1>
        <textarea
          value={text}
          onChange={handleChange}
          placeholder="Type here"
        ></textarea>
        <div class="word-count">Word Count : {wordCounter} </div>
      </div>
    </div>
  );
}