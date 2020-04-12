import { css } from 'styled-components'

const shadowKeyUmbraOpacity = 0.2
const shadowKeyPenumbraOpacity = 0.14
const shadowAmbientShadowOpacity = 0.12

export function focusShadow() {
  return css`
    box-shadow: 0 0 8px rgba(0,0,0,.18),0 8px 16px rgba(0,0,0,.36);
  `
}
export function shadow2dp() {
  return css`
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, ${shadowKeyPenumbraOpacity}),
                0 3px 1px -2px rgba(0, 0, 0, ${shadowKeyUmbraOpacity}),
                0 1px 5px 0 rgba(0, 0, 0, ${shadowAmbientShadowOpacity});
  `
}
export function shadow3dp() {
  return css`
    box-shadow: 0 3px 4px 0 rgba(0, 0, 0, ${shadowKeyPenumbraOpacity}),
                0 3px 3px -2px rgba(0, 0, 0, ${shadowKeyUmbraOpacity}),
                0 1px 8px 0 rgba(0, 0, 0, ${shadowAmbientShadowOpacity});
  `
}
export function shadow4dp() {
  return css`
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, ${shadowKeyPenumbraOpacity}),
                0 1px 10px 0 rgba(0, 0, 0, ${shadowAmbientShadowOpacity}),
                0 2px 4px -1px rgba(0, 0, 0, ${shadowKeyUmbraOpacity});
  `
}
export function shadow8dp() {
  return css`
    box-shadow: 0 8px 10px 1px rgba(0, 0, 0, ${shadowKeyPenumbraOpacity}),
                0 3px 14px 2px rgba(0, 0, 0, ${shadowAmbientShadowOpacity}),
                0 5px 5px -3px rgba(0, 0, 0, ${shadowKeyUmbraOpacity});
  `
}
export function shadow16dp() {
  return css`
    box-shadow: 0 16px 24px 2px rgba(0, 0, 0, ${shadowKeyPenumbraOpacity}),
                0  6px 30px 5px rgba(0, 0, 0, ${shadowAmbientShadowOpacity}),
                0  8px 10px -5px rgba(0, 0, 0, ${shadowKeyUmbraOpacity});
  `
}
export function shadow24dp() {
  return css`
    box-shadow: 0  9px 46px  8px rgba(0, 0, 0, ${shadowKeyPenumbraOpacity}),
                0 11px 15px -7px rgba(0, 0, 0, ${shadowAmbientShadowOpacity}),
                0 24px 38px  3px rgba(0, 0, 0, ${shadowKeyUmbraOpacity});
  `
}
