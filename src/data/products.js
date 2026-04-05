export const MONTAZ_BEZINWAZYJNY =
  'Wszystkie nasze rolety montujemy bezinwazyjnie – bez wiercenia i bez uszkadzania ramy okna. ' +
  'Używamy specjalnych blaszek nierdzewnych przyklejanych do ramy, które utrzymują roletę pewnie i estetycznie. ' +
  'Taki montaż jest odwracalny, nie narusza gwarancji okna i sprawdza się zarówno w oknach PCV, drewnianych, jak i aluminiowych.'

export const types = [
  { id: 'all', label: 'Wszystkie' },
  { id: 'wolnowiszace', label: 'Wewnętrzne Wolnowiszące' },
  { id: 'dzien-noc', label: 'Dzień-Noc' },
  { id: 'system1', label: 'System 1' },
  { id: 'system2', label: 'System 2' },
  { id: 'system3', label: 'System 3' },
  { id: 'system4', label: 'System 4' },
]
// ─────────────────────────────────────────────────────────────────────────────
// MEDIA: Replace placeholder URLs with local files from /public/assets/
//
//  images: ['/assets/images/products/nazwa-1.jpg', ...]
//  video:  '/assets/videos/products/nazwa.mp4'
//
// ─────────────────────────────────────────────────────────────────────────────

// Shared placeholder video — replace each entry with the real presentation video
// REPLACE: /assets/videos/products/{product-slug}.mp4
const PLACEHOLDER_VIDEO = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'

export const products = [
  {
    id: 1,
    type: 'wolnowiszace',
    title: 'Rolety Wewnętrzne Wolnowiszące',
    description: 'Klasyczne rolety tkaninowe w szerokiej gamie kolorów i faktur. Dostępne w tkaninach filtrujących, zaciemniających i transparentnych.',
    images: [
      'https://picsum.photos/seed/rw-ww-1/800/600',
      'https://picsum.photos/seed/rw-ww-2/800/600',
      'https://picsum.photos/seed/rw-ww-3/800/600',
    ],
    video: PLACEHOLDER_VIDEO,
  
  },
  {
    id: 2,
    type: 'system1',
    title: 'System 1 – Rollo-Lux bez kasety (najprostsza wersja)',
    description: 'Klasyczna, wolnowisząca roleta materiałowa zawieszana bezpośrednio na ramę okna. W zestawie znajdują się dwa przyklejane uchwyty dolne, które umożliwiają swobodne uchylanie okna. Opcjonalnie można dodać prowadnice.',
    images: [
      'https://picsum.photos/seed/rw-dnp-1/800/600',
      'https://picsum.photos/seed/rw-dnp-2/800/600',
    ],
    video: PLACEHOLDER_VIDEO,
  },
  {
    id: 3,
    type: 'system2',
    title: 'System 2 – Roleta w kasecie z prowadnicami bocznymi',
    description: 'Roleta wewnętrzna w obudowie (kasecie) z bocznymi prowadnicami. Montaż bezinwazyjny, zawieszany bezpośrednio na ramę okna. Prowadnice stabilizują tkaninę, zapobiegają jej falowaniu i zapewniają estetyczny wygląd nawet przy uchylonym oknie.',
    images: [
      'https://picsum.photos/seed/rw-bo-1/800/600',
      'https://picsum.photos/seed/rw-bo-2/800/600',
      'https://picsum.photos/seed/rw-bo-3/800/600',
    ],
    video: PLACEHOLDER_VIDEO,
  },
  {
    id: 4,
    type: 'system3',
    title: 'System 3 – Roleta w kasecie z okleiną drewnopodobną',
    description: 'Identyczna konstrukcja jak w Systemie 2, z tą różnicą, że kaseta jest wykończona okleiną drewnopodobną.',
    images: [
      'https://picsum.photos/seed/rw-bos-1/800/600',
      'https://picsum.photos/seed/rw-bos-2/800/600',
    ],
    video: PLACEHOLDER_VIDEO,
    colors: [
      { name: 'Złoty Dąb',    css: 'linear-gradient(135deg, #B8893A 0%, #D4A855 40%, #A87830 100%)' },
      { name: 'Orzech',       css: 'linear-gradient(135deg, #4A2C14 0%, #6B3F24 40%, #3D2010 100%)' },
      { name: 'Dąb Bagienny', css: 'linear-gradient(135deg, #1C1008 0%, #2E1A0F 40%, #140C06 100%)' },
      { name: 'Antracyt',     css: '#383838' },
    ],
  },
  {
    id: 5,
    type: 'system4',
    title: 'System 4 – Roleta na rurze nawijającej Ø25 mm',
    description: 'Klasyczna roleta materiałowa montowana na solidnej rurze o średnicy 25 mm. Przeznaczona do montażu inwazyjnego (przykręcana) do ściany, sufitu, wnęki okiennej lub drewnianej belki. Idealna do szerszych okien i większych wnęk.',
    images: [
      'https://picsum.photos/seed/rw-ko-1/800/600',
      'https://picsum.photos/seed/rw-ko-2/800/600',
      'https://picsum.photos/seed/rw-ko-3/800/600',
    ],
    video: PLACEHOLDER_VIDEO,
  },
  {
    id: 6,
    type: 'dzien-noc',
    title: 'Rolety Dzień-Noc',
    description: 'Rolety Dzień i Noc to wyjątkowo dekoracyjne i funkcjonalne rozwiązanie, pozwalające płynnie regulować dopływ światła – od zaciemnienia po delikatne rozproszenie. Dostępne wyłącznie w wersji w kasecie z prowadnicami bocznymi.',
    images: [
      'https://picsum.photos/seed/rw-dn-1/800/600',
      'https://picsum.photos/seed/rw-dn-2/800/600',
      'https://picsum.photos/seed/rw-dn-3/800/600',
    ],
    video: PLACEHOLDER_VIDEO,
    colors: [
      { name: 'Biały',        css: '#F0EFE8' },
      { name: 'Złoty Dąb',    css: 'linear-gradient(135deg, #B8893A 0%, #D4A855 40%, #A87830 100%)' },
      { name: 'Orzech',       css: 'linear-gradient(135deg, #4A2C14 0%, #6B3F24 40%, #3D2010 100%)' },
      { name: 'Dąb Bagienny', css: 'linear-gradient(135deg, #1C1008 0%, #2E1A0F 40%, #140C06 100%)' },
      { name: 'Antracyt',     css: '#383838' },
    ],
  },
]
