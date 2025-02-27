import { Program } from './types';

export async function fetchPrograms(): Promise<Program[]> {
  try {
    const response = await fetch('https://api.moscow.mba/products');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching programs:', error);
    return [];
  }
}