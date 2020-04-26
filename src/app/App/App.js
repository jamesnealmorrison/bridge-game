import React from 'react';
import { PageWrap } from './App.style'
import { BiddingArea } from './components/BiddingArea'
import { ScoringArea } from './components/ScoringArea'
import PlayerArea from './components/PlayerArea'
import TrickArea from './components/TrickArea'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { selectHand } from '../store/game/game.selectors'

class App extends React.PureComponent {
  render() {
    const {
      northHand,
      southHand,
      eastHand,
      westHand,
    } = this.props
    return (
      <React.Fragment>
        <PageWrap id="page-wrap">
          <BiddingArea />
          <ScoringArea />
          <PlayerArea hand={ northHand } direction="NORTH" gridColumn="2" gridRow="1" />
          <PlayerArea hand={ southHand } direction="SOUTH" gridColumn="2" gridRow="3" />
          <PlayerArea hand={ eastHand } direction="EAST" gridColumn="3" gridRow="2" />
          <PlayerArea hand={ westHand } direction="WEST" gridColumn="1" gridRow="2" />
          <TrickArea />
        </PageWrap>
      </React.Fragment>
    )
  }
}

export const mapStateToProps = state => ({
  northHand: selectHand('NORTH', state),
  southHand: selectHand('SOUTH', state),
  eastHand: selectHand('EAST', state),
  westHand: selectHand('WEST', state),
})

export default compose(
  connect(mapStateToProps, null),
)(App)
