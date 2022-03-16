// Write your code here
import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {count1: 0, count2: 0}

  mangoBtn = () => {
    this.setState(prevState => ({count1: prevState.count1 + 1}))
  }

  bananaBtn = () => {
    this.setState(prevState => ({count2: prevState.count2 + 1}))
  }

  render() {
    const {count1, count2} = this.state

    return (
      <div className="bg-container">
        <div className="fruits-container">
          <h1 className="heading">
            Bob ate <span className="count">{count1}</span> mangoes{' '}
            <span className="count">{count2}</span> bananas
          </h1>
          <div className="img-container">
            <div className="each-fruit">
              <img
                className="img-cls"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mangoes"
              />
              <div className="btn-container">
                <button
                  type="button"
                  onClick={this.mangoBtn}
                  className="primary-btn"
                >
                  Eat Mango
                </button>
              </div>
            </div>
            <div className="each-fruit">
              <img
                className="img-cls"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <div className="btn-container">
                <button
                  type="button"
                  onClick={this.bananaBtn}
                  className="primary-btn"
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
