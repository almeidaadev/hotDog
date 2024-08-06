const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between">
                    <div className="w-full md:w-1/3 mb-4 md:mb-0">
                        <h3 className="text-xl font-bold mb-2">
                            Dogão Delícia
                        </h3>
                        <p className="text-gray-400">
                            O melhor cachorro-quente da cidade! Estamos aqui
                            para servir você com qualidade e sabor.
                        </p>
                    </div>
                    <div className="w-full md:w-1/3 mb-4 md:mb-0">
                        <h3 className="text-xl font-bold mb-2">
                            Links Rápidos
                        </h3>
                        <ul>
                            <li>
                                <a
                                    href="#home"
                                    className="text-gray-300 hover:text-gray-100"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#menu"
                                    className="text-gray-300 hover:text-gray-100"
                                >
                                    Cardápio
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#about"
                                    className="text-gray-300 hover:text-gray-100"
                                >
                                    Sobre Nós
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contact"
                                    className="text-gray-300 hover:text-gray-100"
                                >
                                    Contato
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/3">
                        <h3 className="text-xl font-bold mb-2">Contato</h3>
                        <ul>
                            <li className="text-gray-300">
                                📍 Rua Exemplo, 123 - Centro, Cidade
                            </li>
                            <li className="text-gray-300">📞 (11) 1234-5678</li>
                            <li className="text-gray-300">
                                ✉️ contato@dogaodelicia.com.br
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="text-center mt-8">
                    <p className="text-gray-500 text-sm">
                        &copy; {new Date().getFullYear()} Dogão Delícia. Todos
                        os direitos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
