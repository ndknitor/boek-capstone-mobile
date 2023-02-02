import { Book } from "../objects/entities/Book";
import { BookViewModel } from "../objects/viewmodels/Books/BookViewModel";
import { StaffCampaignMobilesViewModel } from "../objects/viewmodels/Campaigns/StaffCampaignMobilesViewModel";
import { IssuerViewModel } from "../objects/viewmodels/Users/issuers/IssuerViewModel";
import { range } from "./format";
export const t = range(1, 20);

export const mockBooks: BookViewModel[] = [
    {
        "id": 0,
        "code": "string",
        "genreId": 0,
        "publisherId": 0,
        "issuerId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "isbn10": "string",
        "isbn13": "string",
        "name": "string",
        "translator": "string",
        "imageUrl": "https://th.bing.com/th/id/OIP.iWXhpy2Qtp630wf8zbD1IgHaHa?w=187&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        "coverPrice": 0,
        "description": "string",
        "language": "string",
        "size": "string",
        "releasedYear": 0,
        "page": 0,
        "isSeries": true,
        "pdfExtraPrice": 0,
        "pdfTrialUrl": "string",
        "audioExtraPrice": 0,
        "audioTrialUrl": "string",
        "status": 0,
        "statusName": "string",
        "fullPdfAndAudio": true,
        "onlyPdf": true,
        "onlyAudio": true,
        "genre": {
            "id": 0,
            "parentId": 0,
            "name": "string",
            "displayIndex": 0,
            "status": true,
            "statusName": "string"
        },
        "issuer": {
            "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            "description": "string",
            "user": {
                "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                "code": "string",
                "name": "string",
                "email": "user@example.com",
                "address": "string",
                "phone": "string",
                "roleName": "string",
                "role": 0,
                "status": true,
                "statusName": "string",
                "imageUrl": "string"
            }
        },
        "publisher": {
            "id": 0,
            "code": "string",
            "name": "string",
            "email": "string",
            "address": "string",
            "imageUrl": "string",
            "phone": "string"
        },
        "bookAuthors": [
            {
                "id": 0,
                "bookId": 0,
                "authorId": 0,
                "author": {
                    "id": 0,
                    "name": "string",
                    "imageUrl": "string",
                    "description": "string"
                }
            }
        ],
        "bookItems": [
            {
                "id": 0,
                "parentBookId": 0,
                "bookId": 0,
                "displayIndex": 0,
                "book": {
                    "id": 0,
                    "code": "string",
                    "genreId": 0,
                    "publisherId": 0,
                    "issuerId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                    "isbn10": "string",
                    "isbn13": "string",
                    "name": "string",
                    "translator": "string",
                    "imageUrl": "string",
                    "coverPrice": 0,
                    "description": "string",
                    "language": "string",
                    "size": "string",
                    "releasedYear": 0,
                    "page": 0,
                    "isSeries": true,
                    "pdfExtraPrice": 0,
                    "pdfTrialUrl": "string",
                    "audioExtraPrice": 0,
                    "audioTrialUrl": "string",
                    "status": 0,
                    "statusName": "string",
                    "fullPdfAndAudio": true,
                    "onlyPdf": true,
                    "onlyAudio": true
                }
            }
        ]
    },
    {
        "id": 0,
        "code": "string",
        "genreId": 0,
        "publisherId": 0,
        "issuerId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "isbn10": "string",
        "isbn13": "string",
        "name": "string",
        "translator": "string",
        "imageUrl": "https://th.bing.com/th/id/OIP.iWXhpy2Qtp630wf8zbD1IgHaHa?w=187&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        "coverPrice": 0,
        "description": "string",
        "language": "string",
        "size": "string",
        "releasedYear": 0,
        "page": 0,
        "isSeries": true,
        "pdfExtraPrice": 0,
        "pdfTrialUrl": "string",
        "audioExtraPrice": 0,
        "audioTrialUrl": "string",
        "status": 0,
        "statusName": "string",
        "fullPdfAndAudio": true,
        "onlyPdf": true,
        "onlyAudio": true,
        "genre": {
            "id": 0,
            "parentId": 0,
            "name": "string",
            "displayIndex": 0,
            "status": true,
            "statusName": "string"
        },
        "issuer": {
            "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            "description": "string",
            "user": {
                "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                "code": "string",
                "name": "string",
                "email": "user@example.com",
                "address": "string",
                "phone": "string",
                "roleName": "string",
                "role": 0,
                "status": true,
                "statusName": "string",
                "imageUrl": "string"
            }
        },
        "publisher": {
            "id": 0,
            "code": "string",
            "name": "string",
            "email": "string",
            "address": "string",
            "imageUrl": "string",
            "phone": "string"
        },
        "bookAuthors": [
            {
                "id": 0,
                "bookId": 0,
                "authorId": 0,
                "author": {
                    "id": 0,
                    "name": "string",
                    "imageUrl": "string",
                    "description": "string"
                }
            }
        ],
        "bookItems": [
            {
                "id": 0,
                "parentBookId": 0,
                "bookId": 0,
                "displayIndex": 0,
                "book": {
                    "id": 0,
                    "code": "string",
                    "genreId": 0,
                    "publisherId": 0,
                    "issuerId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                    "isbn10": "string",
                    "isbn13": "string",
                    "name": "string",
                    "translator": "string",
                    "imageUrl": "string",
                    "coverPrice": 0,
                    "description": "string",
                    "language": "string",
                    "size": "string",
                    "releasedYear": 0,
                    "page": 0,
                    "isSeries": true,
                    "pdfExtraPrice": 0,
                    "pdfTrialUrl": "string",
                    "audioExtraPrice": 0,
                    "audioTrialUrl": "string",
                    "status": 0,
                    "statusName": "string",
                    "fullPdfAndAudio": true,
                    "onlyPdf": true,
                    "onlyAudio": true
                }
            }
        ]
    },
    {
        "id": 0,
        "code": "string",
        "genreId": 0,
        "publisherId": 0,
        "issuerId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "isbn10": "string",
        "isbn13": "string",
        "name": "string",
        "translator": "string",
        "imageUrl": "https://th.bing.com/th/id/OIP.iWXhpy2Qtp630wf8zbD1IgHaHa?w=187&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        "coverPrice": 0,
        "description": "string",
        "language": "string",
        "size": "string",
        "releasedYear": 0,
        "page": 0,
        "isSeries": true,
        "pdfExtraPrice": 0,
        "pdfTrialUrl": "string",
        "audioExtraPrice": 0,
        "audioTrialUrl": "string",
        "status": 0,
        "statusName": "string",
        "fullPdfAndAudio": true,
        "onlyPdf": true,
        "onlyAudio": true,
        "genre": {
            "id": 0,
            "parentId": 0,
            "name": "string",
            "displayIndex": 0,
            "status": true,
            "statusName": "string"
        },
        "issuer": {
            "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            "description": "string",
            "user": {
                "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                "code": "string",
                "name": "string",
                "email": "user@example.com",
                "address": "string",
                "phone": "string",
                "roleName": "string",
                "role": 0,
                "status": true,
                "statusName": "string",
                "imageUrl": "string"
            }
        },
        "publisher": {
            "id": 0,
            "code": "string",
            "name": "string",
            "email": "string",
            "address": "string",
            "imageUrl": "string",
            "phone": "string"
        },
        "bookAuthors": [
            {
                "id": 0,
                "bookId": 0,
                "authorId": 0,
                "author": {
                    "id": 0,
                    "name": "string",
                    "imageUrl": "string",
                    "description": "string"
                }
            }
        ],
        "bookItems": [
            {
                "id": 0,
                "parentBookId": 0,
                "bookId": 0,
                "displayIndex": 0,
                "book": {
                    "id": 0,
                    "code": "string",
                    "genreId": 0,
                    "publisherId": 0,
                    "issuerId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                    "isbn10": "string",
                    "isbn13": "string",
                    "name": "string",
                    "translator": "string",
                    "imageUrl": "string",
                    "coverPrice": 0,
                    "description": "string",
                    "language": "string",
                    "size": "string",
                    "releasedYear": 0,
                    "page": 0,
                    "isSeries": true,
                    "pdfExtraPrice": 0,
                    "pdfTrialUrl": "string",
                    "audioExtraPrice": 0,
                    "audioTrialUrl": "string",
                    "status": 0,
                    "statusName": "string",
                    "fullPdfAndAudio": true,
                    "onlyPdf": true,
                    "onlyAudio": true
                }
            }
        ]
    },
    {
        "id": 0,
        "code": "string",
        "genreId": 0,
        "publisherId": 0,
        "issuerId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "isbn10": "string",
        "isbn13": "string",
        "name": "string",
        "translator": "string",
        "imageUrl": "https://th.bing.com/th/id/OIP.iWXhpy2Qtp630wf8zbD1IgHaHa?w=187&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        "coverPrice": 0,
        "description": "string",
        "language": "string",
        "size": "string",
        "releasedYear": 0,
        "page": 0,
        "isSeries": true,
        "pdfExtraPrice": 0,
        "pdfTrialUrl": "string",
        "audioExtraPrice": 0,
        "audioTrialUrl": "string",
        "status": 0,
        "statusName": "string",
        "fullPdfAndAudio": true,
        "onlyPdf": true,
        "onlyAudio": true,
        "genre": {
            "id": 0,
            "parentId": 0,
            "name": "string",
            "displayIndex": 0,
            "status": true,
            "statusName": "string"
        },
        "issuer": {
            "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            "description": "string",
            "user": {
                "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                "code": "string",
                "name": "string",
                "email": "user@example.com",
                "address": "string",
                "phone": "string",
                "roleName": "string",
                "role": 0,
                "status": true,
                "statusName": "string",
                "imageUrl": "string"
            }
        },
        "publisher": {
            "id": 0,
            "code": "string",
            "name": "string",
            "email": "string",
            "address": "string",
            "imageUrl": "string",
            "phone": "string"
        },
        "bookAuthors": [
            {
                "id": 0,
                "bookId": 0,
                "authorId": 0,
                "author": {
                    "id": 0,
                    "name": "string",
                    "imageUrl": "string",
                    "description": "string"
                }
            }
        ],
        "bookItems": [
            {
                "id": 0,
                "parentBookId": 0,
                "bookId": 0,
                "displayIndex": 0,
                "book": {
                    "id": 0,
                    "code": "string",
                    "genreId": 0,
                    "publisherId": 0,
                    "issuerId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                    "isbn10": "string",
                    "isbn13": "string",
                    "name": "string",
                    "translator": "string",
                    "imageUrl": "string",
                    "coverPrice": 0,
                    "description": "string",
                    "language": "string",
                    "size": "string",
                    "releasedYear": 0,
                    "page": 0,
                    "isSeries": true,
                    "pdfExtraPrice": 0,
                    "pdfTrialUrl": "string",
                    "audioExtraPrice": 0,
                    "audioTrialUrl": "string",
                    "status": 0,
                    "statusName": "string",
                    "fullPdfAndAudio": true,
                    "onlyPdf": true,
                    "onlyAudio": true
                }
            }
        ]
    },
    {
        "id": 0,
        "code": "string",
        "genreId": 0,
        "publisherId": 0,
        "issuerId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "isbn10": "string",
        "isbn13": "string",
        "name": "string",
        "translator": "string",
        "imageUrl": "https://th.bing.com/th/id/OIP.iWXhpy2Qtp630wf8zbD1IgHaHa?w=187&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        "coverPrice": 0,
        "description": "string",
        "language": "string",
        "size": "string",
        "releasedYear": 0,
        "page": 0,
        "isSeries": true,
        "pdfExtraPrice": 0,
        "pdfTrialUrl": "string",
        "audioExtraPrice": 0,
        "audioTrialUrl": "string",
        "status": 0,
        "statusName": "string",
        "fullPdfAndAudio": true,
        "onlyPdf": true,
        "onlyAudio": true,
        "genre": {
            "id": 0,
            "parentId": 0,
            "name": "string",
            "displayIndex": 0,
            "status": true,
            "statusName": "string"
        },
        "issuer": {
            "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            "description": "string",
            "user": {
                "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                "code": "string",
                "name": "string",
                "email": "user@example.com",
                "address": "string",
                "phone": "string",
                "roleName": "string",
                "role": 0,
                "status": true,
                "statusName": "string",
                "imageUrl": "string"
            }
        },
        "publisher": {
            "id": 0,
            "code": "string",
            "name": "string",
            "email": "string",
            "address": "string",
            "imageUrl": "string",
            "phone": "string"
        },
        "bookAuthors": [
            {
                "id": 0,
                "bookId": 0,
                "authorId": 0,
                "author": {
                    "id": 0,
                    "name": "string",
                    "imageUrl": "string",
                    "description": "string"
                }
            }
        ],
        "bookItems": [
            {
                "id": 0,
                "parentBookId": 0,
                "bookId": 0,
                "displayIndex": 0,
                "book": {
                    "id": 0,
                    "code": "string",
                    "genreId": 0,
                    "publisherId": 0,
                    "issuerId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                    "isbn10": "string",
                    "isbn13": "string",
                    "name": "string",
                    "translator": "string",
                    "imageUrl": "string",
                    "coverPrice": 0,
                    "description": "string",
                    "language": "string",
                    "size": "string",
                    "releasedYear": 0,
                    "page": 0,
                    "isSeries": true,
                    "pdfExtraPrice": 0,
                    "pdfTrialUrl": "string",
                    "audioExtraPrice": 0,
                    "audioTrialUrl": "string",
                    "status": 0,
                    "statusName": "string",
                    "fullPdfAndAudio": true,
                    "onlyPdf": true,
                    "onlyAudio": true
                }
            }
        ]
    },
    {
        "id": 0,
        "code": "string",
        "genreId": 0,
        "publisherId": 0,
        "issuerId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "isbn10": "string",
        "isbn13": "string",
        "name": "string",
        "translator": "string",
        "imageUrl": "https://th.bing.com/th/id/OIP.iWXhpy2Qtp630wf8zbD1IgHaHa?w=187&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        "coverPrice": 0,
        "description": "string",
        "language": "string",
        "size": "string",
        "releasedYear": 0,
        "page": 0,
        "isSeries": true,
        "pdfExtraPrice": 0,
        "pdfTrialUrl": "string",
        "audioExtraPrice": 0,
        "audioTrialUrl": "string",
        "status": 0,
        "statusName": "string",
        "fullPdfAndAudio": true,
        "onlyPdf": true,
        "onlyAudio": true,
        "genre": {
            "id": 0,
            "parentId": 0,
            "name": "string",
            "displayIndex": 0,
            "status": true,
            "statusName": "string"
        },
        "issuer": {
            "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            "description": "string",
            "user": {
                "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                "code": "string",
                "name": "string",
                "email": "user@example.com",
                "address": "string",
                "phone": "string",
                "roleName": "string",
                "role": 0,
                "status": true,
                "statusName": "string",
                "imageUrl": "string"
            }
        },
        "publisher": {
            "id": 0,
            "code": "string",
            "name": "string",
            "email": "string",
            "address": "string",
            "imageUrl": "string",
            "phone": "string"
        },
        "bookAuthors": [
            {
                "id": 0,
                "bookId": 0,
                "authorId": 0,
                "author": {
                    "id": 0,
                    "name": "string",
                    "imageUrl": "string",
                    "description": "string"
                }
            }
        ],
        "bookItems": [
            {
                "id": 0,
                "parentBookId": 0,
                "bookId": 0,
                "displayIndex": 0,
                "book": {
                    "id": 0,
                    "code": "string",
                    "genreId": 0,
                    "publisherId": 0,
                    "issuerId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                    "isbn10": "string",
                    "isbn13": "string",
                    "name": "string",
                    "translator": "string",
                    "imageUrl": "string",
                    "coverPrice": 0,
                    "description": "string",
                    "language": "string",
                    "size": "string",
                    "releasedYear": 0,
                    "page": 0,
                    "isSeries": true,
                    "pdfExtraPrice": 0,
                    "pdfTrialUrl": "string",
                    "audioExtraPrice": 0,
                    "audioTrialUrl": "string",
                    "status": 0,
                    "statusName": "string",
                    "fullPdfAndAudio": true,
                    "onlyPdf": true,
                    "onlyAudio": true
                }
            }
        ]
    },
    {
        "id": 0,
        "code": "string",
        "genreId": 0,
        "publisherId": 0,
        "issuerId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "isbn10": "string",
        "isbn13": "string",
        "name": "string",
        "translator": "string",
        "imageUrl": "https://th.bing.com/th/id/OIP.iWXhpy2Qtp630wf8zbD1IgHaHa?w=187&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        "coverPrice": 0,
        "description": "string",
        "language": "string",
        "size": "string",
        "releasedYear": 0,
        "page": 0,
        "isSeries": true,
        "pdfExtraPrice": 0,
        "pdfTrialUrl": "string",
        "audioExtraPrice": 0,
        "audioTrialUrl": "string",
        "status": 0,
        "statusName": "string",
        "fullPdfAndAudio": true,
        "onlyPdf": true,
        "onlyAudio": true,
        "genre": {
            "id": 0,
            "parentId": 0,
            "name": "string",
            "displayIndex": 0,
            "status": true,
            "statusName": "string"
        },
        "issuer": {
            "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            "description": "string",
            "user": {
                "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                "code": "string",
                "name": "string",
                "email": "user@example.com",
                "address": "string",
                "phone": "string",
                "roleName": "string",
                "role": 0,
                "status": true,
                "statusName": "string",
                "imageUrl": "string"
            }
        },
        "publisher": {
            "id": 0,
            "code": "string",
            "name": "string",
            "email": "string",
            "address": "string",
            "imageUrl": "string",
            "phone": "string"
        },
        "bookAuthors": [
            {
                "id": 0,
                "bookId": 0,
                "authorId": 0,
                "author": {
                    "id": 0,
                    "name": "string",
                    "imageUrl": "string",
                    "description": "string"
                }
            }
        ],
        "bookItems": [
            {
                "id": 0,
                "parentBookId": 0,
                "bookId": 0,
                "displayIndex": 0,
                "book": {
                    "id": 0,
                    "code": "string",
                    "genreId": 0,
                    "publisherId": 0,
                    "issuerId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                    "isbn10": "string",
                    "isbn13": "string",
                    "name": "string",
                    "translator": "string",
                    "imageUrl": "string",
                    "coverPrice": 0,
                    "description": "string",
                    "language": "string",
                    "size": "string",
                    "releasedYear": 0,
                    "page": 0,
                    "isSeries": true,
                    "pdfExtraPrice": 0,
                    "pdfTrialUrl": "string",
                    "audioExtraPrice": 0,
                    "audioTrialUrl": "string",
                    "status": 0,
                    "statusName": "string",
                    "fullPdfAndAudio": true,
                    "onlyPdf": true,
                    "onlyAudio": true
                }
            }
        ]
    },
    {
        "id": 0,
        "code": "string",
        "genreId": 0,
        "publisherId": 0,
        "issuerId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "isbn10": "string",
        "isbn13": "string",
        "name": "string",
        "translator": "string",
        "imageUrl": "https://th.bing.com/th/id/OIP.iWXhpy2Qtp630wf8zbD1IgHaHa?w=187&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        "coverPrice": 0,
        "description": "string",
        "language": "string",
        "size": "string",
        "releasedYear": 0,
        "page": 0,
        "isSeries": true,
        "pdfExtraPrice": 0,
        "pdfTrialUrl": "string",
        "audioExtraPrice": 0,
        "audioTrialUrl": "string",
        "status": 0,
        "statusName": "string",
        "fullPdfAndAudio": true,
        "onlyPdf": true,
        "onlyAudio": true,
        "genre": {
            "id": 0,
            "parentId": 0,
            "name": "string",
            "displayIndex": 0,
            "status": true,
            "statusName": "string"
        },
        "issuer": {
            "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            "description": "string",
            "user": {
                "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                "code": "string",
                "name": "string",
                "email": "user@example.com",
                "address": "string",
                "phone": "string",
                "roleName": "string",
                "role": 0,
                "status": true,
                "statusName": "string",
                "imageUrl": "string"
            }
        },
        "publisher": {
            "id": 0,
            "code": "string",
            "name": "string",
            "email": "string",
            "address": "string",
            "imageUrl": "string",
            "phone": "string"
        },
        "bookAuthors": [
            {
                "id": 0,
                "bookId": 0,
                "authorId": 0,
                "author": {
                    "id": 0,
                    "name": "string",
                    "imageUrl": "string",
                    "description": "string"
                }
            }
        ],
        "bookItems": [
            {
                "id": 0,
                "parentBookId": 0,
                "bookId": 0,
                "displayIndex": 0,
                "book": {
                    "id": 0,
                    "code": "string",
                    "genreId": 0,
                    "publisherId": 0,
                    "issuerId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                    "isbn10": "string",
                    "isbn13": "string",
                    "name": "string",
                    "translator": "string",
                    "imageUrl": "string",
                    "coverPrice": 0,
                    "description": "string",
                    "language": "string",
                    "size": "string",
                    "releasedYear": 0,
                    "page": 0,
                    "isSeries": true,
                    "pdfExtraPrice": 0,
                    "pdfTrialUrl": "string",
                    "audioExtraPrice": 0,
                    "audioTrialUrl": "string",
                    "status": 0,
                    "statusName": "string",
                    "fullPdfAndAudio": true,
                    "onlyPdf": true,
                    "onlyAudio": true
                }
            }
        ]
    }
]
export const mockCampaigns = [
    {
        "id": 1,
        "code": "cb6a648f-8f5a-47ce-abe5-a4b56119d9a0",
        "name": "Hội sách xuyên Việt - Lan tỏa tri thức",
        "description": "Từ ngày 14 đến 18-4 tại sân vận động Hoa Lư (quận 1, TP.HCM) diễn ra hội sách với sự tham gia của hơn 30 thương hiệu sách như AZ Việt Nam, Skybooks, Bloom Books… Các đầu sách được giảm từ 30 - 80%.",
        "imageUrl": "https://static.ladipage.net/5dcdfbb918ed7f6153f62d0b/banner-1200x628px-20210414080426.jpg",
        "format": 3,
        "privacy": 1,
        "address": "Sân vận động Hoa Lư (quận 1, TP.HCM)",
        "offlineStatus": 1,
        "startOfflineDate": "2023-01-10T00:00:00",
        "endOfflineDate": "2023-01-15T00:00:00",
        "onlineStatus": 1,
        "startOnlineDate": "2023-01-10T00:00:00",
        "endOnlineDate": "2023-01-13T00:00:00",
        "createdDate": "2022-12-26T00:00:00",
        "updatedDate": null,
        "statusOfflineName": "Chưa bắt đầu",
        "statusOnlineName": "Chưa bắt đầu",
        "formatName": "Trực tiếp và trực tuyến",
        "privacyName": "Công khai",
        "campaignCommissions": [],
        "campaignOrganizations": [],
        "campaignGroups": [],
        "participants": []
    },
    {
        "id": 2,
        "code": "69576c65-6159-4fa0-b854-f5535e5e8e3b",
        "name": "campaign_test_1",
        "description": "campaign_test_desc_1",
        "imageUrl": "https://www.athlosjp.org/wp-content/uploads/2019/11/20191113_155727-Hero.jpg",
        "format": 3,
        "privacy": 1,
        "address": "Hồ Chí Minh",
        "offlineStatus": 4,
        "startOfflineDate": "2023-01-17T00:00:00",
        "endOfflineDate": "2023-01-20T00:00:00",
        "onlineStatus": 4,
        "startOnlineDate": "2023-01-17T00:00:00",
        "endOnlineDate": "2023-01-20T00:00:00",
        "createdDate": "2023-01-04T12:12:56.783",
        "updatedDate": "2023-01-04T16:20:56.147",
        "statusOfflineName": "Hủy hội sách",
        "statusOnlineName": "Hủy hội sách",
        "formatName": "Trực tiếp và trực tuyến",
        "privacyName": "Công khai",
        "campaignCommissions": [
            {
                "id": 1,
                "campaignId": 2,
                "genreId": 1,
                "commission": 10,
                "genre": {
                    "id": 1,
                    "parentId": null,
                    "name": "Văn học",
                    "displayIndex": 1,
                    "status": true,
                    "statusName": "Hoạt động"
                }
            },
            {
                "id": 9,
                "campaignId": 2,
                "genreId": 2,
                "commission": 5,
                "genre": {
                    "id": 2,
                    "parentId": null,
                    "name": "Kinh tế",
                    "displayIndex": 2,
                    "status": true,
                    "statusName": "Hoạt động"
                }
            }
        ],
        "campaignOrganizations": [],
        "campaignGroups": [],
        "participants": []
    },
    {
        "id": 3,
        "code": "b1064e69-ccee-478a-b983-a50e695bc94d",
        "name": "campaign_test_1",
        "description": "campaign_test_desc_1",
        "imageUrl": "https://www.athlosjp.org/wp-content/uploads/2019/11/20191113_155727-Hero.jpg",
        "format": 3,
        "privacy": 1,
        "address": "Hồ Chí Minh",
        "offlineStatus": 1,
        "startOfflineDate": "2023-01-17T00:00:00",
        "endOfflineDate": "2023-01-20T00:00:00",
        "onlineStatus": 1,
        "startOnlineDate": "2023-01-17T00:00:00",
        "endOnlineDate": "2023-01-20T00:00:00",
        "createdDate": "2023-01-05T17:37:23.263",
        "updatedDate": "2023-01-05T17:56:18.41",
        "statusOfflineName": "Chưa bắt đầu",
        "statusOnlineName": "Chưa bắt đầu",
        "formatName": "Trực tiếp và trực tuyến",
        "privacyName": "Công khai",
        "campaignCommissions": [
            {
                "id": 10,
                "campaignId": 3,
                "genreId": 1,
                "commission": 10,
                "genre": {
                    "id": 1,
                    "parentId": null,
                    "name": "Văn học",
                    "displayIndex": 1,
                    "status": true,
                    "statusName": "Hoạt động"
                }
            },
            {
                "id": 11,
                "campaignId": 3,
                "genreId": 2,
                "commission": 5,
                "genre": {
                    "id": 2,
                    "parentId": null,
                    "name": "Kinh tế",
                    "displayIndex": 2,
                    "status": true,
                    "statusName": "Hoạt động"
                }
            }
        ],
        "campaignOrganizations": [
            {
                "id": 4,
                "organizationId": 1,
                "campaignId": 3,
                "organization": {
                    "id": 1,
                    "name": "FPT",
                    "address": "Quận 9",
                    "phone": "0101456789",
                    "imageUrl": "https://i.chungta.vn/2017/12/22/LogoFPT-2017-copy-3042-1513928399.jpg"
                }
            }
        ],
        "campaignGroups": [],
        "participants": []
    },
    {
        "id": 4,
        "code": "1d54b7a9-dc93-46a6-9cfb-fb695a723b62",
        "name": "campaign_test_3",
        "description": "campaign_test_desc_3",
        "imageUrl": "https://www.athlosjp.org/wp-content/uploads/2019/11/20191113_155727-Hero.jpg",
        "format": 3,
        "privacy": 1,
        "address": "Hồ Chí Minh",
        "offlineStatus": 1,
        "startOfflineDate": "2023-01-17T00:00:00",
        "endOfflineDate": "2023-01-20T00:00:00",
        "onlineStatus": 1,
        "startOnlineDate": "2023-01-17T00:00:00",
        "endOnlineDate": "2023-01-20T00:00:00",
        "createdDate": "2023-01-05T23:23:11.963",
        "updatedDate": "2023-01-05T23:39:00.583",
        "statusOfflineName": "Chưa bắt đầu",
        "statusOnlineName": "Chưa bắt đầu",
        "formatName": "Trực tiếp và trực tuyến",
        "privacyName": "Công khai",
        "campaignCommissions": [
            {
                "id": 12,
                "campaignId": 4,
                "genreId": 1,
                "commission": 10,
                "genre": {
                    "id": 1,
                    "parentId": null,
                    "name": "Văn học",
                    "displayIndex": 1,
                    "status": true,
                    "statusName": "Hoạt động"
                }
            },
            {
                "id": 13,
                "campaignId": 4,
                "genreId": 2,
                "commission": 5,
                "genre": {
                    "id": 2,
                    "parentId": null,
                    "name": "Kinh tế",
                    "displayIndex": 2,
                    "status": true,
                    "statusName": "Hoạt động"
                }
            }
        ],
        "campaignOrganizations": [
            {
                "id": 6,
                "organizationId": 1,
                "campaignId": 4,
                "organization": {
                    "id": 1,
                    "name": "FPT",
                    "address": "Quận 9",
                    "phone": "0101456789",
                    "imageUrl": "https://i.chungta.vn/2017/12/22/LogoFPT-2017-copy-3042-1513928399.jpg"
                }
            }
        ],
        "campaignGroups": [
            {
                "id": 2,
                "campaignId": 4,
                "groupId": 1,
                "group": {
                    "id": 1,
                    "name": "Công nghệ",
                    "description": "Nhóm về đề tài công nghệ.",
                    "status": true,
                    "statusName": "Hoạt động"
                }
            }
        ],
        "participants": [
            {
                "id": 3,
                "campaignId": 4,
                "issuerId": "90bbc35c-b655-4ae1-9bf5-7c3c4aba2ee0",
                "createdDate": "2023-01-10T21:47:19.28",
                "updatedDate": "2023-01-10T21:50:28.053",
                "status": 3,
                "statusName": "Chấp nhận duyệt",
                "issuer": {
                    "id": "90bbc35c-b655-4ae1-9bf5-7c3c4aba2ee0",
                    "description": null,
                    "user": {
                        "id": "90bbc35c-b655-4ae1-9bf5-7c3c4aba2ee0",
                        "code": "I307304132",
                        "name": "BIZBOOK",
                        "email": "ngcphungnguyn@gmail.com",
                        "address": "",
                        "phone": "0123456789",
                        "roleName": "Issuer",
                        "role": 2,
                        "status": true,
                        "statusName": "Hoạt động",
                        "imageUrl": "https://lh3.googleusercontent.com/a/ALm5wu0FH3PWgtOhqCmxcKHFIWcYY-6j_C9f7nq9oBcA=s96-c"
                    }
                }
            }
        ]
    },
    {
        "id": 5,
        "code": "0079fbb2-008b-4f3f-b18e-ee1e01e1555c",
        "name": "Campaign_Test_05",
        "description": "Campaign_Test_05_Desc",
        "imageUrl": "https://www.athlosjp.org/wp-content/uploads/2019/11/20191113_155727-Hero.jpg",
        "format": 1,
        "privacy": 1,
        "address": "Hồ Chí Minh",
        "offlineStatus": 1,
        "startOfflineDate": "2023-01-30T00:00:00",
        "endOfflineDate": "2023-02-28T00:00:00",
        "onlineStatus": null,
        "startOnlineDate": null,
        "endOnlineDate": null,
        "createdDate": "2023-01-19T16:46:47.45",
        "updatedDate": null,
        "statusOfflineName": "Chưa bắt đầu",
        "statusOnlineName": null,
        "formatName": "Trực tiếp",
        "privacyName": "Công khai",
        "campaignCommissions": [
            {
                "id": 14,
                "campaignId": 5,
                "genreId": 48,
                "commission": 10,
                "genre": {
                    "id": 48,
                    "parentId": 1,
                    "name": "Tiểu thuyết",
                    "displayIndex": 8,
                    "status": true,
                    "statusName": "Hoạt động"
                }
            }
        ],
        "campaignOrganizations": [
            {
                "id": 7,
                "organizationId": 1,
                "campaignId": 5,
                "organization": {
                    "id": 1,
                    "name": "FPT",
                    "address": "Quận 9",
                    "phone": "0101456789",
                    "imageUrl": "https://i.chungta.vn/2017/12/22/LogoFPT-2017-copy-3042-1513928399.jpg"
                }
            },
            {
                "id": 8,
                "organizationId": 2,
                "campaignId": 5,
                "organization": {
                    "id": 2,
                    "name": "KMS Technology",
                    "address": "2 Tản Viên, Phường 2, Tân Bình, Thành phố Hồ Chí Minh",
                    "phone": "028 3811 9977",
                    "imageUrl": "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/zzp8btlqdchioqnngn9c"
                }
            }
        ],
        "campaignGroups": [],
        "participants": [
            {
                "id": 6,
                "campaignId": 5,
                "issuerId": "90bbc35c-b655-4ae1-9bf5-7c3c4aba2ee0",
                "createdDate": "2023-01-19T16:56:23.71",
                "updatedDate": "2023-01-19T17:01:22.807",
                "status": 5,
                "statusName": "Chấp nhận lời mời",
                "issuer": {
                    "id": "90bbc35c-b655-4ae1-9bf5-7c3c4aba2ee0",
                    "description": null,
                    "user": {
                        "id": "90bbc35c-b655-4ae1-9bf5-7c3c4aba2ee0",
                        "code": "I307304132",
                        "name": "BIZBOOK",
                        "email": "ngcphungnguyn@gmail.com",
                        "address": "",
                        "phone": "0123456789",
                        "roleName": "Issuer",
                        "role": 2,
                        "status": true,
                        "statusName": "Hoạt động",
                        "imageUrl": "https://lh3.googleusercontent.com/a/ALm5wu0FH3PWgtOhqCmxcKHFIWcYY-6j_C9f7nq9oBcA=s96-c"
                    }
                }
            }
        ]
    }
];

