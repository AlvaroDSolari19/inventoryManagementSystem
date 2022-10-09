import axios from 'axios'; 
import { useState, useEffect } from 'react'; 



const Guitar = ({someGuitar}) => {
    return (
        <>
            <tr>
                <td>{someGuitar.brandName}</td>
                <td>{someGuitar.guitarModel}</td>
                <td>{someGuitar.guitarColor}</td>
                <td>{someGuitar.isAcoustic ? 'Yes' : 'No'}</td>
                <td>{someGuitar.isElectric ? 'Yes' : 'No'}</td>
                <td>{someGuitar.numberOfStrings}</td>
                <td>{someGuitar.dateAdded}</td>
                <td><button type="button">Update</button></td>
                <td><button type="button">Delete</button></td>
            </tr>
        </>
    )
}

export const GuitarList = () => { 
    
    const [guitarList, setGuitarList] = useState([]); 

    useEffect( () => {
        axios.get('http://localhost:9000/')
            .then( (theResponse) => {
                setGuitarList(theResponse.data); 
            })
            .catch( (anError) => console.error(anError))
    }, [])
    
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Brand</th>
                        <th>Model</th>
                        <th>Color</th>
                        <th>Acoustic?</th>
                        <th>Electric?</th>
                        <th>Number of Strings</th>
                        <th>Date Added</th>
                    </tr>
                </thead>
                <tbody>
                    {guitarList.map( (currentGuitar) => <Guitar key={currentGuitar._id} someGuitar={currentGuitar}/>)}
                </tbody>
            </table>
        </>
    )
}