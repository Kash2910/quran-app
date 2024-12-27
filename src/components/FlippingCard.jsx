// About.js (or wherever your FlippingCard component is)
import React from 'react';
import surahs from '../assets/surah';

const FlippingCards = ({ index, currentlyFlipped, setCurrentlyFlipped, surahNumber, arabicName, description, numberOfVerses, englishMeaning, origin, englishName }) => {
  const isFlipped = currentlyFlipped === index;

  const handleClick = () => {
    setCurrentlyFlipped(isFlipped ? null : index);
  };

  return (
    <div className="flip-card-container m-4" onClick={handleClick}>
      <div className={`flip-card ${isFlipped ? 'flipped' : ''}`}>
        <div className="flip-card-front card-content bg-blue-300 p-4 rounded-lg shadow-md text-center">
          <h2 className="text-xl font-bold">{surahNumber} : {arabicName}</h2>
          <h2 className="text-xl font-bold">{englishName} | {englishMeaning}</h2>
        </div>
        <div className="flip-card-back card-content bg-green-300 p-4 rounded-lg shadow-md text-center">
          <h2 className="text-xl font-bold">Verse: {numberOfVerses} | {origin}</h2>  
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

const FlippingCard = ({currentlyFlipped, setCurrentlyFlipped }) => {
  return (
    <div className="flex justify-center items-center p-4 bg-gray-100 min-h-screen">
      <div className="container flex justify-center items-start flex-wrap m-4 p-3 w-3/4">
        {surahs.map((qa, index) => (
          <FlippingCards
            key={index}
            index={index}
            currentlyFlipped={currentlyFlipped}
            setCurrentlyFlipped={setCurrentlyFlipped}
            surahNumber={qa.surahNumber}
            arabicName={qa.arabicName}
            englishName={qa.englishName}
            origin={qa.origin}
            englishMeaning={qa.englishMeaning}
            numberOfVerses={qa.numberOfVerses}
            description={qa.description}
          />
        ))}
      </div>
    </div>
  );
};

export default FlippingCard;