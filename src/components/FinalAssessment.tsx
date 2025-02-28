import React from 'react';

const FinalAssessment: React.FC = () => {
  return (
    <div className="font-styrene bg-[#2D2C2A] text-white p-8 md:min-h-full">
      <h2 className="text-2xl font-bold mb-4">Итоговая аттестация</h2>
      <ul className="space-y-3">
        <li className="flex items-start">
          <span className="text-red-500 mr-2">•</span>
          <span>Бизнес-проектирование (подготовка итоговой аттестационной работы, консультирование по бизнес-проектированию)</span>
        </li>
        <li className="flex items-start">
          <span className="text-red-500 mr-2">•</span>
          <span>Защита итоговой аттестационной работы</span>
        </li>
      </ul>
    </div>
  );
};

export default FinalAssessment;