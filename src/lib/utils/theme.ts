export const logoColors = ['blue', 'green', 'pink', 'purple', 'teal'];

export const colorMap: Record<string, string> = {
  blue: '#00a0d7',
  green: '#008c3a',
  pink: '#cc0368',
  purple: '#5b2d90',
  teal: '#009999',
};

export const colorMapLight: Record<string, string> = {
  blue: '#ccecff',
  green: '#ccff99',
  pink: '#ffccff',
  purple: '#ccccff',
  teal: '#ccffcc',
};

export function getRandomColor(): string {
  const randomIndex = Math.floor(Math.random() * logoColors.length);
  return logoColors[randomIndex];
}

export function getLogoPath(color: string): string {
  if (color === 'transparent') return `/media/logo/tacos.svg`;
  return `/media/logo/tacos_${color}.svg`;
}

export function getMinLogoPath(color: string): string {
  if (color === 'transparent') return `/media/logo/tacos_min.svg`;
  return `/media/logo/tacos_${color}_min.svg`; 
}
