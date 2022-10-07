import { useState } from 'react'; 
import { GuitarForm } from '../components/Form/GuitarForm'

export const GuitarsInventory = () => {

    const [displayForm, setDisplayForm] = useState(false); 

    const addButtonAction = () => {
        setDisplayForm(true); 
    }
    
    return (
        <>
            <h1>Guitars Inventory</h1>

            <div>
                <button type="button">Get All Guitars</button>
                <button type="button">Get Guitar By Brand</button>
                <button type="button" onClick={addButtonAction}>Add Guitar</button>
            </div>

            {displayForm && <GuitarForm />}
        </>
    )
}