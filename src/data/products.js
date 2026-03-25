export const types = [
  { id: 'all', label: 'Wszystkie' },
  { id: 'wolnowiszace', label: 'Wolnowiszące' },
  { id: 'dzien-noc', label: 'Dzień-Noc' },
  { id: 'blackout', label: 'Zaciemniające' },
  { id: 'kasety', label: 'W Kasecie' },
  { id: 'elektryczne', label: 'Elektryczne' },
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
    title: 'Rolety Wolnowiszące Tkaninowe',
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
    type: 'wolnowiszace',
    title: 'Rolety Wolnowiszące Mini',
    description: 'Kompaktowe rolety do małych okien, idealne do łazienek i kuchni. Mechanizm bezuchwytowy, obsługa jednym palcem.',
    images: [
      'https://picsum.photos/seed/rw-mini-1/800/600',
      'https://picsum.photos/seed/rw-mini-2/800/600',
    ],
    video: PLACEHOLDER_VIDEO,
  },
  {
    id: 3,
    type: 'dzien-noc',
    title: 'Rolety Dzień-Noc Klasyczne',
    description: 'Innowacyjne rolety łączące tkaninę przefiltrowaną i zaciemniającą. Regulacja światła bez utraty prywatności — w dzień i w nocy.',
    images: [
      'https://picsum.photos/seed/rw-dn-1/800/600',
      'https://picsum.photos/seed/rw-dn-2/800/600',
      'https://picsum.photos/seed/rw-dn-3/800/600',
    ],
    video: PLACEHOLDER_VIDEO,
  },
  {
    id: 4,
    type: 'dzien-noc',
    title: 'Rolety Dzień-Noc Premium',
    description: 'Wersja premium z węższymi pasami i bogatszą paletą tkanin. Elegancki wygląd i precyzyjna regulacja dozowania światła.',
    images: [
      'https://picsum.photos/seed/rw-dnp-1/800/600',
      'https://picsum.photos/seed/rw-dnp-2/800/600',
    ],
    video: PLACEHOLDER_VIDEO,
  },
  {
    id: 5,
    type: 'blackout',
    title: 'Rolety Zaciemniające Blackout',
    description: 'Całkowite wyeliminowanie światła dziennego. Idealne do sypialni, pokoju dziecięcego i kina domowego.',
    images: [
      'https://picsum.photos/seed/rw-bo-1/800/600',
      'https://picsum.photos/seed/rw-bo-2/800/600',
      'https://picsum.photos/seed/rw-bo-3/800/600',
    ],
    video: PLACEHOLDER_VIDEO,
  },
  {
    id: 6,
    type: 'blackout',
    title: 'Rolety Zaciemniające Silver',
    description: 'Blackout z powłoką srebrną odbijającą ciepło. Doskonałe na lato — obniżają temperaturę w pomieszczeniu nawet o kilka stopni.',
    images: [
      'https://picsum.photos/seed/rw-bos-1/800/600',
      'https://picsum.photos/seed/rw-bos-2/800/600',
    ],
    video: PLACEHOLDER_VIDEO,
  },
  {
    id: 7,
    type: 'kasety',
    title: 'Rolety w Kasecie Otwartej',
    description: 'Estetyczna kaseta aluminiowa ukrywająca mechanizm zwijający. Nadaje oknu schludny, nowoczesny wygląd.',
    images: [
      'https://picsum.photos/seed/rw-ko-1/800/600',
      'https://picsum.photos/seed/rw-ko-2/800/600',
      'https://picsum.photos/seed/rw-ko-3/800/600',
    ],
    video: PLACEHOLDER_VIDEO,
  },
  {
    id: 8,
    type: 'kasety',
    title: 'Rolety w Kasecie Zamkniętej',
    description: 'Kaseta z zamkniętą obudową — tkanina całkowicie schowana, brak kurzu i idealnie czysty wygląd nawet po latach użytkowania.',
    images: [
      'https://picsum.photos/seed/rw-kz-1/800/600',
      'https://picsum.photos/seed/rw-kz-2/800/600',
    ],
    video: PLACEHOLDER_VIDEO,
  },
  {
    id: 9,
    type: 'elektryczne',
    title: 'Rolety Elektryczne 230V',
    description: 'Silnik 230V z pilotem i możliwością integracji z systemami smart home. Sterowanie grupowe, programowanie dobowe.',
    images: [
      'https://picsum.photos/seed/rw-el-1/800/600',
      'https://picsum.photos/seed/rw-el-2/800/600',
      'https://picsum.photos/seed/rw-el-3/800/600',
    ],
    video: PLACEHOLDER_VIDEO,
  },
  {
    id: 10,
    type: 'elektryczne',
    title: 'Rolety Elektryczne Solar',
    description: 'Zasilanie baterią solarną — bez konieczności prowadzenia kabli. Idealne do renowacji i miejsc bez dostępu do prądu.',
    images: [
      'https://picsum.photos/seed/rw-els-1/800/600',
      'https://picsum.photos/seed/rw-els-2/800/600',
    ],
    video: PLACEHOLDER_VIDEO,
  },
]
