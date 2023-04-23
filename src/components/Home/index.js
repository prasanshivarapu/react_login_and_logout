// Write your code here
import {Component} from 'react'
import './index.css'

class Home extends Component {
  state = {btn: false}

  get = () => {
    this.setState(p => ({btn: !p.btn}))
  }

  get2 = () => {
    const {btn} = this.state
    if (btn === false) {
      return 'login'
    }
    return 'logout'
  }

  get3 = () => {
    const {btn} = this.state
    if (btn === false) {
      return 'Please login'
    }
    return 'Please logout'
  }

  render() {
    const result1 = this.get2()
    const result2 = this.get3()
    return (
      <div className="greet1">
        <div className="greet2">
          <h1>{result2}</h1>
          <button type="button" className="greet3" onClick={this.get}>
            {result1}
          </button>
        </div>
      </div>
    )
  }
}

export default Home
