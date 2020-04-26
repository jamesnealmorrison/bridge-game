import React from 'react'
import Button from '../Button'

class Bid extends React.PureComponent {
  render() {
    const {
      bidNumber,
      suit,
    } = this.props
    let imageName = 'Suit' + suit + '.svg'
    return (
      <Button onClick={() => {console.log('clicked on ' + bidNumber + ' ' + suit)}}>
        { bidNumber }
        {(suit === 'NoTrumps') ? (' NT') : (<img src={imageName} width="20" height="20"/>)}
      </Button>
    )
  }
}

export default Bid
