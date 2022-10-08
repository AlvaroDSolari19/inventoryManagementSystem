//import { useState } from 'react'; 
import { Link } from 'react-router-dom';
//import { GuitarList } from '../components/List/GuitarList'



export const GuitarsInventory = () => {
    
    return (
        <>
            <h1>Guitars Inventory</h1>

            <button type="button"><Link to={'/guitars/new'}>Add Guitar</Link></button>


        </>
    )
}