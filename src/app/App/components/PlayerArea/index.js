import React from 'react'
import { PlayerAreaLayout } from './PlayerArea.style'

export class PlayerArea extends React.PureComponent {
  render() {
    const {direction} = this.props
    return (
      <PlayerAreaLayout {...this.props}>
        I'm in the {direction} Player Area
      </PlayerAreaLayout>
    )
  }
}
