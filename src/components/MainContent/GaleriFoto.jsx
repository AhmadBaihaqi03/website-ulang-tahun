import styles from './GaleriFoto.module.css';

// Import gambar secara manual di bagian atas
import foto1 from '../../assets/photos/foto1.webp';
import foto2 from '../../assets/photos/foto2.webp';
import foto3 from '../../assets/photos/foto3.webp';
import foto4 from '../../assets/photos/foto4.webp';
import foto5 from '../../assets/photos/foto5.webp';
import foto6 from '../../assets/photos/foto6.webp';
import foto7 from '../../assets/photos/foto7.webp';
import foto8 from '../../assets/photos/foto8.webp';
import foto9 from '../../assets/photos/foto9.webp';

function Gallery() {
  const photos = [
    { id: 1, src: foto1},
    { id: 2, src: foto2},
    { id: 3, src: foto3},
    { id: 4, src: foto4},
    { id: 5, src: foto5},
    { id: 6, src: foto6},
    { id: 7, src: foto7},
    { id: 8, src: foto8},
    { id: 9, src: foto9}
  ];

  return (
    <div className="screen-container">
      <h2 className={styles.galleryTitle}>Memories</h2>
      
      <div className={styles.polaroidGrid}>
        {photos.map((photo) => (
          <div key={photo.id} className={styles.polaroid}>
            <img src={photo.src} alt={photo.caption} loading="lazy" />
            <p>{photo.caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;