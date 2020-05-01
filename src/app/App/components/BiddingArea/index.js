import React from 'react'
import { BiddingAreaLayout } from './BiddingArea.style'
import Bid from '../../shared/components/Bid'

export class BiddingArea extends React.PureComponent {
  render() {
    return (
      <BiddingAreaLayout>
        <Bid bidNumber={1} suit="CLUB"/>
        <Bid bidNumber={1} suit="DIAMOND"/>
        <Bid bidNumber={1} suit="HEART"/>
        <Bid bidNumber={1} suit="SPADE"/>
        <Bid bidNumber={1} suit="NO_TRUMPS"/>
        <Bid bidNumber={2} suit="CLUB"/>
        <Bid bidNumber={2} suit="DIAMOND"/>
        <Bid bidNumber={2} suit="HEART"/>
        <Bid bidNumber={2} suit="SPADE"/>
        <Bid bidNumber={2} suit="NO_TRUMPS"/>
        <Bid bidNumber={3} suit="CLUB"/>
        <Bid bidNumber={3} suit="DIAMOND"/>
        <Bid bidNumber={3} suit="HEART"/>
        <Bid bidNumber={3} suit="SPADE"/>
        <Bid bidNumber={3} suit="NO_TRUMPS"/>
        <Bid bidNumber={4} suit="CLUB"/>
        <Bid bidNumber={4} suit="DIAMOND"/>
        <Bid bidNumber={4} suit="HEART"/>
        <Bid bidNumber={4} suit="SPADE"/>
        <Bid bidNumber={4} suit="NO_TRUMPS"/>
        <Bid bidNumber={5} suit="CLUB"/>
        <Bid bidNumber={5} suit="DIAMOND"/>
        <Bid bidNumber={5} suit="HEART"/>
        <Bid bidNumber={5} suit="SPADE"/>
        <Bid bidNumber={5} suit="NO_TRUMPS"/>
        <Bid bidNumber={6} suit="CLUB"/>
        <Bid bidNumber={6} suit="DIAMOND"/>
        <Bid bidNumber={6} suit="HEART"/>
        <Bid bidNumber={6} suit="SPADE"/>
        <Bid bidNumber={6} suit="NO_TRUMPS"/>
        <Bid bidNumber={7} suit="CLUB"/>
        <Bid bidNumber={7} suit="DIAMOND"/>
        <Bid bidNumber={7} suit="HEART"/>
        <Bid bidNumber={7} suit="SPADE"/>
        <Bid bidNumber={7} suit="NO_TRUMPS"/>
      </BiddingAreaLayout>
    )
  }
}
