import React from 'react'
import { PlayerCardAreaLayout } from './PlayerCardArea.style'
import Card from '../../shared/components/Card'

export class PlayerCardArea extends React.PureComponent {
  render() {
    const {
      direction,
      hand,
    } = this.props
    let flexDirection = 'column'
    if (direction === 'NORTH' || direction === 'SOUTH') {
      flexDirection = 'row'
    }
    return (
      <PlayerCardAreaLayout {...this.props} flexDirection= {flexDirection}>
        {hand && hand.cards.map(card =>(
          <Card rank={card.rank} suit={card.suit} />
        ))}
      </PlayerCardAreaLayout>
    )
  }
}
