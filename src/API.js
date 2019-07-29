import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects'
import {actions, t} from './actions';
import LoginForm from './components/LoginForm/LoginForm';

// the base URL for your REST API backend
const baseUrl = 'http://35.201.2.209/';

// sending request with username and getting user data from GitHub 
function* loadUserData(action) {
    const response = yield axios.get(`${baseUrl}/${login}`);
    yield put(actions.loadUserDataSuccess(response.data))
}

// watches for actions dispatched to the store and starts loadUserData saga
export function* watchLoadUserData() {
    yield takeLatest(t.LOAD_USER_DATA, loadUserData)
}
export default class App extends Component {
    getDataUsingGet() {
      //GET request
      fetch('http://35.201.2.209/devices', {
        method: 'GET',
        //Request Type
      })
        .then(response => response.json())
        //If response is in json then in success
        .then(responseJson => {
          //Success
          alert(JSON.stringify(responseJson));
          console.log(responseJson);
        })
        //If response is not in json then in error
        .catch(error => {
          //Error
          alert(JSON.stringify(error));
          console.error(error);
        });
    }
  
    getDataUsingPost() {
      //POST json
      var dataToSend = { email: 'foo', password: 'meld123' };
  
      //making data to send on server
      var formBody = [];
      for (var key in dataToSend) {
        var encodedKey = encodeURIComponent(key);
        var encodedValue = encodeURIComponent(dataToSend[key]);
        formBody.push(encodedKey + '=' + encodedValue);
      }
      formBody = formBody.join('&');
  
      //POST request
      fetch('http://35.201.2.209/login', {
        method: 'POST', //Request Type
        body: formBody, //post body
        headers: {
          //Header Defination
          'Content-Type': 'application/JSON',
        },
      })
        .then(response => response.json())
        //If response is in json then in success
        .then(responseJson => {
          alert(JSON.stringify(responseJson));
          console.log(responseJson);
        })
        //If response is not in json then in error
        .catch(error => {
          alert(JSON.stringify(error));
          console.error(error);
        });
    }
  
    render() {
      return (
        <View style={styles.MainContainer}>
          {/*Running GET Request*/}
          <Button title="Devices" onPress={this.getDataUsingGet} />
  
          {/*Running POST Request*/}
          <Button title="Login" onPress={this.getDataUsingPost} />
        </View>
      );
    }
  }
  const styles = StyleSheet.create({
    MainContainer: {
      justifyContent: 'center',
      flex: 1,
      margin: 10,
    },
  });
  
