import { useState } from 'react'; 
import { GuitarList } from '../components/List/GuitarList'
import { GuitarForm } from '../components/Form/GuitarForm'

export const GuitarsInventory = () => {

    const [buttonsCondition, setButtonsCondition] = useState({
        displayTable: false, 
        displayFilter: false, 
        displayAddForm: false 
    }); 

    const allGuitarsAction = () => {
        setButtonsCondition( (buttonsCondition) => ({
            ...buttonsCondition, 
            displayTable: true
        }))
    }
    
    const addGuitarAction = () => {
        setButtonsCondition( (buttonsCondition) => ({
            ...buttonsCondition, 
            displayAddForm: true
        }))
    }
    
    return (
        <>
            <h1>Guitars Inventory</h1>

            <div>
                <button type="button" onClick={allGuitarsAction}>Get All Guitars</button>
                <button type="button">Get Guitar By Brand</button>
                <button type="button" onClick={addGuitarAction}>Add Guitar</button>
            </div>

            {buttonsCondition.displayAddForm && <GuitarForm />}
            {buttonsCondition.displayTable && <GuitarList />}
        </>
    )
}