
import React, {Component} from 'react'

class ErrorBoundry extends Component {
  constructor(){
    super()
    this.state = {
      hasError: false
    }
  }

  componentDidCatch(){
    this.setState({hasError:true})
  }

  render(){
    return (
      (this.state.hasError) ?
      <h2>Oooops...that can't be good...</h2>:
      this.props.children
    )
  }
}

export default ErrorBoundry;
