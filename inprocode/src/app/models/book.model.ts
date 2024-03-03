// src/app/models/book.model.ts
export interface Book {
    id?: number;
    title: string;
    year: number;
    user_id?: number; // Asume que los libros pueden estar asociados a un usuario
  }
  