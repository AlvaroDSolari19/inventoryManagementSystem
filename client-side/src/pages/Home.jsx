import { useState } from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export const Home = () => {

    const navigateTo = useNavigate(); 
    const [maxCapacity, setMaxCapacity] = useState(5);  

    const handleSubmit = (someEvent) => {
        someEvent.preventDefault();  
        navigateTo(`/guitars?capacity=${maxCapacity}`); 
    }

    return (
        <div className="formContainer">
            <h1 className="mainTitle">Warehouse Settings</h1>
            
            <Form onSubmit={handleSubmit}>

                <Form.Group>
                    <Form.Label htmlFor=""> Maximum Capacity: </Form.Label>
                    <Form.Control type="number" value={maxCapacity} onChange={ (someEvent) => setMaxCapacity(someEvent.target.value)} min="0"/>
                </Form.Group>

                <Button className="finalButtons" variant='success' type="submit">Proceed</Button>

            </Form>
        </div>
    );
}