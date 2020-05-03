import React from 'react'
import { BiddingAreaLayout } from './BiddingArea.style'
import Bid from '../../shared/components/Bid'

export class BiddingArea extends React.PureComponent {
  render() {
    return (
      <BiddingAreaLayout>
        <Bid level={1} suit="CLUB"/>
        <Bid level={1} suit="DIAMOND"/>
        <Bid level={1} suit="HEART"/>
        <Bid level={1} suit="SPADE"/>
        <Bid level={1} suit="NO_TRUMPS"/>
        <Bid level={2} suit="CLUB"/>
        <Bid level={2} suit="DIAMOND"/>
        <Bid level={2} suit="HEART"/>
        <Bid level={2} suit="SPADE"/>
        <Bid level={2} suit="NO_TRUMPS"/>
        <Bid level={3} suit="CLUB"/>
        <Bid level={3} suit="DIAMOND"/>
        <Bid level={3} suit="HEART"/>
        <Bid level={3} suit="SPADE"/>
        <Bid level={3} suit="NO_TRUMPS"/>
        <Bid level={4} suit="CLUB"/>
        <Bid level={4} suit="DIAMOND"/>
        <Bid level={4} suit="HEART"/>
        <Bid level={4} suit="SPADE"/>
        <Bid level={4} suit="NO_TRUMPS"/>
        <Bid level={5} suit="CLUB"/>
        <Bid level={5} suit="DIAMOND"/>
        <Bid level={5} suit="HEART"/>
        <Bid level={5} suit="SPADE"/>
        <Bid level={5} suit="NO_TRUMPS"/>
        <Bid level={6} suit="CLUB"/>
        <Bid level={6} suit="DIAMOND"/>
        <Bid level={6} suit="HEART"/>
        <Bid level={6} suit="SPADE"/>
        <Bid level={6} suit="NO_TRUMPS"/>
        <Bid level={7} suit="CLUB"/>
        <Bid level={7} suit="DIAMOND"/>
        <Bid level={7} suit="HEART"/>
        <Bid level={7} suit="SPADE"/>
        <Bid level={7} suit="NO_TRUMPS"/>
      </BiddingAreaLayout>
    )
  }
}
