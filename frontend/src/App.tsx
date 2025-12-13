import {useState, useEffect} from 'react'; 
import AddressInput from './components/AddressInput';
import Dashboard from './components/Dashboard';

const App = ():any => { 
    const [currentAddress, setCurrentAddress] = useState<`0x${string}` | null>(null); 
    const handleAddressSubmit = (address: `0x${string}`):any => { 
        setCurrentAddress(address);
    }
    return(
        <>
            <div className= "App">
                <h1>Web3 Identity Dashboard</h1>
                <AddressInput onAddressSubmit = {handleAddressSubmit}/>

                {currentAddress && (
                <Dashboard address={currentAddress} />
                )}
            </div>
        </>
        
    )
}