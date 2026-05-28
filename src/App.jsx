import { useState } from 'react';
import AmplopGate from './components/AmplopGate';
import MainContent from './components/MainContent/MainContent';
import petalImg from './assets/petal.webp';
import './index.css'; 

function App() {
  const [showContent, setShowContent] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const [randomPetals] = useState(() => {
    return Array.from({ length: 22 }).map((_, index) => ({
      id: index,
      left: Math.random() * 100 + '%',                  
      delay: Math.random() * 5 + 's',                   
      duration: Math.random() * 4 + 4 + 's',            
      size: Math.random() * 60 + 25 + 'px',             
      rotation: Math.random() * 360 + 'deg',            
    }));
  });

  const handleOpenEnvelope = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShowContent(true);
    }, 550);
  };

  return (
    <div className="app-wrapper">
      
      {/* --- LAYER KELOPAK GLOBAL (TETAP JATUH SAAT PINDAH HALAMAN) --- */}
      <div className="global-petal-container">
        {randomPetals.map((petal) => (
          <img
            key={petal.id}
            src={petalImg}
            alt="falling petal"
            className="global-falling-petal"
            style={{
              left: petal.left,
              animationDelay: petal.delay,
              animationDuration: petal.duration,
              width: petal.size,
              '--start-rot': petal.rotation,
            }}
          />
        ))}
      </div>

      {/* --- LAYER KONTEN UTAMA --- */}
      {!showContent ? (
        <AmplopGate onOpen={handleOpenEnvelope} isClosing={isClosing} />
      ) : (
        <MainContent />
      )}
      
    </div>
  );
}

export default App;