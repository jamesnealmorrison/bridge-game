import React from 'react'
import { PlayerAreaLayout } from './PlayerArea.style'
import { PlayerCardArea } from '../PlayerCardArea'
import Button from '../../shared/components/Button'

export class PlayerArea extends React.PureComponent {
  render() {
    const {direction,
    backgroundColor,
    gridColumn,
    gridRow,
    gridTemplateColumns,
    gridTemplateRows} = this.props
    return (
      <PlayerAreaLayout {...this.props}>
        <PlayerCardArea direction={direction} />
        <Button onClick={() => {console.log('CLICKED!')}}>Join as {direction}</Button>
      </PlayerAreaLayout>
    )
  }
}
