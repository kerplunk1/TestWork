import logo from '/logo.ico'
import './Header.css'

const API_URL = import.meta.env.VITE_API_URL;

export default function Header() {
    return (
        <header>
            <div className="logo">
                <a className='logo' href="">
                    <img src={logo} alt="logo" />
                    <div className="logo-name">green-api-testwork</div>
                </a>
            </div>
            <div className="docs">
                <a href={`${API_URL}/docs`} target="_blank">API</a>
            </div>
        </header>
    );
}
