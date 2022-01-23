/* eslint-disable @typescript-eslint/no-empty-interface */

import 'styled-components';

export const theme = {
  colors: {
    primary: '#FFD836',
    black: '#000000',
    white: '#FFFFFF',
    gray: '#F1F1F1',
    lightText: '#9A9A9A',
    blackLight: '#00000088',
  },
};

declare module 'styled-components' {
  type TTheme = typeof theme;

  export interface DefaultTheme extends TTheme {}
}
