import {firebaseAuth} from '../firebase';
export const signInWithAnonymous = () => dispatch => {
  firebaseAuth().signInAnonymously().then(result => {
    console.log(result);
  })
}
