import {useState,useEffect} from 'react'
import {isAddress} from 'viem'

interface AddressInputProps { 
    onAddressSubmit: (address: `0x${string}`) => void; 
}
const AddressInput = (): any =>{ 
    const [address, setAddress] = useState(''); 
    const [valid, setValid] = useState<boolean | null>(null);
    const [error,setError] = useState<string>('')

    useEffect(()=>{ 
        if(address.length === 0) { 
            setValid(null)
            setError('Неверный адрес evm')
            return
        }
        if(!isAddress(address)) { 
            setValid(false)
            setError('Неверный адрес evm')

        }else { 
            setValid(true)
            setError('')
        }
    },[address])
    function handleInput(e: any): any { 
        setAddress(e.target.value)
    }
  
    const handleApi = ():any => { 

    }

    return (//доработать 
    <>
    <div>
        <input 
            value = {address}
            placeholder='Введите адрес'
            onChange ={ handleInput}
        />
        <button onClick = {handleApi}>Проверка адреса</button>
        {valid === false && <div style={{color: 'red'}}>Неверный адрес</div>}
        {valid === true && <div style={{color: 'green'}}>Адрес валиден</div>}
    </div>
    </>

    )
}

export default AddressInput