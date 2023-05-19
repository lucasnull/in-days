import React from "react";
var WORD_TIMEOUT: NodeJS.Timeout;

export const useActionWord = (words: string[]) => {
  const maxIndex = words.length - 1;
  const [word, setWord] = React.useState<string>();
  const [wordIndex, setWordIndex] = React.useState<number>(0);

  React.useEffect(() => {
    if (word !== null && word !== undefined) {
      const randomTimeout = Math.floor(Math.random() * (300 - 50 + 1) + 50);
      WORD_TIMEOUT = setTimeout(() => runWordAnimation(), randomTimeout);
    }

    return () => clearTimeout(WORD_TIMEOUT);
  }, [word]);

  React.useEffect(() => {
    setWord("");
  }, [wordIndex]);

  const runWordAnimation = () => {
    const finalWord = words[wordIndex];

    if (word === finalWord) {
      WORD_TIMEOUT = setTimeout(() => changeWord(), 2000);
      return;
    }

    const nextPiece = finalWord.replace(word!, "")[0];
    const newWord = word + nextPiece;
    setWord(newWord);
  };

  const changeWord = () => {
    if (wordIndex === maxIndex) {
      setWordIndex(0);
      return;
    }

    setWordIndex(wordIndex + 1);
  };

  return word;
};
