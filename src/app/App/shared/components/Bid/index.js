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
      bidNumber,
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
        if (bidNumber < currentBid.bidNumber) {
          showBid = false
        } else if (bidNumber === currentBid.bidNumber) {
          if (suit === 'Clubs') {
            showBid = false
          } else if (suit === 'Diamonds') {
            if (currentBid.suit === 'Clubs') {
              showBid = true
            } else {
              showBid = false
            }
          } else if (suit === 'Hearts') {
            if (currentBid.suit === 'Clubs' || currentBid.suit === 'Diamonds') {
              showBid = true
            } else {
              showBid = false
            }
          } else if (suit === 'Spades') {
            if (currentBid.suit === 'Clubs' || currentBid.suit === 'Diamonds' || currentBid.suit === 'Hearts') {
              showBid = true
            } else {
              showBid = false
            }
          } else if (suit === 'NoTrumps') {
            if (currentBid.suit === 'NoTrumps') {
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
        <Button onClick={() => {setCurrentBid(bidNumber, suit)}}>
          { bidNumber }
          {(suit === 'NoTrumps') ? (' NT') : (<img src={imageName} width="20" height="20"/>)}
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
