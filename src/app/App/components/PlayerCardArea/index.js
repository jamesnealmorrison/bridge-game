import React from 'react'
import { PlayerCardAreaLayout } from './PlayerCardArea.style'

export class PlayerCardArea extends React.PureComponent {
  render() {
    const {direction} = this.props
    return (
      <PlayerCardAreaLayout {...this.props}>
        {direction}
      </PlayerCardAreaLayout>
    )
  }
}
