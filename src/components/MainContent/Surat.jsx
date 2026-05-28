import { useEffect, useState } from 'react';
import styles from './Surat.module.css';

function Surat() {
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsRevealed(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.letterWrapper}>
        <div className={`${styles.letterPaper} ${isRevealed ? styles.slideUp : ''}`}>
        {/* Garis hiasan atas */}
        <div className={styles.letterHeader}></div>
        
        {/* Area Isi Surat */}
        <div className={styles.letterBody}>
            <h2 className={styles.letterTitle}>Halo Sayangkuu,</h2>
            
            <div className={styles.letterLines}>
            <p>
            Hehee, dari kemarin aku ndak mau bilang kalau buat inii..
            </p>
            <p>
            Makasi ya udah terus hadir dan jadi bagian di hari-hariku. 
            Aku ingin kamu tahu kalau aku bangga dengan pencapaianmu dan yaapa caramu menghadapi hari-harimu.
            Di usia ke-22 ini, aku berdoa semoga duniamu selalu dipenuhi oleh hal-hal baik yang membuatmu tersenyum.
            </p>
            <p>
            Aku berharap ucapan ini bisa bikin hari kamu 
            jadi jauh lebih bahagia dan berwarna! 🤍
            </p>
            </div>
            
            <p className={styles.letterFooter}>Zull,</p>
        </div>
        </div>
    </div>
  );
}
export default Surat;