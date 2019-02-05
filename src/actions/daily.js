import { fireStore} from '../firebase';
const userCollection = fireStore.collection('users');

const fetchUserDailyDataSuccess = data => {
  return {
    type: 'FETCH_CHARGE',
    data: data
  }
}

export const fetchUserDailyData = (cuid) =>  dispatch => {
  userCollection.doc(cuid).collection('daily').get().then(  (snapshot) => {
    let stats=[];
    snapshot.docs.forEach((doc) => {
      const data = doc.data();
      stats.push(data);
    })
    dispatch(fetchUserDailyDataSuccess(stats));
  })
}

export const enterTemperature = (temp, cuid) => dispatch  => {
}

export const enterWeight = (weight, cuid) => dispatch  => {
}

export const enterweight = (weight, cuid) => dispatch  => {
}
