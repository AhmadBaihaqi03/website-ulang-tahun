import styles from './AmplopGate.module.css';
import envelopeImg from '../assets/envelope.webp';

function AmplopGate({ onOpen, isClosing }) {
  return (
    <div className={styles.screenContainer}>
      
      {/* Teks Atas */}
      <h1 className={`${styles.title} ${isClosing ? styles.fadeOutText : ''}`}>
        Ada surat untukmu Sayangkuu
      </h1>

      {/* Gambar Amplop */}
      <button 
        className={`${styles.envelopeButton} ${isClosing ? styles.cinematicOut : ''}`}
        onClick={onOpen}
        disabled={isClosing}
      >
        <img src={envelopeImg} alt="Special Envelope" className={styles.envelopeImage} />
      </button>

      {/* Teks Bawah */}
      <p className={`${styles.subtitle} ${isClosing ? styles.fadeOutText : ''}`}>
        Ketuk amplop untuk membuka yaa..
      </p>
      
    </div>
  );
}

export default AmplopGate;