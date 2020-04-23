import React from 'react';
import { PageWrap } from './App.style'
import { BiddingArea } from './components/BiddingArea'
import { ScoringArea } from './components/ScoringArea'
import { PlayerArea } from './components/PlayerArea'
import { TrickArea } from './components/TrickArea'

function App() {
  return (
    <React.Fragment>
      <PageWrap id="page-wrap">
        <BiddingArea />
        <ScoringArea />
        <PlayerArea direction="NORTH" backgroundColor="red" gridColumn="2" gridRow="1" />
        <PlayerArea direction="SOUTH" backgroundColor="green" gridColumn="2" gridRow="3" />
        <PlayerArea direction="EAST" backgroundColor="purple" gridColumn="3" gridRow="2"/>
        <PlayerArea direction="WEST" backgroundColor="white" gridColumn="1" gridRow="2"/>
        <TrickArea />
      </PageWrap>
    </React.Fragment>
  );
}

export default App;
