import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './pages/home'
import Book from './pages/profile/book'
import Github from './pages/profile/github'
import Profile from './pages/profile/homeProfile'
import Videos from './pages/profile/videos'
import Register from './pages/register'


export default function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/register' element={<Register />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/profile/github' element={<Github />} />
                <Route path='/profile/book' element={<Book />} />
                <Route path='/profile/videos' element={<Videos />} />
            </Routes>
        </BrowserRouter>

    )
}