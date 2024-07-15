import './App.css';
import { Body } from './Components/Body';
import Head  from './Components/Head';
import {Provider} from "react-redux"
import store from './utils/store';


function App() {
  return (
    <Provider store = {store}>
    <div className=''>
      <div>
        <Head/>
        <Body/>
      </div>
    </div>
    </Provider>
  );
}

export default App;
