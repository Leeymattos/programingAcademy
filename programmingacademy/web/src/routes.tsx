import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './pages/home'
import Register from './pages/register'


export default function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/register' element={<Register />} />
            </Routes>
        </BrowserRouter>

    )
}