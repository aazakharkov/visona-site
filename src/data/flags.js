// Упрощенные SVG-флаги, используются только как очень тусклая подложка на страницах стран.
const stripesV = (colors) =>
  `<svg viewBox="0 0 60 40" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">${colors
    .map((c, i) => `<rect x="${i * 20}" y="0" width="20" height="40" fill="${c}"/>`)
    .join('')}</svg>`;

const stripesH = (colors) =>
  `<svg viewBox="0 0 60 40" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">${colors
    .map((c, i) => `<rect x="0" y="${(i * 40) / colors.length}" width="60" height="${40 / colors.length}" fill="${c}"/>`)
    .join('')}</svg>`;

const usaStars = () => {
  let out = '';
  for (let row = 0; row < 5; row++) {
    for (let col = 0; col < 6; col++) {
      out += `<circle cx="${2.4 + col * 3.9}" cy="${2.4 + row * 3.6}" r="1.15" fill="#fff"/>`;
    }
  }
  return out;
};

export const flags = {
  apec:
    '<svg viewBox="0 0 60 40" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect width="60" height="40" fill="#0B4F8A"/><circle cx="30" cy="20" r="12" fill="none" stroke="#F7F7F7" stroke-width="1.6"/><ellipse cx="30" cy="20" rx="5.5" ry="12" fill="none" stroke="#F7F7F7" stroke-width="1.3"/><path d="M18 20h24M20 13.5h20M20 26.5h20" stroke="#F7F7F7" stroke-width="1.3"/><path d="M4 34c14-6 38-6 52 0" stroke="#3FB6A8" stroke-width="2" fill="none"/></svg>',
  france: stripesV(['#0B4EA2', '#F7F7F7', '#D8283B']),
  italy: stripesV(['#0E8A4A', '#F7F7F7', '#CE2B37']),
  hungary: stripesH(['#CE2939', '#F7F7F7', '#4A7A3B']),
  japan:
    '<svg viewBox="0 0 60 40" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect width="60" height="40" fill="#F7F7F7"/><circle cx="30" cy="20" r="12" fill="#BC002D"/></svg>',
  spain:
    '<svg viewBox="0 0 60 40" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect width="60" height="40" fill="#AA151B"/><rect y="10" width="60" height="20" fill="#F1BF00"/></svg>',
  greece:
    '<svg viewBox="0 0 60 40" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect width="60" height="40" fill="#0D5EAF"/>' +
    [1, 3, 5, 7].map((i) => `<rect y="${i * (40 / 9)}" width="60" height="${40 / 9}" fill="#F7F7F7"/>`).join('') +
    `<rect width="${(40 / 9) * 5}" height="${(40 / 9) * 5}" fill="#0D5EAF"/>` +
    `<rect x="${(40 / 9) * 2}" y="0" width="${40 / 9}" height="${(40 / 9) * 5}" fill="#F7F7F7"/>` +
    `<rect x="0" y="${(40 / 9) * 2}" width="${(40 / 9) * 5}" height="${40 / 9}" fill="#F7F7F7"/></svg>`,
  uk:
    '<svg viewBox="0 0 60 30" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
    '<clipPath id="uk-diag"><path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/></clipPath>' +
    '<rect width="60" height="30" fill="#012169"/>' +
    '<path d="M0,0 L60,30 M60,0 L0,30" stroke="#F7F7F7" stroke-width="6"/>' +
    '<path d="M0,0 L60,30 M60,0 L0,30" clip-path="url(#uk-diag)" stroke="#C8102E" stroke-width="4"/>' +
    '<path d="M30,0 v30 M0,15 h60" stroke="#F7F7F7" stroke-width="10"/>' +
    '<path d="M30,0 v30 M0,15 h60" stroke="#C8102E" stroke-width="6"/></svg>',
  usa:
    '<svg viewBox="0 0 60 40" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect width="60" height="40" fill="#F7F7F7"/>' +
    [0, 2, 4, 6, 8, 10, 12]
      .map((i) => `<rect y="${(i * 40) / 13}" width="60" height="${40 / 13}" fill="#B31942"/>`)
      .join('') +
    `<rect width="26" height="${(40 / 13) * 7}" fill="#0A3161"/>${usaStars()}</svg>`,
  cyprus:
    '<svg viewBox="0 0 60 40" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect width="60" height="40" fill="#F7F7F7"/>' +
    '<path d="M14,20.5 C18,17.6 24,16.4 30.5,16.2 C35,16 39.5,14.8 44,12.4 L47,10.8 L45.6,14.2 C43,17 39.6,18.6 36,19.4 C32,21.2 26,23.4 20,23.2 C17.6,23.1 15.6,22.2 14,20.5 Z" fill="#D57800"/>' +
    '<path d="M25,27.5 C27.5,29.6 30,30.6 33,30.9" stroke="#4E5B31" stroke-width="1.1" fill="none"/>' +
    '<path d="M38,27.5 C35.5,29.6 33,30.6 30,30.9" stroke="#4E5B31" stroke-width="1.1" fill="none"/>' +
    '<ellipse cx="27.5" cy="28.6" rx="1.5" ry="0.8" transform="rotate(-25 27.5 28.6)" fill="#4E5B31"/>' +
    '<ellipse cx="35.5" cy="28.6" rx="1.5" ry="0.8" transform="rotate(25 35.5 28.6)" fill="#4E5B31"/></svg>',
};

export default flags;
