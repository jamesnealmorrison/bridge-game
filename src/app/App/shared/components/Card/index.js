import React from 'react'

class Card extends React.PureComponent {
  render() {
    const {
      rank,
      suit,
    } = this.props
    let imageName = rank + '_' + suit + '.svg'
    return (
      <img src={imageName} width="100" height="150"/>
    )
  }
}

// Button.Raised = buttonFactory(RaisedButtonBase)

export default Card
