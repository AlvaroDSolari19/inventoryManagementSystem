import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import { Home, GuitarsInventory } from './pages'
import { GuitarForm } from './components/Form/GuitarForm'


export const App = () => { 
    return (
        <BrowserRouter>
        
            <Routes>

                <Route path='/' element={<Home/>}></Route>
                <Route path='/guitars' element={<GuitarsInventory/>}></Route>
                <Route path='/guitars/new' element={<GuitarForm/>}></Route>

            </Routes>
        
        </BrowserRouter>
    )
} 