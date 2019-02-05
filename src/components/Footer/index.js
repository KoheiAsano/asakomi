import React from 'react';
import Button from '@material-ui/core/Button';
const btnstyle = {
  marginRight: "10px",
  marginBottom: "10px",
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  borderRadius: 3,
  border: 0,
  color: 'white',
  height: 40,
  padding: '0 30px',
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
}

const disablestyle = {
  height: 40,
  backgroundColor: "grey",
  "color": "white",
  borderRadius: 3,
  border: 0,
  padding: '0 30px',
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
}




class Footer extends React.Component {
  componentDidMount(){
  }
  checkPath(cPath, target){
    return cPath === target;
  }
  render(){
    if(this.props.match.params.cPath !== 'condition'){
      return (
        <div>
          <Button
            style={this.checkPath(this.props.match.params.cPath,undefined) ? disablestyle:btnstyle}
            disable={this.checkPath(this.props.match.params.cPath,undefined)}
            onClick={() => this.props.history.push(`/`)}>
            Home
          </Button>
          <Button
            style={this.checkPath(this.props.match.params.cPath,"calendar") ? disablestyle:btnstyle}
            disable={this.checkPath(this.props.match.params.cPath,"calendar")}
            onClick={() => this.props.history.push(`/calendar`)}>
            Calendar
          </Button>
          <Button
            style={this.checkPath(this.props.match.params.cPath,"menstruation") ? disablestyle:btnstyle}
            disable={this.checkPath(this.props.match.params.cPath,"menstruation")}
            onClick={() => this.props.history.push(`/menstruation`)}>
            manageMenstruation
          </Button>
        </div>
      )
    }else {
      return null;
    }
  }
}


export default Footer
