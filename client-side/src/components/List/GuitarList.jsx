import axios from 'axios'; 
import { useState, useEffect } from 'react'; 
import { Link, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

export const GuitarList = ({maxCapacity}) => { 
    
    const navgiateTo = useNavigate(); 
    const [guitarList, setGuitarList] = useState([]); 
    
    

    useEffect( () => {
        axios.get('http://localhost:9000/')
            .then( (theResponse) => {
                setGuitarList(theResponse.data); 
            })
            .catch( (anError) => console.error(anError))
    }, [])

    const handleDelete = (guitarID, guitarList) => {
        axios.delete('http://localhost:9000/' + guitarID);
        const matchingGuitarIndex = guitarList.findIndex( (currentGuitar) => currentGuitar._id === guitarID)
        guitarList.splice(matchingGuitarIndex, 1);
        const updatedGuitarList = [...guitarList]
        setGuitarList(updatedGuitarList); 
    }

    const handleAddButton = () => { 
        navgiateTo(`/guitars/new?capacity=${maxCapacity}`)
    }

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
                    <td>
                        <Button className="optionsButtons" type="button" variant="warning"><Link to={'/guitars/edit/' + someGuitar._id + '?capacity=5'} state={someGuitar}>Update</Link></Button>
                        <Button className="optionsButtons" type="button" variant="danger" onClick={ (someEvent) => handleDelete(someGuitar._id, guitarList)}>Delete</Button>
                    </td>
                </tr>
            </>
        )
    }

    return (
        <>
            <div className="mainContainer">
                <h1 className='mainTitle'>Guitars Inventory</h1>
                {(guitarList.length < maxCapacity) ? <Button type="button" variant="success" onClick={handleAddButton}>Add Guitar</Button> : <p>You cannot add more guitars because you have reached the maximum capacity.</p>}
            </div>
            <div className="tableContainer">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Brand</th>
                            <th>Model</th>
                            <th>Color</th>
                            <th>Acoustic</th>
                            <th>Electric</th>
                            <th>Number of Strings</th>
                            <th>Date Added</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {guitarList.map( (currentGuitar) => <Guitar key={currentGuitar._id} someGuitar={currentGuitar}/>)}
                    </tbody>
                </Table>
            </div>
        </>
    )
}