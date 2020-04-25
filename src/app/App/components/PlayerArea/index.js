import React from 'react'
import { PlayerAreaLayout } from './PlayerArea.style'
import { PlayerCardArea } from '../PlayerCardArea'
import Button from '../../shared/components/Button'
import { joinGame } from '../../../store/game/game.actions'
import { selectPlayerDirection } from '../../../store/app/app.selectors'
import { connect } from 'react-redux'
import { compose } from 'redux'
import PropTypes from 'prop-types'

export class PlayerAreaBase extends React.PureComponent {
  render() {
    const {direction,
    backgroundColor,
    gridColumn,
    gridRow,
    gridTemplateColumns,
    gridTemplateRows,
    joinGame,
    playerDirection,} = this.props
    return (
      <PlayerAreaLayout {...this.props}>
        <PlayerCardArea direction={direction} />
        {playerDirection !== null || <Button onClick={() => {joinGame(direction)}}>Join as {direction}</Button> }
      </PlayerAreaLayout>
    )
  }
}

PlayerAreaBase.propTypes = {
  playerDirection: PropTypes.string,
  direction: PropTypes.string,
}

export const mapStateToProps = state => ({
  playerDirection: selectPlayerDirection(state),
})

export const mapDispatchToProps =
  {
    joinGame,
  }

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(PlayerAreaBase)
