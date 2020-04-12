import React from 'react';
import { PageWrap } from './App.style'
import { PlayingArea } from './components/PlayingArea'
import MenuArea from './components/MenuArea'
import { BiddingArea } from './components/BiddingArea'
import { ScoringArea } from './components/ScoringArea'

function App() {
  return (
    <React.Fragment>
      <PageWrap id="page-wrap">
        <MenuArea/>
        <BiddingArea/>
        <ScoringArea/>
        <PlayingArea/>
      </PageWrap>
    </React.Fragment>
  );
}

export default App;
