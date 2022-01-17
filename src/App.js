
import './App.css';
import { Counter } from './components/counter';
import { AppContext } from './store/AppContextProv';
import {useContext} from 'react';


function App() {
  const {getState}=useContext(AppContext);
  const {count}=getState()
  console.log(count)
  return (
    <div>
    <div>
     <Counter />
     </div>
     <div>
     {count}
     </div>
    </div>
  );
}

export default App;
