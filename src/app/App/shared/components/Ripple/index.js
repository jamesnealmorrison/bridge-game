import PropTypes from 'prop-types'
import React, { Component } from 'react'

import { RippleEffect, RippleWrap } from './Ripple.style'
import { getRippleSize, getRippleCoords } from './helpers'

const isTouch = document.ontouchstart === null

export default class Ripple extends Component {
  constructor(props) {
    super(props)
    this.state = {
      opacity: 0,
    }
  }

  componentDidMount() {
    this.size = this.wrapper && getRippleSize(this.wrapper)
  }

  handleMouseDown = e => {
    const coords = getRippleCoords(e)
    const translate = `translate(-50%, -50%) translate(${coords})`
    const initalScale = ' scale3d(0.0001, 0.0001, 1)'
    const finalScale = ' scale3d(1, 1, 1)'
    this.setState({
      size: this.size,
      shouldAnimate: false,
      transform: translate + initalScale,
      opacity: 0.3,
    })
    requestAnimationFrame(() => {
      this.setState({
        shouldAnimate: true,
        transform: translate + finalScale,
      })
    })
  }

  handleMouseUp = () => {
    this.setState({ opacity: 0 })
  }

  render() {
    const handlers = isTouch
      ? {
          onTouchStart: this.handleMouseDown,
          onTouchEnd: this.handleMouseUp,
        }
      : {
          onMouseDown: this.handleMouseDown,
          onMouseUp: this.handleMouseUp,
          onMouseOut: this.handleMouseUp,
          onFocus: this.handleMouseDown,
          onBlur: this.handleMouseUp,
        }

    return (
      <RippleWrap
        innerRef={wrapper => {
          this.wrapper = wrapper
        }}
        {...handlers}
        className={this.props.className}
      >
        <RippleEffect
          {...this.props}
          style={{
            height: this.state.size,
            width: this.state.size,
            transform: this.state.transform,
            opacity: this.state.opacity,
            transitionProperty: this.state.shouldAnimate
              ? 'transform, width, height, opacity'
              : 'none',
          }}
        />
      </RippleWrap>
    )
  }
}

Ripple.propTypes = {
  className: PropTypes.string,
}
