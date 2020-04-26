import React from 'react'
import { BiddingAreaLayout } from './BiddingArea.style'
import Bid from '../../shared/components/Bid'

export class BiddingArea extends React.PureComponent {
  render() {
    return (
      <BiddingAreaLayout>
        <Bid bidNumber={1} suit="Clubs"/>
        <Bid bidNumber={1} suit="Diamonds"/>
        <Bid bidNumber={1} suit="Hearts"/>
        <Bid bidNumber={1} suit="Spades"/>
        <Bid bidNumber={1} suit="NoTrumps"/>
        <Bid bidNumber={2} suit="Clubs"/>
        <Bid bidNumber={2} suit="Diamonds"/>
        <Bid bidNumber={2} suit="Hearts"/>
        <Bid bidNumber={2} suit="Spades"/>
        <Bid bidNumber={2} suit="NoTrumps"/>
        <Bid bidNumber={3} suit="Clubs"/>
        <Bid bidNumber={3} suit="Diamonds"/>
        <Bid bidNumber={3} suit="Hearts"/>
        <Bid bidNumber={3} suit="Spades"/>
        <Bid bidNumber={3} suit="NoTrumps"/>
        <Bid bidNumber={4} suit="Clubs"/>
        <Bid bidNumber={4} suit="Diamonds"/>
        <Bid bidNumber={4} suit="Hearts"/>
        <Bid bidNumber={4} suit="Spades"/>
        <Bid bidNumber={4} suit="NoTrumps"/>
        <Bid bidNumber={5} suit="Clubs"/>
        <Bid bidNumber={5} suit="Diamonds"/>
        <Bid bidNumber={5} suit="Hearts"/>
        <Bid bidNumber={5} suit="Spades"/>
        <Bid bidNumber={5} suit="NoTrumps"/>
        <Bid bidNumber={6} suit="Clubs"/>
        <Bid bidNumber={6} suit="Diamonds"/>
        <Bid bidNumber={6} suit="Hearts"/>
        <Bid bidNumber={6} suit="Spades"/>
        <Bid bidNumber={6} suit="NoTrumps"/>
        <Bid bidNumber={7} suit="Clubs"/>
        <Bid bidNumber={7} suit="Diamonds"/>
        <Bid bidNumber={7} suit="Hearts"/>
        <Bid bidNumber={7} suit="Spades"/>
        <Bid bidNumber={7} suit="NoTrumps"/>
      </BiddingAreaLayout>
    )
  }
}
