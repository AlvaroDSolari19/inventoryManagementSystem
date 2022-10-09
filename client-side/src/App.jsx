import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import { Home, GuitarsInventory } from './pages'
import { GuitarForm } from './components/Form/GuitarForm'
import { UpdateForm } from './components/Form/UpdateForm'


export const App = () => { 
    return (
        <BrowserRouter>
        
            <Routes>

                <Route path='/' element={<Home/>}></Route>
                <Route path='/guitars' element={<GuitarsInventory/>}></Route>
                <Route path='/guitars/new' element={<GuitarForm/>}></Route>
                <Route path='/guitars/edit/:ID' element={<UpdateForm />}></Route>

            </Routes>
        
        </BrowserRouter>
    )
} 