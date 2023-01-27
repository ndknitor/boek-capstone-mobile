import { BasicBookViewModel } from "../books/BasicBookViewModel";

export interface AuthorBooksViewModel {
    id?: number;
    name: string;
    imageUrl: string;
    description: string;
    books: BasicBookViewModel[];
}