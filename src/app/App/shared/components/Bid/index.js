import React from 'react'
import Button from '../Button'
import { selectGameStarted } from '../../../../store/app/app.selectors'
import { selectCurrentBid } from '../../../../store/game/game.selectors'
import { setCurrentBid } from '../../../../store/game/game.actions'
import { connect } from 'react-redux'
import { compose } from 'redux'

class Bid extends React.PureComponent {
  render() {
    const {
      level,
      suit,
      currentBid,
      gameStarted,
      setCurrentBid,
    } = this.props
    let imageName = 'Suit' + suit + '.svg'
    let showBid
    if (!gameStarted) {
      showBid = false
    } else {
      if (currentBid === null) {
        showBid = true
      } else {
        if (level < currentBid.level) {
          showBid = false
        } else if (level === currentBid.level) {
          if (suit === 'CLUB') {
            showBid = false
          } else if (suit === 'DIAMOND') {
            if (currentBid.suit === 'CLUB') {
              showBid = true
            } else {
              showBid = false
            }
          } else if (suit === 'HEART') {
            if (currentBid.suit === 'CLUB' || currentBid.suit === 'DIAMOND') {
              showBid = true
            } else {
              showBid = false
            }
          } else if (suit === 'SPADE') {
            if (currentBid.suit === 'CLUB' || currentBid.suit === 'DIAMOND' || currentBid.suit === 'HEART') {
              showBid = true
            } else {
              showBid = false
            }
          } else if (suit === 'NO_TRUMPS') {
            if (currentBid.suit === 'NO_TRUMPS') {
              showBid = false
            } else {
              showBid = true
            }
          }
        } else {
          showBid = true
        }
      }
    }
    if (showBid) {
      return (
        <Button onClick={() => {setCurrentBid(level, suit, false)}}>
          { level }
          {(suit === 'NO_TRUMPS') ? (' NT') : (<img src={imageName} width="20" height="20"/>)}
        </Button>
      )
    } else {
      return (
        <div></div>
      )
    }
  }
}

export const mapStateToProps = state => ({
  currentBid: selectCurrentBid(state),
  gameStarted: selectGameStarted(state),
})

export const mapDispatchToProps =
  {
    setCurrentBid,
  }

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(Bid)
