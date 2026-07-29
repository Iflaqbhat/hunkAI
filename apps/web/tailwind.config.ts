import type { Config } from 'tailwindcss';
import { tailwindPreset } from '@hunk/config/tailwind-preset';

const config: Config = {
  presets: [tailwindPreset as Config],
  content: ['./app/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}', './hooks/**/*.{ts,tsx}'],
  theme: {
    extend: {}
  },
  plugins: []
};

export default config;
