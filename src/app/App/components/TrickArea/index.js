import React from 'react'
import { TrickAreaLayout } from './TrickArea.style'
import Button from '../../shared/components/Button'
import { selectPlayerDirection } from '../../../store/app/app.selectors'
import { startGame } from '../../../store/game/game.actions'
import { connect } from 'react-redux'
import { compose } from 'redux'
import PropTypes from 'prop-types'

class TrickArea extends React.PureComponent {
  render() {
    const { playerDirection,
    startGame } = this.props
    return (
      <TrickAreaLayout>
        {playerDirection === null || <Button onClick={() => {startGame()}}>Start Game</Button> }
      </TrickAreaLayout>
    )
  }
}

TrickArea.propTypes = {
  playerDirection: PropTypes.string,
}

export const mapStateToProps = state => ({
  playerDirection: selectPlayerDirection(state),
})

export const mapDispatchToProps =
  {
    startGame,
  }

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(TrickArea)
