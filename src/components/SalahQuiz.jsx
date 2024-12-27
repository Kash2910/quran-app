import React from 'react';
import salah from '../assets/salah';

const FlippingCards = ({ index, currentlyFlipped, setCurrentlyFlipped, englishText, meaningText }) => {
  const isFlipped = currentlyFlipped === index;

  const handleClick = () => {
    setCurrentlyFlipped(isFlipped ? null : index);
  };

  return (
    <div className="flip-card-container m-4" onClick={handleClick}>
      <div className={`flip-card ${isFlipped ? 'flipped' : ''}`}>
        <div className="flip-card-front card-content bg-blue-300 p-4 rounded-lg shadow-md text-center">
          <h2 className="text-xl font-bold">{englishText}</h2>
        </div>
        <div className="flip-card-back card-content bg-green-300 p-4 rounded-lg shadow-md text-center">
          <h2 className="text-xl font-bold">{meaningText}</h2>  
        </div>
      </div>
    </div>
  );
};

const SalahQuiz = ({currentlyFlipped, setCurrentlyFlipped }) => {
  return (
    <div className="flex justify-center items-center p-4 bg-gray-100 min-h-screen">
      <div className="container flex justify-center items-start flex-wrap m-4 p-3 w-3/4">
        {salah.map((qa, index) => (
          <FlippingCards
            key={index}
            index={index}
            currentlyFlipped={currentlyFlipped}
            setCurrentlyFlipped={setCurrentlyFlipped}
            englishText={qa.englishText}
            meaningText={qa.meaningText}
          />
        ))}
      </div>
    </div>
  );
};

export default SalahQuiz;