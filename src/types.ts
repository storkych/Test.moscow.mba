export interface Skill {
  string: string;
}

export interface SpecializedSubject {
  skills: Skill[];
  [key: string]: any;
}

export interface Program {
  id: number;
  title: string;
  specializedSubjects: string;
  [key: string]: any;
}