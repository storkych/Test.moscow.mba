import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white py-4 mt-12">
            <div className="text-sm text-gray-500 flex justify-center items-center gap-2">
                <span>by storkych</span>
                <a
                    href="https://github.com/storkych"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-white"
                >
                    <FaGithub className="w-6 h-6 transition-all duration-200 hover:text-white" />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
