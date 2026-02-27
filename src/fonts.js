export const presets = {
  inter: 'Inter',
  roboto: 'Roboto',
  playfair: 'Playfair Display',
  montserrat: 'Montserrat',
  lora: 'Lora',
  oswald: 'Oswald',
  fira: 'Fira Code',
  merri: 'Merriweather',
  raleway: 'Raleway',
  work: 'Work Sans'
};

export const loadFont = (name = presets.inter) => {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = `https://fonts.googleapis.com/css2?family=${name.replace(/ /g, '+')}:wght@400;700&display=swap`;
  document.head.appendChild(link);
  document.documentElement.style.setProperty('--font-main', `'${name}', sans-serif`);
};
