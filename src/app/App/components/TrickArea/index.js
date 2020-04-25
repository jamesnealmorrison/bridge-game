import React from 'react'
import { TrickAreaLayout } from './TrickArea.style'
import Button from '../../shared/components/Button'
import { selectPlayerDirection, selectGameStarted } from '../../../store/app/app.selectors'
import { startGame } from '../../../store/game/game.actions'
import { connect } from 'react-redux'
import { compose } from 'redux'
import PropTypes from 'prop-types'

class TrickArea extends React.PureComponent {
  render() {
    const { playerDirection,
      gameStarted,
    startGame } = this.props
    let showStartGameButton = false
    if (!gameStarted) {
      if (playerDirection !== null) {
        showStartGameButton = true
      }
    }
    return (
      <TrickAreaLayout>
        {!showStartGameButton || <Button onClick={() => {startGame()}}>Start Game</Button> }
      </TrickAreaLayout>
    )
  }
}

TrickArea.propTypes = {
  playerDirection: PropTypes.string,
}

export const mapStateToProps = state => ({
  playerDirection: selectPlayerDirection(state),
  gameStarted: selectGameStarted(state),
})

export const mapDispatchToProps =
  {
    startGame,
  }

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(TrickArea)
