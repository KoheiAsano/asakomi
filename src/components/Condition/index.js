import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const style = {
  btnstyle: {
    marginRight: "10px",
    marginBottom: "10px",
    backgroundColor: "#04B486",
    "color": "white",
    textTransform: "none",
  }
}

class Condition extends Component {
  constructor(props){
    super(props)
    this.state={
      weight:false,
      temperature:false,
      menstruation:false
    }
  }

  render() {
    let input;
    const handleChange = (e) => {input = e.target.value}
    return (
      <div className="App">
        <TextField label={"きもち"}
                   value={input}
                   style={{marginRight: "10px"}} autoFocus
                   onChange={(e) => input = handleChange(e)}/>
        <Button style={style.btnstyle}
               variant="outlined"
               value="保存"
               onClick={() => {
                 this.props.history.push('/')
               }}>
        保存
        </Button>
      </div>
    );
  }
}

export default Condition;
