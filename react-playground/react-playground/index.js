import React, { Component } from 'react'

export default class HelloWorld extends Component {
  state = {
    who: 'world',
  };

  render() {
    return (
      <div className='HelloWorld'>
        <p>Hello, {this.state.who}!</p>
        <button
          onClick={() => this.setState({ who: 'world' })}
        >
          World
        </button>
        <br/>
        <button
          onClick={() => this.setState({ who: 'friend' })}
        >
          Friend
        </button>
        <br />
        <button
          onClick={() => this.setState({ who: 'React' })}
        >
          React
        </button>
      </div>
    )
  }
}



import React, { Component } from 'react'

export default class Bomb extends Component {
  state = {
    count: 0,
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        count: this.state.count + 1
      })
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  renderDisplay() {
    const { count } = this.state
    if (count >= 8) {
      clearInterval(this.interval)
      return 'BOOM!!!!'
    } else if (count % 2 === 0) {
      return 'tick'
    } else {
      return 'tock'
    }
  }

  render() {
    return (
      <div className='CountdownBomb'>
        {this.renderDisplay()}
      </div>
    )
  }
}





import React, { Component } from 'react'

export default class RouletteGun extends Component {
  static defaultProps = {
    bulletInChamber: 8
  };

  state = {
    chamber: null,
    spinningTheChamber: false,
  };

  componentWillUnmount() {
    clearTimeout(this.timeout)
  }

  handleClick = () => {
    this.setState({
      spinningTheChamber: true,
    })
    this.timeout = setTimeout(() => {
      const randomChamber = Math.ceil(Math.random() * 8)

      this.setState({
        chamber: randomChamber,
        spinningTheChamber: false,
      })
    }, 2000)
  }

  renderDisplay() {
    const { chamber, spinningTheChamber } = this.state
    const { bulletInChamber } = this.props
    if (spinningTheChamber) {
      return 'spinning the chamber and pulling the trigger! ...'
    } else if (chamber === bulletInChamber) {
      return 'BANG!!!!!'
    } else {
      return 'you\'re safe!'
    }
  }

  render() {
    return (
      <div className='RouletteGun'>
        <p>{this.renderDisplay()}</p>
        <button onClick={this.handleClick}>
          Pull the trigger!
        </button>
      </div>
    )
  }
}
