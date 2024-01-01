import {Link, Outlet} from 'react-router-dom'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Layout() {
return (
<>
    <header>
        <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <FontAwesomeIcon className='fill-current h-8 w-8 mr-2'icon={faGraduationCap} />
                <span className="font-semibold text-xl tracking-tight">SmartSchool</span>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <ul className="text-sm lg:flex-grow">
                    <li href="#" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li href="#" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                        <Link to={'/Login'}>Login</Link>
                    </li>
                    <li href="#" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                        <Link to={'/SignUp'}>SignUp</Link>
                    </li>
                    <li href="#" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                        <Link to={'/Users'}>Users</Link>
                    </li>
                </ul>
                <div>
                    <li href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
                        Dark Mode
                    </li>
                </div>
            </div>
        </nav>
    </header>
    <main className="container mx-auto mt-4 p-4">
        <Outlet />
    </main>
    <footer className="bg-teal-500 p-4 text-white text-center">
        <p className="text-sm">&copy; 2024 SmartSchool. All rights reserved.</p>
    </footer>

</>
)
}

export default Layout
