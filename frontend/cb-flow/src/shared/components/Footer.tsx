import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#020F1E] text-white py-12 px-8 mt-16">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    {/* Información de la empresa */}
                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="text-2xl font-bold text-white mb-2">
                            FlowFi Connect
                        </h3>
                        <p className="text-gray-300 text-center md:text-left">
                            Made by CB Labs.
                        </p>
                    </div>

                    {/* Redes sociales */}
                    <div className="flex flex-row gap-6 items-center">
                        <a
                            href="#"
                            className="text-gray-300 hover:text-[#3E5EF5] transition-colors duration-200"
                            aria-label="Facebook"
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                        </a>
                        <a
                            href="#"
                            className="text-gray-300 hover:text-[#3E5EF5] transition-colors duration-200"
                            aria-label="Twitter"
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-8 pt-6">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-sm">
                            © 2025 CB Flow Connect. Todos los derechos reservados.
                        </p>

                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
