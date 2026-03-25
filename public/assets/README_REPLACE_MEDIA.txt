ROLLO-MAX — Media Folder Guide
================================

Replace placeholder images/videos with your own files.

FOLDER STRUCTURE:
  /assets/images/hero/
    hero-bg.jpg          — Hero section background (min 1920×1080px, JPG/WebP)
    hero-poster.jpg      — Poster frame for hero video (same resolution as video)

  /assets/images/about/
    workshop.jpg         — About section image (800×1000px recommended, portrait)

  /assets/images/products/
    rolety-zewnetrzne-aluminiowe.jpg
    rolety-zewnetrzne-pcv.jpg
    rolety-wewnetrzne-wolnowiszace.jpg
    rolety-wewnetrzne-dzien-noc.jpg
    zaluzje-aluminiowe-25mm.jpg
    zaluzje-aluminiowe-50mm.jpg
    zaluzje-drewniane-bambus.jpg
    zaluzje-drewniane-dab.jpg
    plisy-pojedyncze.jpg
    plisy-duette.jpg
    markizy-tarasowe.jpg
    markizy-balkonowe.jpg
    (Product images: 800×600px recommended, JPG/WebP)

  /assets/videos/
    hero.mp4             — Hero background video (H.264, max 10MB, loop-friendly)
    hero-poster.jpg      — Poster frame for the video (same as images/hero/hero-poster.jpg)

HOW TO SWAP IN IMAGES:
  Open src/data/products.js and replace each URL:
    image: 'https://picsum.photos/...',
  with:
    image: '/assets/images/products/your-filename.jpg',

HOW TO ENABLE THE VIDEO HERO:
  Open src/components/Hero.jsx and follow the comment block
  at the top of the component to replace the <img> with a <video> tag.

TIPS:
  - Compress images with squoosh.app or TinyPNG before deploying.
  - Use WebP format for best performance.
  - Recommended max file size: 300KB per product image, 8MB for hero video.
