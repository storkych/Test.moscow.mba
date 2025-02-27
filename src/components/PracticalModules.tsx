import React from 'react';

const PracticalModules: React.FC = () => {
    return (
        <div
            className="relative bg-[#FF3535] text-white p-8 flex-grow min-h-full mb-8"
            style={{ clipPath: 'polygon(0 0, calc(100% - 43px) 0, 100% 43px, 100% 100%, 0 100%)' }}
        >
            <h2 className="text-2xl font-bold mb-4">Практические модули</h2>
            <p> Работа над собственными проектами: практика групповых взаимодействий, кейс-методы, эссе </p>
            <div className="absolute top-0 right-0 w-[43px] h-[43px] bg-[#CD1800]"></div>
        </div>
    );
};

export default PracticalModules;