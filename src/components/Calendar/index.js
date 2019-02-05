import React, { Component } from 'react';
import TemperatureModal from 'components/TemperatureModal';

class Calender extends Component {
  constructor(props){
    super(props)
    this.state={
      weight:false,
      temperature:false,
      menstruation:false
    }
  }

  render() {
    return (
      <div className="App">
        <TemperatureModal TemperatureModalOpen={this.state.temperature} onTemperatureModalClose={() => this.setState({temperature: false})}/>
        <button onClick={() => this.setState({temperature:true})}>temperature</button>
        <button onClick={() => this.setState({weight:true})}>weight</button>
        <button onClick={() => this.setState({menstruation:true})}>menstruation</button>
        <button onClick={() => this.history.push('/condition')}>condition</button>
      </div>
    );
  }
}

export default Calender;
