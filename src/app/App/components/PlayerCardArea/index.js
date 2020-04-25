import React from 'react'
import { PlayerCardAreaLayout } from './PlayerCardArea.style'

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
          card.rank + ' of ' + card.suit
        ))}
      </PlayerCardAreaLayout>
    )
  }
}
