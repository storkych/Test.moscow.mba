import React, { useEffect, useState } from 'react';
import { fetchPrograms } from './api';
import { Program } from './types';
import ProgramCard from './components/ProgramCard';
import PracticalModules from './components/PracticalModules';
import FinalAssessment from './components/FinalAssessment';
import Footer from './components/Footer.tsx';

function App() {
  const [programs, setPrograms] = useState<Program[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getPrograms = async () => {
      console.log('Fetching programs...');
      try {
        const data = await fetchPrograms();
        console.log('Programs fetched:', data);

        const validPrograms = data.filter(program => {
          try {
            const subjects = program.specializedSubjects;

            if (!Array.isArray(subjects)) {
              console.log(`Program ${program.id} has specializedSubjects that is not an array.`);
              return false;
            }

            if (subjects.length === 0) {
              console.log(`Program ${program.id} has specializedSubjects but it's empty.`);
              return false;
            }

            return subjects.some((subject: any) =>
                Array.isArray(subject.skills) &&
                subject.skills.some((skill: any) => typeof skill.string === 'string' && skill.string.trim())
            );
          } catch (error) {
            console.error(`Error processing program ${program.id}:`, error);
            return false;
          }
        });

        console.log('Valid programs:', validPrograms);
        setPrograms(validPrograms.slice(0, 5));
        setLoading(false);
      } catch (err) {
        console.error('Failed to fetch programs:', err);
        setError('Failed to fetch programs');
        setLoading(false);
      }
    };

    getPrograms();
  }, []);

  if (loading) {
    console.log('Loading...');
    return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-2xl font-bold">Загрузка...</div>
        </div>
    );
  }

  if (error) {
    console.log('Error occurred:', error);
    return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-2xl font-bold text-red-500">{error}</div>
        </div>
    );
  }

  console.log('Programs to display:', programs);

  return (
      <div className="min-h-screen font-styrene">
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <h1 className="text-2xl md:text-3xl font-bold mb-20 text-center">Специализированные дисциплины</h1>

          {programs.length === 0 ? (
              <div className="text-xl text-center text-gray-500">Нет доступных программ для отображения</div>
          ) : (
              programs.map((program) => (
                  <ProgramCard key={program.id} program={program} />
              ))
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
            <PracticalModules />
            <FinalAssessment />
          </div>
        </div>

        <Footer />
      </div>
  );
}

export default App;
