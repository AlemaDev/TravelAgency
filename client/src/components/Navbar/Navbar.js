import "./navbar.css";
import { Link } from "react-router-dom";
import { alojamientos, vuelos, paquetes, ofertas, actividades, autos, asistencias, traslados } from '../../constants/itemsTypes';


const Navbar = () => {
    return (
        <nav className="mainHeader">
            <div className="settings-container">
                <div className="header-logo">
                    <img className="logo-image" src={require('./images/logo.png')} alt={"a logo portraying an aeroplane"} />
                    <Link to={`/`}>
                        <h2 className="header-name">TravelAgency</h2>
                    </Link>
                </div>
                <div className="gestion-container">
                    <ul className="gestion">
                        <Link to={`/Auth`}><li>Iniciar Sesion</li></Link>
                        <Link to={`/`}><li>Mis Viajes</li></Link>
                        <Link to={`/`}><li>Ayuda</li></Link>
                    </ul>
                </div>
            </div>
            <div className="products-container">
                <ul className="products-list">
                    <Link to={`/${alojamientos}`}><li>Alojamientos</li></Link>
                    <Link to={`/${vuelos}`}><li>Vuelos</li></Link>
                    <Link to={`/${paquetes}`}><li>Paquetes</li></Link>
                    <Link to={`/${ofertas}`}><li>Ofertas</li></Link>
                    <Link to={`/${actividades}`}><li>Actividades</li></Link>
                    <Link to={`/${autos}`}><li>Autos</li></Link>
                    <Link to={`/${asistencias}`}><li>Asistencias</li></Link>
                    <Link to={`/${traslados}`}><li>Traslados</li></Link>
                    <Link to={`/add`}><li>Agregar producto</li></Link>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;