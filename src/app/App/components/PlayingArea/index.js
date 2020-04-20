import React from 'react'
import { PlayingAreaLayout } from './PlayingArea.style'
import { PlayerArea } from '../PlayerArea'
import { TrickArea } from '../TrickArea'

export class PlayingArea extends React.PureComponent {
  render() {
    return (
      <PlayingAreaLayout>
        <PlayerArea direction="NORTH" backgroundColor="red" gridColumn="2" gridRow="1" />
        <PlayerArea direction="SOUTH" backgroundColor="green" gridColumn="2" gridRow="3" />
        <PlayerArea direction="EAST" backgroundColor="purple" gridColumn="3" gridRow="2"/>
        <PlayerArea direction="WEST" backgroundColor="white" gridColumn="1" gridRow="2"/>
        <TrickArea />
      </PlayingAreaLayout>
    )
  }
}
