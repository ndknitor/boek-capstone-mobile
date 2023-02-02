import { BookAuthorViewModel } from "../Bookauthor/BookAuthorViewModel";
import { ParentBookItemViewModel } from "../BookItems/ParentBookItemViewModel";
import { GenreViewModel } from "../Genres/GenreViewModel";
import { PublisherViewModel } from "../Publishers/PublisherViewModel";
import { IssuerViewModel } from "../Users/issuers/IssuerViewModel";

export interface BookViewModel {
    id?: number;
    code: string;
    genreId?: number
    publisherId?: number;
    issuerId?: string;
    isbn10: string;
    isbn13: string;
    name: string;
    translator?: string;
    imageUrl?: string;
    coverPrice?: number;
    description?: string;
    language?: string;
    size?: string;
    releasedYear?: number;
    page?: number;
    isSeries?: boolean;
    pdfExtraPrice?: number;
    pdfTrialUrl?: string;
    audioExtraPrice?: number;
    audioTrialUrl?: string;
    status?: number;
    statusName: string;
    fullPdfAndAudio: boolean;
    onlyPdf: boolean;
    onlyAudio: boolean;
    genre: GenreViewModel;
    issuer: IssuerViewModel;
    publisher?: PublisherViewModel;
    bookAuthors: BookAuthorViewModel[];
    bookItems: ParentBookItemViewModel[];
}