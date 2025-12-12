import {useState} from 'react'
import {isAddress} from 'viem'
const AddressInput = (): any =>{ 
    const [address, setAddress] = useState(''); 
    const [valid, setValid] = useState<boolean>();
    function handleInput(e: any): any { 
        setAddress(e.target.value)
    }
    function handleValidation ():any { 
        if(!isAddress(address)) {
            setValid(false)
        }else{
            setValid(true)
        }
        
    }   

    return (
    <>
    <div>
        <input 
            value = {address}
            placeholder='Введите адрес'
            onChange ={ handleInput}
        />
        <button onClick = {handleValidation}>Проверка адреса</button>
    </div>
    </>

    )
}