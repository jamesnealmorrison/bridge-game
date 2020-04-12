import React from 'react';
import './App.css';
import { PageWrap } from './components/App.style'

function App() {
  return (
    <React.Fragment>
      <PageWrap id="page-wrap">
         HI, JIM. CAN YOU SEE ME?
         <div>
           <header>
             <button>jim</button>
           </header>
         </div>
      </PageWrap>
    </React.Fragment>
  );
}

export default App;
