import React from 'react'
import { MenuAreaLayout } from './MenuArea.style'
import Button from '../../shared/components/Button'
import { createGame } from '../../../store/game/game.actions'
import PropTypes from 'prop-types'
import compose from 'lodash/fp/flowRight'
import { connect } from 'react-redux'

export class MenuAreaBase extends React.PureComponent {
  render() {
    return (
      <MenuAreaLayout>
        <Button onClick={() => {this.props.createNewGame()}}>CREATE GAME</Button>
      </MenuAreaLayout>
    )
  }
}

MenuAreaBase.propTypes = {
  createNewGame: PropTypes.func,
}

export const mapDispatchToProps = {
  createNewGame: () => createGame(),
}

export default compose(
  connect(null, mapDispatchToProps),
)(MenuAreaBase)
