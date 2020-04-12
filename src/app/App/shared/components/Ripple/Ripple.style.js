import { transparentize } from 'polished'
import styled, { css } from 'styled-components'

import theme from '../../../../theme'


export const RippleEffect = styled.div`
    background-color: white;
    border-radius: 50%;
    transform: 'none';
    pointer-events: none;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    transition-duration: 0.6s, 0.6s, 0.6s, 1.2s;
    transition-timing-function: ${theme.animationCurveLinearOutSlowIn};
    will-change: transform, width, height, opacity;
    -webkit-tap-highlight-color:  rgba(255, 255, 255, 0);
  `

export const RippleWrap = styled.div`
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 4;
  overflow: hidden;
  -webkit-tap-highlight-color:  rgba(255, 255, 255, 0);
`
