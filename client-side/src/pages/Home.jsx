import { useState } from 'react'; 
import { useNavigate } from 'react-router-dom'; 

export const Home = () => {

    const navigateTo = useNavigate(); 
    const [maxCapacity, setMaxCapacity] = useState(0);  

    const handleSubmit = (someEvent) => {
        someEvent.preventDefault();  
        navigateTo(`/guitars?capacity=${maxCapacity}`); 
    }

    return (
        <>
            <h1>Warehouse Settings</h1>
            
            <form action="" onSubmit={handleSubmit}>

                <label htmlFor="">Max Capacity: </label>
                <input type="number" value={maxCapacity} onChange={ (someEvent) => setMaxCapacity(someEvent.target.value)} min="0"/>

                <button type="submit">Proceed</button>

            </form>
        </>
    );
}