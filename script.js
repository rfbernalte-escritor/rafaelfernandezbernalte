const heroVideo = document.querySelector('#hero-video');
const fallback = document.querySelector('#video-fallback');

if (heroVideo && fallback) {
  heroVideo.addEventListener('error', () => {
    heroVideo.style.display = 'none';
    fallback.style.display = 'block';
  });

  if (heroVideo.readyState === 0) {
    heroVideo.addEventListener('loadeddata', () => {
      fallback.style.display = 'none';
    }, { once: true });
  }
}