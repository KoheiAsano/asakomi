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
const MenstruationModal = ({menstruationModalOpen, onMenstruationModalClose}) => {
  let inputStart, inputEnd;
  const handleChange = (e) => (e.target.value)
  return(
    <div>
      <Grid>
        <Modal open={menstruationModalOpen}
               onClose={() => onMenstruationModalClose()}>
          <div>
            <div style={style.selectProjectModalStyle}>
              <h3>生理開始日</h3>
              <TextField label={"開始日"}
                         value={inputStart}
                         style={{marginRight: "10px"}} autoFocus
                         onChange={(e) =>  inputStart = handleChange(e)}/>
            </div>
            <div style={style.selectProjectModalStyle}>
              <h3>生理終了日</h3>
              <TextField label={"終了日"}
                         value={inputEnd}
                         style={{marginRight: "10px"}} autoFocus
                         onChange={(e) => inputEnd = handleChange(e)}/>
            </div>
            <div>
              <Button style={ style.btnstyle}
                      variant="outlined"
                      value="閉じる"
                      onClick={() => {
                        onMenstruationModalClose();
                      }}>
              閉じる
              </Button>
              <Button style={style.btnstyle}
                      variant="outlined"
                      value="保存"
                      onClick={() => {
                        onMenstruationModalClose();
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

export default MenstruationModal;
