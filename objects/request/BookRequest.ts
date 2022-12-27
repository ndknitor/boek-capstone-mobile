import { Max } from "class-validator";
import ViewModel from "../../libs/ViewModel";

export default class BookRequest extends ViewModel {
    @Max(10)
    bookId: number = 0;
}