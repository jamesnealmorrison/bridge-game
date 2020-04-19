import {
  FlatButtonBase,
  // RaisedButtonBase,
} from './Button.style'
import buttonFactory from './buttonFactory'

const Button = buttonFactory(FlatButtonBase)

// Button.Raised = buttonFactory(RaisedButtonBase)

export default Button
