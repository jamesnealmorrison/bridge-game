import React from 'react'
import { MenuAreaLayout } from './MenuArea.style'
import Button from '../../shared/components/Button'

export class MenuArea extends React.PureComponent {
  render() {
    return (
      <MenuAreaLayout>
        <Button onClick={() => {console.log('CLICKED!')}}>START GAME</Button>
      </MenuAreaLayout>
    )
  }
}
