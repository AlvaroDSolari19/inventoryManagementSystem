import { useState } from 'react'; 
import { useNavigate, useSearchParams } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import axios from 'axios'; 

const generateCurrentDate = () => {
    const todaysDate = new Date(); 
    let [currentYear, currentMonth, currentDay] = [todaysDate.getFullYear(), todaysDate.getMonth() + 1, todaysDate.getDate()];
    if (currentMonth <= 9) { currentMonth = '0' + currentMonth; }
    if (currentDay <= 9) { currentDay = '0' + currentDay; }
    return (`${currentMonth}/${currentDay}/${currentYear}`);
}

export const GuitarForm = () => { 

    const navigateTo = useNavigate(); 
    const [searchParams] = useSearchParams(); 
    const maxCapacity = searchParams.get('capacity'); 

    const [guitarInformation, setGuitarInformation] = useState ({
        guitarBrand: '', 
        guitarModel: '', 
        guitarColor: '', 
        isAcoustic: false, 
        isElectric: false, 
        numberOfStrings: 6,
        dateAdded: generateCurrentDate()
    })

    const handleClear = () => { 
        setGuitarInformation({
            guitarBrand: '', 
            guitarModel: '', 
            guitarColor: '', 
            isAcoustic: false, 
            isElectric: false, 
            numberOfStrings: 6, 
            dateAdded: generateCurrentDate()
        })
    }

    const handleSubmit = async (someEvent) => {
        someEvent.preventDefault(); 

        try {
            await axios.post('http://localhost:9000/', {
                brandName: guitarInformation.guitarBrand,
                guitarModel: guitarInformation.guitarModel, 
                guitarColor: guitarInformation.guitarColor, 
                isAcoustic: guitarInformation.isAcoustic, 
                isElectric: guitarInformation.isElectric, 
                numberOfStrings: guitarInformation.numberOfStrings, 
                dateAdded: guitarInformation.dateAdded
            });

            someEvent.target.reset(); 
            handleClear(); 
            navigateTo(`/guitars?capacity=${maxCapacity}`);

        } catch (anError) { 
            console.error(anError);
        }
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
                    <Form.Label>Guitar Type: </Form.Label>
                </Form.Group>

                <Form.Group as={Col}>
                    {/*<input type="checkbox" onChange={ (someEvent) => setGuitarInformation({...guitarInformation, isAcoustic: !guitarInformation.isAcoustic})}/>*/}
                    <Form.Check type="checkbox" label="Acoustic" onChange={ (someEvent) => setGuitarInformation({...guitarInformation, isAcoustic: !guitarInformation.isAcoustic})}/>
                </Form.Group>
    
                <Form.Group as={Col}>
                    <Form.Check type="checkbox" label="Electric" onChange={ (someEvent) => setGuitarInformation({...guitarInformation, isElectric: !guitarInformation.isElectric})}/>
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

            <Button className="finalButtons" type="reset" variant="light" onClick={handleClear}>Clear</Button>
            <Button className="finalButtons" type="submit" variant="success">Submit</Button>

        </Form>
    )
}