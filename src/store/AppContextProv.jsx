
import { useState ,createContext} from 'react';

export const AppContext=createContext();

export const AppContextProvider = ({children,store}) => {
    const {dispatch,getState}=store;
    const value={dispatch,getState};
    const [state, setstate] = useState(0);
    const forceupdate=()=>setstate(prev=>prev+1);
    store.subscribe(forceupdate);

    return (
        <div>
          <AppContext.Provider value={value}>  
          {children}
          </AppContext.Provider>
        </div>
    )
}

//store
//getstate
//dispatch
//subscribe
//store.subscribe