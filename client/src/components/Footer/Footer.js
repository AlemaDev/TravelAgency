import './footer.css';

const Footer = () => {
    return (
        <footer className="mainFooter">
            <div className="items-footer">
                <div className="footer-container">
                    <ul className="items-footbar">
                        <li className="first-item-list">Travel-Agency</li>
                        <li>
                            <a href="/">Acerca De La Empresa</a>
                        </li>
                        <li>
                            <a href="/">Trabaja Con Nosotros</a>
                        </li>
                        <li>
                            <a href="/">Informacion De Contacto</a>
                        </li>
                    </ul>
                </div>
                <div className="footer-container">
                    <ul className="items-footbar">
                        <li className="first-item-list">Mas Informacion</li>
                        <li>
                            <a href="/">Terminos y Condiciones De Servicio</a>
                        </li>
                        <li>
                            <a href="/">Politicas De Privacidad</a>
                        </li>
                    </ul>
                </div>
                <div className="footer-selector">
                    <p className="first-item-list">Navegar En El Sitio De:</p>
                    <select id="select-country">
                        <option value="argentina" defaultValue>Argentina</option>
                        <option value="corea-norte">Corea del Norte</option>
                        <option value="estados-unidos">Estados Unidos</option>
                        <option value="uruguay">Uruguay</option>
                    </select>
                </div>
            </div>
            <div className="copyright">
                <p>2022a.c. - 2022, Travel-Agency.com AleMaDev S.A. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;