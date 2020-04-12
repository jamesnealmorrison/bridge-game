import { transparentize } from 'polished'
import anyPass from 'lodash/fp/overSome'
import get from 'lodash/fp/get'
import negate from 'lodash/fp/negate'
import styled, { css } from 'styled-components'

import {
  RippleEffect,
  RippleWrap,
} from '../Ripple/Ripple.style'
import {
  focusShadow,
  shadow2dp,
  shadow4dp,
} from '../../../../helpers/styleMixins/shadows.style'
import { typoButton } from '../../../../helpers/styleMixins/type.style'
import theme from '../../../../theme'

const buttonSize = 2.25
const buttonFabSize = 3.5
const buttonFabSizeMini = 2.5
const buttonIconSize = 2
const buttonIconSizeMini = 1.5
const largeButtonSize = 8

export const FlatButtonBase = styled.button`
    background: transparent;
    border: none;
    border-radius: 0.12rem;
    color: ${theme.colorDark};
    position: relative;
    height: ${buttonSize}rem;
    line-height: ${buttonSize}rem;
    margin: 0;
    min-width: 4rem;
    padding: 0 1rem;
    white-space: nowrap;
    display: inline-flex;
    ${typoButton()}
    overflow: hidden;
    will-change: box-shadow;
    text-decoration: none;
    transition:
      box-shadow 0.2s ${theme.animationCurveFastOutLinearIn},
      background-color 0.2s ${theme.animationCurveDefault},
      color 0.2s ${theme.animationCurveDefault};
    outline: none;
    cursor: pointer;
    text-decoration: none;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    font-weight: 500;
    letter-spacing: 0.04em;
    -webkit-tap-highlight-color:  rgba(255, 255, 255, 0);
    &::-moz-focus-inner {
      border: 0;
    }
    &:hover {
      background-color: ${theme.colorOffWhite};
    }
    &:focus, &:active {
      background-color: ${theme.colorFaint};
    }
    ${RippleEffect} {
      background-color: rgba(0,0,0,0.3);
    }
    &:disabled {
      color: ${theme.colorLight};
      cursor: default;
      &:hover, &:focus, &:active {
        background: transparent;
      }
    }
  `

export const RaisedButtonBase = FlatButtonBase.extend`
    background-color: ${theme.colorOffWhite};
    ${shadow2dp()} &:hover, &:active:active, &:focus:focus:not(:active) {
      background-color: ${theme.colorFaint};
    }
    &:active {
      ${shadow4dp()};
    }
    &:focus:not(:active) {
      ${focusShadow()};
    }
    &:disabled:disabled {
      box-shadow: none;
      background-color: ${theme.colorOffWhite};
      color: ${theme.colorLight};
      &:hover,
      &:focus,
      &:active {
        background-color: ${theme.colorOffWhite};
      }
    }
  `

  export const IconButtonText = styled.span`
    font-size: 0.75rem;
    font-weight: 400;
    margin-top: 3px;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
  `

export const ButtonInner = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `
