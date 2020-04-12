import PropTypes from 'prop-types'
import React from 'react'

import {
  ButtonInner,
  IconButtonText,
} from './Button.style'
import Ripple from '../Ripple'

export default function buttonFactory(ButtonComponent) {
  function Button({ children, ...props }) {
    const shouldShowRipple =
      props.ripple && !props.disabled
    return (
      <ButtonComponent {...props}>
        <ButtonInner>
          {children}
          {props.iconLabel && (
            <IconButtonText>
              {props.iconLabel}
            </IconButtonText>
          )}
          {shouldShowRipple && <Ripple />}
        </ButtonInner>
      </ButtonComponent>
    )
  }

  Button.defaultProps = {
    ripple: true,
    type: 'button',
  }

  Button.propTypes = {
    text: PropTypes.string,
    children: PropTypes.node,
    ripple: PropTypes.bool,
    fab: PropTypes.bool,
    icon: PropTypes.bool,
    href: PropTypes.string,
    to: PropTypes.string,
    disabled: PropTypes.bool,
    iconLabel: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.shape({
        id: PropTypes.string,
        defaultMessage: PropTypes.string,
      }),
    ]),
  }

  return Button
}
