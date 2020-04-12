import React from 'react'
import { MenuAreaLayout } from './MenuArea.style'
import Button from '../../shared/components/Button'
import { createGame } from '../../../store/game/game.actions'

export class MenuArea extends React.PureComponent {
  render() {
    return (
      <MenuAreaLayout>
        <Button onClick={() => {createGame()}}>CREATE GAME</Button>
      </MenuAreaLayout>
    )
  }
}
