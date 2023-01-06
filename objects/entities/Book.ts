import { BookAuthor } from "./BookAuthor";
import { Format } from "./Format";
import { Genre } from "./Genre";
import { Issuer } from "./Issuer";
import { Publisher } from "./Publisher";

export interface Book {
    id: number;
    code: string;
    genreId: number;
    publisherId: number;
    issuerId: string,
    isbn10?: string;
    isbn13?: string;
    name: string;
    translator?: string;
    imageUrl: string;
    coverPrice: number,
    description: string,
    language: "EN" | "VN",
    size: string,
    releasedYear: number,
    page: number;
    isSeries: boolean;
    isCombo: boolean;
    status: number;
    statusName: string;
    genre: Genre;
    issuer: Issuer;
    publisher?: Publisher;
    bookAuthors: BookAuthor[];
    formats: Format[];
}