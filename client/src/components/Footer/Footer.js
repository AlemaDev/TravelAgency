import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-gray-200 w-full rounded-sm bottom-auto ">
            <div className=" flex justify-between ">
                <div className="flex-col">
                    <ul>
                        <li className="font-bold">Travel-Agency</li>
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
                <div className="flex-col">
                    <ul>
                        <li className="font-bold">Mas Informacion</li>
                        <li>
                            <a href="/">Terminos y Condiciones De Servicio</a>
                        </li>
                        <li>
                            <a href="/">Politicas De Privacidad</a>
                        </li>
                    </ul>
                </div>
                <div className="flex-col">
                    <p className="font-bold">Navegar En El Sitio De:</p>
                    <select id="select-country">
                        <option value="argentina">Argentina</option>
                        <option value="corea-norte">Corea del Norte</option>
                        <option value="estados-unidos">Estados Unidos</option>
                        <option value="uruguay" defaultValue>Uruguay</option>
                    </select>
                </div>
            </div>
            <div className="flex justify-center font-bold">
                <p>2022a.c. - 2022, Travel-Agency.com AleMaDev S.A. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;