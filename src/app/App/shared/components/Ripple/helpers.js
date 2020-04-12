import multiply from 'lodash/fp/multiply'
import round from 'lodash/fp/round'

const half = multiply(0.5)
const double = multiply(2)
const px = n => `${n}px`
const diagonalLength = (a, b) => Math.sqrt(a * a + b * b)

function isKeyboardClick({ clientX, clientY }) {
  if (clientX === 0 && clientY === 0) {
    return true
  }
  return false
}

function getX({ clientX, touches }) {
  return clientX !== undefined ? clientX : touches[0].clientX
}

function getY({ clientY, touches }) {
  return clientY !== undefined ? clientY : touches[0].clientY
}

export function getRippleSize(e) {
  const { width, height } = e.getBoundingClientRect()
  return px(double(diagonalLength(width, height)) + 2)
}

export function getRippleCoords(e) {
  const rect = e.currentTarget.getBoundingClientRect()
  const { height, width, left, top } = rect
  const coords = isKeyboardClick(e)
    ? [width, height].map(half)
    : [getX(e) - left, getY(e) - top]

  return coords
    .map(round)
    .map(px)
    .join(', ')
}
