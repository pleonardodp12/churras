/* eslint-disable @typescript-eslint/no-empty-interface */

import 'styled-components';

export const theme = {
  colors: {
    primary: '#FFD836',
    black: '#000000',
    blackLight: '#00000088',
  },
};

declare module 'styled-components' {
  type TTheme = typeof theme;

  export interface DefaultTheme extends TTheme {}
}