export const mockStaffCampaigns: StaffCampaignMobilesViewModel[] = [
    {
        "id": 0,
        "code": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "name": "string",
        "description": "string",
        "imageUrl": "https://static.ladipage.net/5dcdfbb918ed7f6153f62d0b/banner-1200x628px-20210414080426.jpg",
        "format": 0,
        "privacy": 0,
        "address": "string",
        "offlineStatus": 0,
        "startOfflineDate": new Date("2023-01-27T14:39:43.790Z"),
        "endOfflineDate": new Date("2023-01-27T14:39:43.790Z"),
        "onlineStatus": 0,
        "startOnlineDate": new Date("2023-01-27T14:39:43.790Z"),
        "endOnlineDate": new Date("2023-01-27T14:39:43.790Z"),
        "createdDate": new Date("2023-01-27T14:39:43.790Z"),
        "updatedDate": new Date("2023-01-27T14:39:43.790Z"),
        "statusOfflineName": "string",
        "statusOnlineName": "string",
        "formatName": "string",
        "privacyName": "string",
        "issuers": [
            {
                "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                "description": "string",
                "user": {
                    "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                    "code": "string",
                    "name": "string",
                    "email": "user@example.com",
                    "address": "string",
                    "phone": "string",
                    "roleName": "string",
                    "role": 0,
                    "status": true,
                    "statusName": "string",
                    "imageUrl": "string"
                }
            }
        ]
    },
    {
        "id": 0,
        "code": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "name": "string",
        "description": "string",
        "imageUrl": "https://static.ladipage.net/5dcdfbb918ed7f6153f62d0b/banner-1200x628px-20210414080426.jpg",
        "format": 0,
        "privacy": 0,
        "address": "string",
        "offlineStatus": 0,
        "startOfflineDate": new Date("2023-01-27T14:39:43.790Z"),
        "endOfflineDate": new Date("2023-01-27T14:39:43.790Z"),
        "onlineStatus": 0,
        "startOnlineDate": new Date("2023-01-27T14:39:43.790Z"),
        "endOnlineDate": new Date("2023-01-27T14:39:43.790Z"),
        "createdDate": new Date("2023-01-27T14:39:43.790Z"),
        "updatedDate": new Date("2023-01-27T14:39:43.790Z"),
        "statusOfflineName": "string",
        "statusOnlineName": "string",
        "formatName": "string",
        "privacyName": "string",
        "issuers": [
            {
                "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                "description": "string",
                "user": {
                    "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                    "code": "string",
                    "name": "string",
                    "email": "user@example.com",
                    "address": "string",
                    "phone": "string",
                    "roleName": "string",
                    "role": 0,
                    "status": true,
                    "statusName": "string",
                    "imageUrl": "string"
                }
            }
        ]
    },
    {
        "id": 0,
        "code": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "name": "string",
        "description": "string",
        "imageUrl": "https://static.ladipage.net/5dcdfbb918ed7f6153f62d0b/banner-1200x628px-20210414080426.jpg",
        "format": 0,
        "privacy": 0,
        "address": "string",
        "offlineStatus": 0,
        "startOfflineDate": new Date("2023-01-27T14:39:43.790Z"),
        "endOfflineDate": new Date("2023-01-27T14:39:43.790Z"),
        "onlineStatus": 0,
        "startOnlineDate": new Date("2023-01-27T14:39:43.790Z"),
        "endOnlineDate": new Date("2023-01-27T14:39:43.790Z"),
        "createdDate": new Date("2023-01-27T14:39:43.790Z"),
        "updatedDate": new Date("2023-01-27T14:39:43.790Z"),
        "statusOfflineName": "string",
        "statusOnlineName": "string",
        "formatName": "string",
        "privacyName": "string",
        "issuers": [
            {
                "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                "description": "string",
                "user": {
                    "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                    "code": "string",
                    "name": "string",
                    "email": "user@example.com",
                    "address": "string",
                    "phone": "string",
                    "roleName": "string",
                    "role": 0,
                    "status": true,
                    "statusName": "string",
                    "imageUrl": "string"
                }
            }
        ]
    },
    {
        "id": 0,
        "code": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "name": "string",
        "description": "string",
        "imageUrl": "https://static.ladipage.net/5dcdfbb918ed7f6153f62d0b/banner-1200x628px-20210414080426.jpg",
        "format": 0,
        "privacy": 0,
        "address": "string",
        "offlineStatus": 0,
        "startOfflineDate": new Date("2023-01-27T14:39:43.790Z"),
        "endOfflineDate": new Date("2023-01-27T14:39:43.790Z"),
        "onlineStatus": 0,
        "startOnlineDate": new Date("2023-01-27T14:39:43.790Z"),
        "endOnlineDate": new Date("2023-01-27T14:39:43.790Z"),
        "createdDate": new Date("2023-01-27T14:39:43.790Z"),
        "updatedDate": new Date("2023-01-27T14:39:43.790Z"),
        "statusOfflineName": "string",
        "statusOnlineName": "string",
        "formatName": "string",
        "privacyName": "string",
        "issuers": [
            {
                "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                "description": "string",
                "user": {
                    "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                    "code": "string",
                    "name": "string",
                    "email": "user@example.com",
                    "address": "string",
                    "phone": "string",
                    "roleName": "string",
                    "role": 0,
                    "status": true,
                    "statusName": "string",
                    "imageUrl": "string"
                }
            }
        ]
    },
    {
        "id": 0,
        "code": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "name": "string",
        "description": "string",
        "imageUrl": "https://static.ladipage.net/5dcdfbb918ed7f6153f62d0b/banner-1200x628px-20210414080426.jpg",
        "format": 0,
        "privacy": 0,
        "address": "string",
        "offlineStatus": 0,
        "startOfflineDate": new Date("2023-01-27T14:39:43.790Z"),
        "endOfflineDate": new Date("2023-01-27T14:39:43.790Z"),
        "onlineStatus": 0,
        "startOnlineDate": new Date("2023-01-27T14:39:43.790Z"),
        "endOnlineDate": new Date("2023-01-27T14:39:43.790Z"),
        "createdDate": new Date("2023-01-27T14:39:43.790Z"),
        "updatedDate": new Date("2023-01-27T14:39:43.790Z"),
        "statusOfflineName": "string",
        "statusOnlineName": "string",
        "formatName": "string",
        "privacyName": "string",
        "issuers": [
            {
                "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                "description": "string",
                "user": {
                    "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                    "code": "string",
                    "name": "string",
                    "email": "user@example.com",
                    "address": "string",
                    "phone": "string",
                    "roleName": "string",
                    "role": 0,
                    "status": true,
                    "statusName": "string",
                    "imageUrl": "string"
                }
            }
        ]
    },
    {
        "id": 0,
        "code": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "name": "string",
        "description": "string",
        "imageUrl": "https://static.ladipage.net/5dcdfbb918ed7f6153f62d0b/banner-1200x628px-20210414080426.jpg",
        "format": 0,
        "privacy": 0,
        "address": "string",
        "offlineStatus": 0,
        "startOfflineDate": new Date("2023-01-27T14:39:43.790Z"),
        "endOfflineDate": new Date("2023-01-27T14:39:43.790Z"),
        "onlineStatus": 0,
        "startOnlineDate": new Date("2023-01-27T14:39:43.790Z"),
        "endOnlineDate": new Date("2023-01-27T14:39:43.790Z"),
        "createdDate": new Date("2023-01-27T14:39:43.790Z"),
        "updatedDate": new Date("2023-01-27T14:39:43.790Z"),
        "statusOfflineName": "string",
        "statusOnlineName": "string",
        "formatName": "string",
        "privacyName": "string",
        "issuers": [
            {
                "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                "description": "string",
                "user": {
                    "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                    "code": "string",
                    "name": "string",
                    "email": "user@example.com",
                    "address": "string",
                    "phone": "string",
                    "roleName": "string",
                    "role": 0,
                    "status": true,
                    "statusName": "string",
                    "imageUrl": "string"
                }
            }
        ]
    },
]
export const mockIssuer: IssuerViewModel[] = mockBooks.map(({issuer}) => issuer).slice(0,6);
