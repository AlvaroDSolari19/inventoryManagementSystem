import { BrowserRouter, Routes, Route } from 'react-router-dom' 

export const App = () => { 
    return (
        <BrowserRouter>
        
            <Routes>

                <Route path='/'></Route>
                <Route path='/Guitars'></Route>

            </Routes>
        
        </BrowserRouter>
    )
}