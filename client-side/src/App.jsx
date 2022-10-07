import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import { Home, GuitarsInventory } from './pages'


export const App = () => { 
    return (
        <BrowserRouter>
        
            <Routes>

                <Route path='/' element={<Home/>}></Route>
                <Route path='/guitars' element={<GuitarsInventory/>}></Route>

            </Routes>
        
        </BrowserRouter>
    )
} 