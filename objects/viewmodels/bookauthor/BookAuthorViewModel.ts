import { AuthorViewModel } from "../authors/AuthorViewModel";

export interface BookAuthorViewModel {
    id?: number;
    bookId?: number;
    authorId?: number;
    author: AuthorViewModel;
}