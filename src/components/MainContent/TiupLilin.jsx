import { useState, useRef } from 'react';
import confetti from 'canvas-confetti';
import styles from './TiupLilin.module.css';

function TiupLilin() {
    const [isLit, setIsLit] = useState(true);
    const [started, setStarted] = useState(false);
    const [showGreeting, setShowGreeting] = useState(false);
    const audioContextRef = useRef(null);

    const startExperience = async () => {
        setStarted(true);
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
        const source = audioContextRef.current.createMediaStreamSource(stream);
        const analyzer = audioContextRef.current.createAnalyser();
        source.connect(analyzer);
        analyzer.fftSize = 256;
        const bufferLength = analyzer.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);
        let blowingCount = 0;

        const checkVolume = () => {
            analyzer.getByteFrequencyData(dataArray);
            let sum = 0;
            for (let i = 0; i < bufferLength; i++) sum += dataArray[i];
            let average = sum / bufferLength;

            if (average > 80) blowingCount++;
            else blowingCount = Math.max(0, blowingCount - 1);

            if (blowingCount > 20) {
                setIsLit(false);
                confetti({ particleCount: 150, spread: 80, origin: { y: 0.6 }, colors: ['#ffffff', '#fff4e0'], shapes: ['circle'] });
                setTimeout(() => setShowGreeting(true), 1500);
            } else {
                requestAnimationFrame(checkVolume);
            }
        };
        checkVolume();
    };

    return (
        <div className={`${styles.container} ${started ? styles.darken : ''}`}>
            {!started ? (
                <div className={styles.introArea}>
                    {/* Kalimat pengantar yang manis dan estetik */}
                    <p className={styles.subtext}>Tekan di sini untuk mulai meniup lilinnya ya...</p>
                    
                    <div className={styles.buttonWrapper}>
                        <button className={styles.envelopeButton} onClick={startExperience}>
                            Nyalakan Lilin 🕯️
                        </button>
                    </div>
                </div>
            ) : (
                <div className={styles.cakeArea}>
                    <div className={`${styles.glowNumber} ${started ? styles.visible : ''}`}>22</div>
                    <div className={`${styles.candle} ${!isLit ? styles.out : styles.flicker}`}>
                        {isLit ? '🕯️' : '🕯️'}
                    </div>
                    <div className={`${styles.messageContainer} ${started ? styles.fadeIn : ''}`}>
                        {!showGreeting ? (
                            <p className={styles.instruction}>Tiup lilinnya yang panjang ya...</p>
                        ) : (
                            <div className={styles.messageBox}>
                                <h1>Happy 22nd birthday!</h1>
                                <p>Semoga tahun ini amu lebih bahagia, dan selalu menemukan alasan untuk tersenyum. Aku di sini, kita sama-sama terus ya yangg 😊😊😊</p>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default TiupLilin;