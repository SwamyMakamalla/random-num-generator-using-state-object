// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {number: 0}

  onGenerate = () => {
    const randomNum = Math.ceil(Math.random() * 100)
    // const {number} = this.state
    this.setState({number: randomNum})
  }

  render() {
    const {number} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Random Number</h1>
          <p className="paragraph">
            Generate a random number in the range of 0 to 100
          </p>
          <button type="button" className="button" onClick={this.onGenerate}>
            Generate
          </button>
          <p className="heading">{number}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
