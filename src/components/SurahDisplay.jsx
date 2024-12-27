import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable'; // Import for swipe gestures

const FlippingCard = ({ surah, isFlipped, onFlip }) => {
  return (
    <div className="flip-card-container" onClick={onFlip}>
      <div className={`flip-card ${isFlipped ? 'flipped' : ''}`}>
        <div className="flip-card-front card-content bg-blue-300 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-bold font-arabic">{surah.surahNumber}</h2>
          <h2 className="text-xl font-bold font-arabic">{surah.englishName}</h2>
        </div>
        <div className="flip-card-back card-content bg-green-300 p-4 rounded-lg shadow-md font-english">
          <p>{surah.origin}</p>
        </div>
      </div>
    </div>
  );
};

const SurahDisplay = ({ surahs }) => {
  const [currentSurahIndex, setCurrentSurahIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNextSurah = () => {
    setIsFlipped(false); // Unflip before changing surah
    setCurrentSurahIndex((prevIndex) => (prevIndex + 1) % surahs.length);
  };

  const handlePreviousSurah = () => {
    setIsFlipped(false); // Unflip before changing surah
    setCurrentSurahIndex((prevIndex) => (prevIndex - 1 + surahs.length) % surahs.length);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNextSurah,
    onSwipedRight: handlePreviousSurah,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  const currentSurah = surahs[currentSurahIndex];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4" {...swipeHandlers}>
      <div className="flex items-center justify-between w-3/4 max-w-lg mb-4"> {/* Key change: items-center */}
        <button className="bg-gray-300 px-4 py-2 rounded-lg" onClick={handlePreviousSurah}>
          &lt;
        </button>
        <div> {/* Container for the card */}
          {currentSurah && (
            <FlippingCard surah={currentSurah} isFlipped={isFlipped} onFlip={handleFlip} />
          )}
        </div>
        <button className="bg-gray-300 px-4 py-2 rounded-lg" onClick={handleNextSurah}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default SurahDisplay;