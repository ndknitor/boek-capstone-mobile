import { BasicBookViewModel } from "../books/BasicBookViewModel";

export interface ParentBookItemViewModel {
    id: number;
    parentBookId?: number;
    bookId?: number;
    displayIndex: number;
    book: BasicBookViewModel;
}