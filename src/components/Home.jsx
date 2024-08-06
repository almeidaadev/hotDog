const Home = () => {
    return (
        <div className="bg-gray-50">
            {/* Hero Section */}
            <section className="bg-[url('/public/bg.png')] bg-no-repeat text-gray-800 text-center py-16 md:py-32 h-screen flex items-end justify-center">
                {/* <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Bem-vindo ao Dogão Delícia!
                    </h1>
                    <p className="text-lg mb-8">
                        O melhor cachorro-quente da cidade, feito com amor e
                        ingredientes frescos.
                    </p>
                    <a
                        href="#menu"
                        className="bg-gray-800 text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-700 transition duration-300"
                    >
                        Confira Nosso Cardápio
                    </a>
                </div> */}

                <button className="text-center bg-red-950 text-white rounded-[16px] py-[16px] px-[64px] m-[220px]">Consulte o Cardapio</button>
            </section>

            {/* Sobre Nós */}
            <section className="container mx-auto px-4 py-16">
                <h2 className="text-3xl font-bold mb-6 text-center text-yellow-600">
                    Sobre Nós
                </h2>
                <p className="text-lg text-center text-gray-700">
                    No Dogão Delícia, nossa missão é oferecer o melhor
                    cachorro-quente da cidade. Usamos ingredientes de alta
                    qualidade e receitas tradicionais para criar um lanche
                    delicioso que vai te conquistar.
                </p>
            </section>

            {/* Cardápio */}
            <section className="bg-gray-200 py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-6 text-center text-yellow-600">
                        Destaques do Cardápio
                    </h2>
                    <div className="flex flex-wrap justify-center">
                        <div className="bg-white p-6 rounded-lg shadow-lg mx-4 mb-4 w-full md:w-1/3 transition-transform transform hover:scale-105 hover:shadow-xl hover:border-gray-300 border border-gray-200">
                            <h3 className="text-2xl font-bold mb-2 text-yellow-600">
                                Cachorro-Quente Tradicional
                            </h3>
                            <p className="text-lg mb-4 text-gray-700">
                                Salsicha suculenta com molho especial e
                                coberturas frescas.
                            </p>
                            <span className="text-xl font-bold text-yellow-600">
                                R$ 10,00
                            </span>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg mx-4 mb-4 w-full md:w-1/3 transition-transform transform hover:scale-105 hover:shadow-xl hover:border-gray-300 border border-gray-200">
                            <h3 className="text-2xl font-bold mb-2 text-yellow-600">
                                Cachorro-Quente Gourmet
                            </h3>
                            <p className="text-lg mb-4 text-gray-700">
                                Salsicha premium com queijos variados e
                                ingredientes sofisticados.
                            </p>
                            <span className="text-xl font-bold text-yellow-600">
                                R$ 15,00
                            </span>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg mx-4 mb-4 w-full md:w-1/3 transition-transform transform hover:scale-105 hover:shadow-xl hover:border-gray-300 border border-gray-200">
                            <h3 className="text-2xl font-bold mb-2 text-yellow-600">
                                Cachorro-Quente Vegano
                            </h3>
                            <p className="text-lg mb-4 text-gray-700">
                                Salsicha vegana com molho especial e vegetais
                                frescos.
                            </p>
                            <span className="text-xl font-bold text-yellow-600">
                                R$ 12,00
                            </span>
                        </div>
                    </div>
                    <div className="text-center mt-8">
                        <a
                            href="#menu"
                            className="bg-gray-800 text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-700 transition duration-300"
                        >
                            Veja o Cardápio Completo
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
