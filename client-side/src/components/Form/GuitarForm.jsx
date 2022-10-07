export const GuitarForm = () => { 
    
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
    
    return (
        <form action="">

            <label htmlFor="">Brand: </label>
            <input type="text" />

            <label htmlFor="">Model: </label>
            <input type="text" />

            <label htmlFor="">Color: </label>
            <input type="text" />

            <label htmlFor="">Acoustic or Electric: </label>
            <input type="text" />

            <label htmlFor="">Number of Strings: </label>
            <input type="text" />

            <label htmlFor="">Date: </label>
            <input type="text" value={generateCurrentDate()} disabled/>

            <button type="reset">Clear</button>
            <button type="submit">Submit</button>


        </form>
    )
}