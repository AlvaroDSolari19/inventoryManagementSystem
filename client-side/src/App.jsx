import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import { Home, GuitarsInventory, NewGuitar, UpdateGuitar } from './pages'
import './index.css'

export const App = () => { 
    return (
        <BrowserRouter>
        
            <Routes>

                <Route path='/' element={<Home/>}></Route>
                <Route path='/guitars' element={<GuitarsInventory/>}></Route>
                <Route path='/guitars/new' element={<NewGuitar/>}></Route>
                <Route path='/guitars/edit/:ID' element={<UpdateGuitar />}></Route>

            </Routes>
        
        </BrowserRouter>
    )
} 