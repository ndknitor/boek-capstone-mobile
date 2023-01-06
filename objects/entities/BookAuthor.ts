import { Author } from "./Author";

export interface BookAuthor {
    id: number;
    bookId: number;
    authorId: number;
    author : Author;
}