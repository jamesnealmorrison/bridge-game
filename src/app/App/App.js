import React from 'react';
import './App.css';
import { PageWrap } from './components/App.style'
import { PlayingArea } from './components/PlayingArea'

function App() {
  return (
    <React.Fragment>
      <PageWrap id="page-wrap">
        HI, JIM. CAN YOU SEE ME?
        <button>jim</button>
        <PlayingArea>
        </PlayingArea>
      </PageWrap>
    </React.Fragment>
  );
}

export default App;
