import React from 'react'
import { MenuAreaLayout } from './MenuArea.style'
import Button from '../../shared/components/Button'
import { createGame, joinGame } from '../../../store/game/game.actions'
import PropTypes from 'prop-types'
import compose from 'lodash/fp/flowRight'
import { connect } from 'react-redux'

export class MenuAreaBase extends React.PureComponent {
  render() {
    return (
      <MenuAreaLayout>
        <Button onClick={() => {this.props.createNewGame()}}>CREATE GAME</Button>
        <Button onClick={() => {this.props.joinGame()}}>JOIN GAME</Button>
      </MenuAreaLayout>
    )
  }
}

MenuAreaBase.propTypes = {
  createNewGame: PropTypes.func,
  joinGame: PropTypes.func,
}

export const mapDispatchToProps = {
  createNewGame: () => createGame(),
  joinGame: () => joinGame(),
}

export default compose(
  connect(null, mapDispatchToProps),
)(MenuAreaBase)
