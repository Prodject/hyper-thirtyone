// Constants
const backgroundColor = `rgba(0, 0, 0, 0.85)`;
const foregroundColor = '#c7c7c7';
const borderColor = '#333333';

const colors = {
  black: backgroundColor,
  red: '#C91B00',
  green: '#00C200',
  yellow: '#808000',
  blue: '#0225C7',
  magenta: '#CA30C7',
  cyan: '#008080',
  white: foregroundColor,
  lightblack: '#686868',
  lightRed: '#FF6E67',
  lightGreen: '#5FFA68',
  lightYellow: '#FFFC67',
  lightBlue: '#6871FF',
  lightMagenta: '#FF77FF',
  lightCyan: '#60FDFF',
  lightWhite: '#FFFFFF'
};

// Theme config
exports.decorateConfig = (config) => (
  Object.assign({}, config, {
    backgroundColor,
    foregroundColor,
    borderColor: borderColor,
    cursorColor: foregroundColor,
    cursorShape: 'BEAM',
    fontFamily: '"Meslo LG L", Menlo, "DejaVu Sans Mono", "Lucida Console", monospace',
    colors,
    termCSS: `

    `,
    css: `
      ${config.css || ''}
    `
  })
);
