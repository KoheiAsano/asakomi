import React, { Component } from 'react';
import TemperatureModal from 'containers/TemperatureModal';
import WeightModal from 'containers/WeightModal';
import MenstruationModal from 'containers/MenstruationModal';

class Home extends Component {
  constructor(props){
    super(props)
    this.state={
      weight:false,
      temperature:false,
      menstruation:false
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.temperature !== prevState.temperature) {
      console.log(this.state.temperature)
    }
  }

  render() {
    return (
      <div className="App">
        <button onClick={() => this.setState({temperature:true})}>temperature</button>
        <button onClick={() => this.setState({weight:true})}>weight</button>
        <button onClick={() => this.props.history.push('/condition')}>condition</button>
        <WeightModal weightModalOpen={this.state.weight} onWeightModalClose={() => this.setState({weight: false})}/>
        <TemperatureModal temperatureModalOpen={this.state.temperature} onTemperatureModalClose={() => this.setState({temperature: false})}/>
        <MenstruationModal menstruationModalOpen={this.state.menstruation} onMenstruationModalClose={() => this.setState({menstruation: false})}/>
        <button onClick={() => this.setState({menstruation:true})}>menstruation</button>
      </div>
    );
  }
}

export default Home;
