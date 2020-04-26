import React from 'react'
import { PlayerCardAreaLayout } from './PlayerCardArea.style'
import Card from '../../shared/components/Card'

export class PlayerCardArea extends React.PureComponent {
  render() {
    const {
      direction,
      hand,
    } = this.props
    console.log('direction = ', direction)
    console.log('hand = ', hand)
    return (
      <PlayerCardAreaLayout {...this.props}>
        {hand && hand.cards.map(card =>(
          <Card rank={card.rank} suit={card.suit} />
        ))}
      </PlayerCardAreaLayout>
    )
  }
}
