import { css } from 'styled-components'

import theme from '../../theme'

export function typoPreferredFont(usePreferred = true) {
  return usePreferred
    ? css`
        font-family: ${theme.preferredFont};
      `
    : null
}

const contrast = (cc, opacity) => (cc ? `opacity: ${opacity};` : null)

export function typoBody2(colorContrast = false, usePreferred = false) {
  return css`
    ${typoPreferredFont(usePreferred)}
    font-size: 14px;
    font-weight: ${usePreferred ? 500 : 'bold'};
    line-height: 24px;
    letter-spacing: 0;
    ${contrast(colorContrast, 0.87)}
  `
}

export function typoBody1(colorContrast = false, usePreferred = false) {
  return css`
    ${typoPreferredFont(usePreferred)}
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0;
    ${contrast(colorContrast, 0.87)}
  `
}

export function typoButton(colorContrast = false, usePreferred = true) {
  return css`
    ${typoPreferredFont(usePreferred)}
    font-size: 14px;
    font-weight: 500;
    text-transform: uppercase;
    line-height: 1;
    letter-spacing: 0;
    ${contrast(colorContrast, 0.87)}
  `
}
