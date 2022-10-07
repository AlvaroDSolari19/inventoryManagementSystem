import { useState } from 'react'; 

export const GuitarForm = () => { 

    const [guitarInformation, setGuitarInformation] = useState ({
        guitarBrand: '', 
        guitarModel: '', 
        guitarColor: '', 
        isAcoustic: false, 
        numberOfStrings: 6
    })
    
    // Move this outside of GuitarForm ... Doesn't need to be exported 
    const generateCurrentDate = () => {
        const todaysDate = new Date(); 
        let [currentYear, currentMonth, currentDay] = [todaysDate.getFullYear(), todaysDate.getMonth() + 1, todaysDate.getDate()];
        
        if(currentMonth <= 9){
            currentMonth = '0' + currentMonth; 
        }

        if(currentDay <= 9){
            currentDay = '0' + currentDay; 
        }

        return (`${currentMonth}/${currentDay}/${currentYear}`);
    }

    const handleSubmit = async (someEvent) => {
        someEvent.preventDefault(); 
        console.log(guitarInformation); 
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

            {/* ADD LOGIC AFTER MODIFYING SCHEMA */}
            <label htmlFor="">Electric? </label>
            <input type="checkbox" />

            <label htmlFor="numberOfStrings">Number of Strings: </label>
            <input type="number" id="numberOfStrings" value={guitarInformation.numberOfStrings} onChange={ (someEvent) => setGuitarInformation({...guitarInformation, numberOfStrings: someEvent.target.value})}/>

            <label htmlFor="currentDate">Date: </label>
            <input type="text" id="currentDate" value={generateCurrentDate()} disabled/>

            <button type="reset">Clear</button>
            <button type="submit">Submit</button>


        </form>
    )
}