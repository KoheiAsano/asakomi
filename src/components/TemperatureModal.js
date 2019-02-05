import React from 'react';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
const style = {
  btnstyle: {
    marginRight: "10px",
    marginBottom: "10px",
    backgroundColor: "#04B486",
    "color": "white",
    textTransform: "none",
  },
  selectProjectModalStyle: {
    display:"inline-block",
    marginTop:"250px",
    height:"200px",
    //widthはGridでレスポンシブに
    minWidth: "300px",
    backgroundColor:"white",
    textAlign:"center",
    "outline":"none",
    borderRadius:"30px",
    fontFamily:"Avenir",
  },
  disabledstyle: {
    marginRight: "10px",
    marginBottom: "10px",
    backgroundColor: "gray",
    "color": "white",
    textTransform: "none",
  },
}
const TemperatureModal = ({temperatureModalOpen, onTemperatureModalClose}) => {
  let input
  const handleChange = (e) => {input = e.target.value}
  return(
    <div>
      <Grid>
        <Modal open={temperatureModalOpen}
               onClose={() => onTemperatureModalClose()}>
          <div>
            <div style={style.selectProjectModalStyle}>
              <h3>基礎体温</h3>
              <TextField label={"体温"}
                         value={input}
                         style={{marginRight: "10px"}} autoFocus
                         onChange={(e) => handleChange(e)}/>
            </div>
            <div>
              <Button style={ style.btnstyle}
                      variant="outlined"
                      value="閉じる"
                      onClick={() => {
                        onTemperatureModalClose();
                      }}>
              閉じる
              </Button>
              <Button style={style.btnstyle}
                      variant="outlined"
                      value="保存"
                      onClick={() => {
                        onTemperatureModalClose();
                      }}>
              保存
              </Button>
            </div>
          </div>
        </Modal>
      </Grid>
    </div>
  )
}

export default TemperatureModal;
