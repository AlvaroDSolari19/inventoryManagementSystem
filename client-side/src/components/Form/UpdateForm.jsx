import axios from 'axios'
import { useState } from 'react'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'; 
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export const UpdateForm = () => { 

    const currentGuitar = useLocation().state; 
    const navigateTo = useNavigate(); 
    const [searchParams] = useSearchParams(); 
    const maxCapacity = searchParams.get('capacity'); 

    const [guitarInformation, setGuitarInformation] = useState({
        guitarBrand: currentGuitar.brandName, 
        guitarModel: currentGuitar.guitarModel, 
        guitarColor: currentGuitar.guitarColor, 
        isAcoustic: currentGuitar.isAcoustic, 
        isElectric: currentGuitar.isElectric, 
        numberOfStrings: currentGuitar.numberOfStrings, 
        dateAdded: currentGuitar.dateAdded
    })

    const handleCancel = () => {
        navigateTo(`/guitars?capacity=${maxCapacity}`);
    }


    const handleSubmit = async (someEvent) => { 
        someEvent.preventDefault(); 
    
        await axios.put('http://localhost:9000/' + currentGuitar._id, {
            brandName: guitarInformation.guitarBrand, 
            guitarModel: guitarInformation.guitarModel, 
            guitarColor: guitarInformation.guitarColor, 
            isAcoustic: guitarInformation.isAcoustic, 
            isElectric: guitarInformation.isElectric, 
            numberOfStrings: guitarInformation.numberOfStrings, 
            dateAdded: guitarInformation.dateAdded
        });

        navigateTo(`/guitars?capacity=${maxCapacity}`);
    }

    return (
        <Form onSubmit={handleSubmit}>

            <Form.Group>
                <Form.Label htmlFor="guitarBrand">Brand: </Form.Label>
                <Form.Control type="text" id="guitarBrand" value={guitarInformation.guitarBrand} onChange={ (someEvent) => setGuitarInformation({...guitarInformation, guitarBrand: someEvent.target.value})}/>
            </Form.Group>

            <Form.Group>
                <Form.Label htmlFor="guitarModel">Model: </Form.Label>
                <Form.Control type="text" id="guitarModel" value={guitarInformation.guitarModel} onChange={ (someEvent) => setGuitarInformation({...guitarInformation, guitarModel: someEvent.target.value})}/>
            </Form.Group>

            <Form.Group>
                <Form.Label htmlFor="guitarColor">Color: </Form.Label>
                <Form.Control type="text" id="guitarModel" value={guitarInformation.guitarColor} onChange={ (someEvent) => setGuitarInformation({...guitarInformation, guitarColor: someEvent.target.value})} />
            </Form.Group>

            
            <Row>

                <Form.Group as={Col}>
                    <Form.Label htmlFor="guitarColor">Acoustic? </Form.Label>                    
                    <Form.Select onChange={ (someEvent) => setGuitarInformation({...guitarInformation, isAcoustic: someEvent.target.value})}>
                        <option value={guitarInformation.isAcoustic}>{guitarInformation.isAcoustic ? 'Yes' : 'No'}</option>
                        <option value={!guitarInformation.isAcoustic}>{!guitarInformation.isAcoustic ? 'Yes' : 'No'}</option>
                    </Form.Select>
                </Form.Group>
    
                <Form.Group as={Col}>
                    <Form.Label htmlFor="guitarColor">Electric? </Form.Label>                    
                    <Form.Select onChange={ (someEvent) => setGuitarInformation({...guitarInformation, isElectric: someEvent.target.value})}>
                        <option value={guitarInformation.isElectric}>{guitarInformation.isElectric ? 'Yes' : 'No'}</option>
                        <option value={!guitarInformation.isElectric}>{!guitarInformation.isElectric ? 'Yes' : 'No'}</option>
                    </Form.Select>
                </Form.Group>
            </Row>

            <Form.Group>
                <Form.Label htmlFor="numberOfStrings">Number of Strings: </Form.Label>
                <Form.Control type="number" id="numberOfStrings" value={guitarInformation.numberOfStrings} onChange={ (someEvent) => setGuitarInformation({...guitarInformation, numberOfStrings: someEvent.target.value})}/>
            </Form.Group>

            <Form.Group>
                <Form.Label htmlFor="currentDate">Date: </Form.Label>
                <Form.Control type="text" id="currentDate" value={guitarInformation.dateAdded} disabled/>
            </Form.Group>

            <Button className="finalButtons" type="button" variant="danger" onClick={handleCancel}>Cancel</Button>
            <Button className="finalButtons" type="submit" variant="success">Submit</Button>

        </Form>
    )
}