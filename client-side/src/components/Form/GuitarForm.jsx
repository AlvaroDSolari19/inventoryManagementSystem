import { useState } from 'react'; 
import { useNavigate, useSearchParams } from 'react-router-dom'

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
        <form action="" onSubmit={handleSubmit}>

            <label htmlFor="guitarBrand">Brand: </label>
            <input type="text" id="guitarBrand" value={guitarInformation.guitarBrand} onChange={ (someEvent) => setGuitarInformation({...guitarInformation, guitarBrand: someEvent.target.value})}/>

            <label htmlFor="guitarModel">Model: </label>
            <input type="text" id="guitarModel" value={guitarInformation.guitarModel} onChange={ (someEvent) => setGuitarInformation({...guitarInformation, guitarModel: someEvent.target.value})}/>

            <label htmlFor="guitarColor">Color: </label>
            <input type="text" id="guitarModel" value={guitarInformation.guitarColor} onChange={ (someEvent) => setGuitarInformation({...guitarInformation, guitarColor: someEvent.target.value})} />

            <label htmlFor="">Acoustic? </label>
            <input type="checkbox" onChange={ (someEvent) => setGuitarInformation({...guitarInformation, isAcoustic: !guitarInformation.isAcoustic})}/>

            <label htmlFor="">Electric? </label>
            <input type="checkbox" onChange={ (someEvent) => setGuitarInformation({...guitarInformation, isElectric: !guitarInformation.isElectric})}/>

            <label htmlFor="numberOfStrings">Number of Strings: </label>
            <input type="number" id="numberOfStrings" value={guitarInformation.numberOfStrings} onChange={ (someEvent) => setGuitarInformation({...guitarInformation, numberOfStrings: someEvent.target.value})}/>

            <label htmlFor="currentDate">Date: </label>
            <input type="text" id="currentDate" value={guitarInformation.dateAdded} disabled/>

            <button type="reset" onClick={handleClear}>Clear</button>
            <button type="submit">Submit</button>

        </form>
    )
}