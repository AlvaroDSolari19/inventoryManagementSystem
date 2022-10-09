import axios from 'axios'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'; 

export const UpdateForm = () => { 

    const currentGuitar = useLocation().state; 
    const navigateTo = useNavigate(); 
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
        navigateTo('/guitars');
    }


    const handleSubmit = async (someEvent) => { 
        someEvent.preventDefault(); 
    
        await axios.put('http://localhost:9000/' + currentGuitar._id, {
            brandName: guitarInformation.brandName, 
            guitarModel: guitarInformation.guitarModel, 
            guitarColor: guitarInformation.guitarColor, 
            isAcoustic: guitarInformation.isAcoustic, 
            isElectric: guitarInformation.isElectric, 
            numberOfStrings: guitarInformation.numberOfStrings, 
            dateAdded: guitarInformation.dateAdded
        });

        navigateTo('/guitars');
    }
    
    return (
        <form action="" onSubmit={handleSubmit}>

            <label htmlFor="guitarBrand">Brand: </label>
            <input type="text" id="guitarBrand" value={guitarInformation.guitarBrand} onChange={ (someEvent) => setGuitarInformation({...guitarInformation, guitarBrand: someEvent.target.value})}/>

            <label htmlFor="guitarModel">Model: </label>
            <input type="text" id="guitarModel" value={guitarInformation.guitarModel} onChange={ (someEvent) => setGuitarInformation({...guitarInformation, guitarModel: someEvent.target.value})}/>

            <label htmlFor="guitarColor">Color: </label>
            <input type="text" id="guitarColor" value={guitarInformation.guitarColor} onChange={ (someEvent) => setGuitarInformation({...guitarInformation, guitarColor: someEvent.target.value})}/>

            <label htmlFor="isAcoustic">Acoustic? </label>
            <select name="" id="isAcoustic" onChange={ (someEvent) => setGuitarInformation({...guitarInformation, isAcoustic: someEvent.target.value})}>
                <option value={guitarInformation.isAcoustic}>{guitarInformation.isAcoustic ? 'Yes' : 'No'}</option>
                <option value={!guitarInformation.isAcoustic}>{!guitarInformation.isAcoustic ? 'Yes' : 'No'}</option>
            </select>

            <label htmlFor="isElectric">Electric? </label>
            <select name="" id="isElectric" onChange={ (someEvent) => setGuitarInformation({...guitarInformation, isElectric: someEvent.target.value})}>
                <option value={guitarInformation.isElectric}>{guitarInformation.isElectric ? 'Yes' : 'No'}</option>
                <option value={!guitarInformation.isElectric}>{!guitarInformation.isElectric ? 'Yes' : 'No'}</option>
            </select>

            <label htmlFor="numberOfStrings">Number of Strings: </label>
            <input type="number" id="numberOfStrings" value={guitarInformation.numberOfStrings} onChange={ (someEvent) => setGuitarInformation({...guitarInformation, numberOfStrings: someEvent.target.value})}/>

            <label htmlFor="dateAdded">Date Added: </label>
            <input type="text" id="dateAdded" value={guitarInformation.dateAdded} disabled/>

            <button type="button" onClick={handleCancel}>Cancel</button>
            <button type="submit">Update</button>

        </form>
    )
}