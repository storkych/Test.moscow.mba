import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { Program } from '../types';

interface ProgramCardProps {
  program: Program;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ program }) => {
  const [expandedModule1, setExpandedModule1] = useState(false);
  const [expandedModule2, setExpandedModule2] = useState(false);

  const specializedSubjects = program.specializedSubjects;

  const allDisciplines = Array.isArray(specializedSubjects)
      ? specializedSubjects.flatMap((subject: any) =>
          subject.skills?.map((skill: any) => skill.title) || []
      ).filter(Boolean)
      : [];

  const halfLength = Math.ceil(allDisciplines.length / 2);
  const module1 = allDisciplines.slice(0, halfLength);
  const module2 = allDisciplines.slice(halfLength);

  return (
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-4">{program.title}</h2>

        {/* Desktop view */}
        <div className="hidden md:flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <div className="border-t-2 border-red-500 w-24 mb-4"></div>
            <div className="flex flex-col md:flex-row">
              <h3 className="text-xl font-medium mb-6 md:mb-0 md:mr-8 md:w-32">1 модуль</h3>
              <ul className="space-y-3 flex-1">
                {module1.map((discipline: string, index: number) => (
                    <li key={`module1-${index}`} className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>{discipline}</span>
                    </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex-1">
            <div className="border-t-2 border-red-500 w-24 mb-4"></div>
            <div className="flex flex-col md:flex-row">
              <h3 className="text-xl font-medium mb-6 md:mb-0 md:mr-8 md:w-32">2 модуль</h3>
              <ul className="space-y-3 flex-1">
                {module2.map((discipline: string, index: number) => (
                    <li key={`module2-${index}`} className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>{discipline}</span>
                    </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Mobile view (collapsible) */}
        <div className="md:hidden">
          <div className="mb-4">
            <div
                className={`flex items-center p-4 ${expandedModule1 ? 'bg-red-500 text-white' : 'bg-gray-100'}`}
                onClick={() => setExpandedModule1(!expandedModule1)}
            >
              {expandedModule1 ? (
                  <Minus className="text-white mr-2" size={24} />
              ) : (
                  <Plus className="text-gray-400 mr-2" size={24} />
              )}
              <h3 className="text-xl font-medium">1 модуль</h3>
            </div>

            {expandedModule1 && (
                <ul className="space-y-3 mt-4">
                  {module1.map((discipline: string, index: number) => (
                      <li key={`mobile-module1-${index}`} className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        <span>{discipline}</span>
                      </li>
                  ))}
                </ul>
            )}
          </div>

          <div>
            <div
                className={`flex items-center p-4 ${expandedModule2 ? 'bg-red-500 text-white' : 'bg-gray-100'}`}
                onClick={() => setExpandedModule2(!expandedModule2)}
            >
              {expandedModule2 ? (
                  <Minus className="text-white mr-2" size={24} />
              ) : (
                  <Plus className="text-gray-400 mr-2" size={24} />
              )}
              <h3 className="text-xl font-medium">2 модуль</h3>
            </div>

            {expandedModule2 && (
                <ul className="space-y-3 mt-4">
                  {module2.map((discipline: string, index: number) => (
                      <li key={`mobile-module2-${index}`} className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        <span>{discipline}</span>
                      </li>
                  ))}
                </ul>
            )}
          </div>
        </div>
      </div>
  );
};

export default ProgramCard;