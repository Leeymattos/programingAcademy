import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './pages/home'
import Book from './pages/profile/book'
import Github from './pages/profile/github'
import Profile from './pages/profile/homeProfile'
import Videos from './pages/profile/videos/videosHome'
import ModuleOne from './pages/profile/videos/module1'
import Moduletwoo from './pages/profile/videos/module2'
import ModuleThree from './pages/profile/videos/module3'
import Register from './pages/register'
import { AuthProvider } from './contexts/AuthContext'
import Admin from './pages/admin'

export default function RoutesApp() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/profile/github' element={<Github />} />
                    <Route path='/profile/book' element={<Book />} />
                    <Route path='/profile/videos' element={<Videos />} />
                    <Route path='/profile/videos/module1' element={<ModuleOne />} />
                    <Route path='/admin' element={<Admin />} />
                    <Route path='/profile/videos/module2' element={<Moduletwoo />} />
                    <Route path='/profile/videos/module3' element={<ModuleThree />} />

                </Routes>
            </BrowserRouter>
        </AuthProvider>

    )
}