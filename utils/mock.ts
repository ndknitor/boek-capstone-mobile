import { Book } from "../objects/entities/Book";
import { range } from "./format";
export const t = range(1, 20);

export const books: Book[] =
    [
        {
            "id": 12,
            "code": "TB004_Test",
            "genreId": 48,
            "publisherId": 2,
            "issuerId": "90bbc35c-b655-4ae1-9bf5-7c3c4aba2ee0",
            "isbn10": "",
            "isbn13": "",
            "name": "Book4_Test",
            "translator": "Book_Translator_Test",
            "imageUrl": "https://salt.tikicdn.com/cache/w1200/ts/product/88/3b/22/5911d66164e96a2d8b3c77bcee059983.jpg",
            "coverPrice": 18000.0000,
            "description": "Book4_Description_Test",
            "language": "VN",
            "size": "Book4_Size_Test",
            "releasedYear": 2022,
            "page": 200,
            "isSeries": false,
            "isCombo": false,
            "status": 1,
            "statusName": "Phát hành",
            "genre": {
                "id": 48,
                "categoryId": null,
                "name": "Tiểu thuyết",
                "displayIndex": 8,
                "status": true,
                "statusName": "Hoạt động"
            },
            "issuer": {
                "id": "90bbc35c-b655-4ae1-9bf5-7c3c4aba2ee0",
                "code": "I307304132",
                "name": "BIZBOOK",
                "email": "ngcphungnguyn@gmail.com",
                "address": "",
                "phone": "0123456789",
                "roleName": "Issuer",
                "role": 2,
                "status": true,
                "statusName": null,
                "imageUrl": "https://lh3.googleusercontent.com/a/ALm5wu0FH3PWgtOhqCmxcKHFIWcYY-6j_C9f7nq9oBcA=s96-c"
            },
            "publisher": {
                "id": 2,
                "code": "NXBKD",
                "name": "NXB Kim Đồng",
                "email": "cskh_online@nxbkimdong.com.vn",
                "address": "Số 55 Quang Trung, Nguyễn Du, Hai Bà Trưng, Hà Nội",
                "imageUrl": "https://theme.hstatic.net/200000343865/1000938429/14/logo.png?v=180",
                "phone": "01900571595"
            },
            "bookAuthors": [
                {
                    "id": 27,
                    "bookId": 15,
                    "authorId": 1,
                    "author": {
                        "id": 1,
                        "name": "Nguyễn Nhật Ánh",
                    }
                },
                {
                    "id": 28,
                    "bookId": 15,
                    "authorId": 2,
                    "author": {
                        "id": 2,
                        "name": "Sven Carlsson, Jonas",
                    }
                }
            ],
            "formats": [
                {
                    "id": 43,
                    "bookId": 15,
                    "type": 1,
                    "typeName": "Bìa cứng",
                    "createdDate": new Date("2022-12-30T16:17:03.187"),
                },
                {
                    "id": 44,
                    "bookId": 15,
                    "type": 2,
                    "typeName": "Bìa mềm",
                    "url": "https://salt.tikicdn.com/ts/product/6d/61/45/4d4166c4fee360442889f320c84a12c5.jpg",
                    "createdDate": new Date("2022-12-30T16:17:03.187"),
                }
            ]
        },
        {
            "id": 13,
            "code": "TB004_Test",
            "genreId": 48,
            "publisherId": 2,
            "issuerId": "90bbc35c-b655-4ae1-9bf5-7c3c4aba2ee0",
            "isbn10": "",
            "isbn13": "",
            "name": "Book4_Test",
            "translator": "Book_Translator_Test",
            "imageUrl": "https://salt.tikicdn.com/cache/w1200/ts/product/88/3b/22/5911d66164e96a2d8b3c77bcee059983.jpg",
            "coverPrice": 18000.0000,
            "description": "Book4_Description_Test",
            "language": "VN",
            "size": "Book4_Size_Test",
            "releasedYear": 2022,
            "page": 200,
            "isSeries": false,
            "isCombo": false,
            "status": 1,
            "statusName": "Phát hành",
            "genre": {
                "id": 48,
                "categoryId": null,
                "name": "Tiểu thuyết",
                "displayIndex": 8,
                "status": true,
                "statusName": "Hoạt động"
            },
            "issuer": {
                "id": "90bbc35c-b655-4ae1-9bf5-7c3c4aba2ee0",
                "code": "I307304132",
                "name": "BIZBOOK",
                "email": "ngcphungnguyn@gmail.com",
                "address": "",
                "phone": "0123456789",
                "roleName": "Issuer",
                "role": 2,
                "status": true,
                "statusName": null,
                "imageUrl": "https://lh3.googleusercontent.com/a/ALm5wu0FH3PWgtOhqCmxcKHFIWcYY-6j_C9f7nq9oBcA=s96-c"
            },
            "publisher": {
                "id": 2,
                "code": "NXBKD",
                "name": "NXB Kim Đồng",
                "email": "cskh_online@nxbkimdong.com.vn",
                "address": "Số 55 Quang Trung, Nguyễn Du, Hai Bà Trưng, Hà Nội",
                "imageUrl": "https://theme.hstatic.net/200000343865/1000938429/14/logo.png?v=180",
                "phone": "01900571595"
            },
            "bookAuthors": [
                {
                    "id": 27,
                    "bookId": 15,
                    "authorId": 1,
                    "author": {
                        "id": 1,
                        "name": "Nguyễn Nhật Ánh",
                    }
                },
                {
                    "id": 28,
                    "bookId": 15,
                    "authorId": 2,
                    "author": {
                        "id": 2,
                        "name": "Sven Carlsson, Jonas",
                    }
                }
            ],
            "formats": [
                {
                    "id": 43,
                    "bookId": 15,
                    "type": 1,
                    "typeName": "Bìa cứng",
                    "createdDate": new Date("2022-12-30T16:17:03.187"),
                },
                {
                    "id": 44,
                    "bookId": 15,
                    "type": 2,
                    "typeName": "Bìa mềm",
                    "url": "https://salt.tikicdn.com/ts/product/6d/61/45/4d4166c4fee360442889f320c84a12c5.jpg",
                    "createdDate": new Date("2022-12-30T16:17:03.187"),
                }
            ]
        },
        {
            "id": 14,
            "code": "TB004_Test",
            "genreId": 48,
            "publisherId": 2,
            "issuerId": "90bbc35c-b655-4ae1-9bf5-7c3c4aba2ee0",
            "isbn10": "",
            "isbn13": "",
            "name": "Book4_Test",
            "translator": "Book_Translator_Test",
            "imageUrl": "https://salt.tikicdn.com/cache/w1200/ts/product/88/3b/22/5911d66164e96a2d8b3c77bcee059983.jpg",
            "coverPrice": 18000.0000,
            "description": "Book4_Description_Test",
            "language": "VN",
            "size": "Book4_Size_Test",
            "releasedYear": 2022,
            "page": 200,
            "isSeries": false,
            "isCombo": false,
            "status": 1,
            "statusName": "Phát hành",
            "genre": {
                "id": 48,
                "categoryId": null,
                "name": "Tiểu thuyết",
                "displayIndex": 8,
                "status": true,
                "statusName": "Hoạt động"
            },
            "issuer": {
                "id": "90bbc35c-b655-4ae1-9bf5-7c3c4aba2ee0",
                "code": "I307304132",
                "name": "BIZBOOK",
                "email": "ngcphungnguyn@gmail.com",
                "address": "",
                "phone": "0123456789",
                "roleName": "Issuer",
                "role": 2,
                "status": true,
                "statusName": null,
                "imageUrl": "https://lh3.googleusercontent.com/a/ALm5wu0FH3PWgtOhqCmxcKHFIWcYY-6j_C9f7nq9oBcA=s96-c"
            },
            "publisher": {
                "id": 2,
                "code": "NXBKD",
                "name": "NXB Kim Đồng",
                "email": "cskh_online@nxbkimdong.com.vn",
                "address": "Số 55 Quang Trung, Nguyễn Du, Hai Bà Trưng, Hà Nội",
                "imageUrl": "https://theme.hstatic.net/200000343865/1000938429/14/logo.png?v=180",
                "phone": "01900571595"
            },
            "bookAuthors": [
                {
                    "id": 27,
                    "bookId": 15,
                    "authorId": 1,
                    "author": {
                        "id": 1,
                        "name": "Nguyễn Nhật Ánh",
                    }
                },
                {
                    "id": 28,
                    "bookId": 15,
                    "authorId": 2,
                    "author": {
                        "id": 2,
                        "name": "Sven Carlsson, Jonas",
                    }
                }
            ],
            "formats": [
                {
                    "id": 43,
                    "bookId": 15,
                    "type": 1,
                    "typeName": "Bìa cứng",
                    "createdDate": new Date("2022-12-30T16:17:03.187"),
                },
                {
                    "id": 44,
                    "bookId": 15,
                    "type": 2,
                    "typeName": "Bìa mềm",
                    "url": "https://salt.tikicdn.com/ts/product/6d/61/45/4d4166c4fee360442889f320c84a12c5.jpg",
                    "createdDate": new Date("2022-12-30T16:17:03.187"),
                }
            ]
        },
        {
            "id": 15,
            "code": "TB004_Test",
            "genreId": 48,
            "publisherId": 2,
            "issuerId": "90bbc35c-b655-4ae1-9bf5-7c3c4aba2ee0",
            "isbn10": "",
            "isbn13": "",
            "name": "Book4_Test",
            "translator": "Book_Translator_Test",
            "imageUrl": "https://salt.tikicdn.com/cache/w1200/ts/product/88/3b/22/5911d66164e96a2d8b3c77bcee059983.jpg",
            "coverPrice": 18000.0000,
            "description": "Book4_Description_Test",
            "language": "VN",
            "size": "Book4_Size_Test",
            "releasedYear": 2022,
            "page": 200,
            "isSeries": false,
            "isCombo": false,
            "status": 1,
            "statusName": "Phát hành",
            "genre": {
                "id": 48,
                "categoryId": null,
                "name": "Tiểu thuyết",
                "displayIndex": 8,
                "status": true,
                "statusName": "Hoạt động"
            },
            "issuer": {
                "id": "90bbc35c-b655-4ae1-9bf5-7c3c4aba2ee0",
                "code": "I307304132",
                "name": "BIZBOOK",
                "email": "ngcphungnguyn@gmail.com",
                "address": "",
                "phone": "0123456789",
                "roleName": "Issuer",
                "role": 2,
                "status": true,
                "statusName": null,
                "imageUrl": "https://lh3.googleusercontent.com/a/ALm5wu0FH3PWgtOhqCmxcKHFIWcYY-6j_C9f7nq9oBcA=s96-c"
            },
            "publisher": {
                "id": 2,
                "code": "NXBKD",
                "name": "NXB Kim Đồng",
                "email": "cskh_online@nxbkimdong.com.vn",
                "address": "Số 55 Quang Trung, Nguyễn Du, Hai Bà Trưng, Hà Nội",
                "imageUrl": "https://theme.hstatic.net/200000343865/1000938429/14/logo.png?v=180",
                "phone": "01900571595"
            },
            "bookAuthors": [
                {
                    "id": 27,
                    "bookId": 15,
                    "authorId": 1,
                    "author": {
                        "id": 1,
                        "name": "Nguyễn Nhật Ánh",
                    }
                },
                {
                    "id": 28,
                    "bookId": 15,
                    "authorId": 2,
                    "author": {
                        "id": 2,
                        "name": "Sven Carlsson, Jonas",
                    }
                }
            ],
            "formats": [
                {
                    "id": 43,
                    "bookId": 15,
                    "type": 1,
                    "typeName": "Bìa cứng",
                    "createdDate": new Date("2022-12-30T16:17:03.187"),
                },
                {
                    "id": 44,
                    "bookId": 15,
                    "type": 2,
                    "typeName": "Bìa mềm",
                    "url": "https://salt.tikicdn.com/ts/product/6d/61/45/4d4166c4fee360442889f320c84a12c5.jpg",
                    "createdDate": new Date("2022-12-30T16:17:03.187"),
                }
            ]
        },
        {
            "id": 16,
            "code": "TB004_Test",
            "genreId": 48,
            "publisherId": 2,
            "issuerId": "90bbc35c-b655-4ae1-9bf5-7c3c4aba2ee0",
            "isbn10": "",
            "isbn13": "",
            "name": "Book4_Test",
            "translator": "Book_Translator_Test",
            "imageUrl": "https://salt.tikicdn.com/cache/w1200/ts/product/88/3b/22/5911d66164e96a2d8b3c77bcee059983.jpg",
            "coverPrice": 18000.0000,
            "description": "Book4_Description_Test",
            "language": "VN",
            "size": "Book4_Size_Test",
            "releasedYear": 2022,
            "page": 200,
            "isSeries": false,
            "isCombo": false,
            "status": 1,
            "statusName": "Phát hành",
            "genre": {
                "id": 48,
                "categoryId": null,
                "name": "Tiểu thuyết",
                "displayIndex": 8,
                "status": true,
                "statusName": "Hoạt động"
            },
            "issuer": {
                "id": "90bbc35c-b655-4ae1-9bf5-7c3c4aba2ee0",
                "code": "I307304132",
                "name": "BIZBOOK",
                "email": "ngcphungnguyn@gmail.com",
                "address": "",
                "phone": "0123456789",
                "roleName": "Issuer",
                "role": 2,
                "status": true,
                "statusName": null,
                "imageUrl": "https://lh3.googleusercontent.com/a/ALm5wu0FH3PWgtOhqCmxcKHFIWcYY-6j_C9f7nq9oBcA=s96-c"
            },
            "publisher": {
                "id": 2,
                "code": "NXBKD",
                "name": "NXB Kim Đồng",
                "email": "cskh_online@nxbkimdong.com.vn",
                "address": "Số 55 Quang Trung, Nguyễn Du, Hai Bà Trưng, Hà Nội",
                "imageUrl": "https://theme.hstatic.net/200000343865/1000938429/14/logo.png?v=180",
                "phone": "01900571595"
            },
            "bookAuthors": [
                {
                    "id": 27,
                    "bookId": 15,
                    "authorId": 1,
                    "author": {
                        "id": 1,
                        "name": "Nguyễn Nhật Ánh",
                    }
                },
                {
                    "id": 28,
                    "bookId": 15,
                    "authorId": 2,
                    "author": {
                        "id": 2,
                        "name": "Sven Carlsson, Jonas",
                    }
                }
            ],
            "formats": [
                {
                    "id": 43,
                    "bookId": 15,
                    "type": 1,
                    "typeName": "Bìa cứng",
                    "createdDate": new Date("2022-12-30T16:17:03.187"),
                },
                {
                    "id": 44,
                    "bookId": 15,
                    "type": 2,
                    "typeName": "Bìa mềm",
                    "url": "https://salt.tikicdn.com/ts/product/6d/61/45/4d4166c4fee360442889f320c84a12c5.jpg",
                    "createdDate": new Date("2022-12-30T16:17:03.187"),
                }
            ]
        },
        {
            "id": 17,
            "code": "TB004_Test",
            "genreId": 48,
            "publisherId": 2,
            "issuerId": "90bbc35c-b655-4ae1-9bf5-7c3c4aba2ee0",
            "isbn10": "",
            "isbn13": "",
            "name": "Book4_Test",
            "translator": "Book_Translator_Test",
            "imageUrl": "https://salt.tikicdn.com/cache/w1200/ts/product/88/3b/22/5911d66164e96a2d8b3c77bcee059983.jpg",
            "coverPrice": 18000.0000,
            "description": "Book4_Description_Test",
            "language": "VN",
            "size": "Book4_Size_Test",
            "releasedYear": 2022,
            "page": 200,
            "isSeries": false,
            "isCombo": false,
            "status": 1,
            "statusName": "Phát hành",
            "genre": {
                "id": 48,
                "categoryId": null,
                "name": "Tiểu thuyết",
                "displayIndex": 8,
                "status": true,
                "statusName": "Hoạt động"
            },
            "issuer": {
                "id": "90bbc35c-b655-4ae1-9bf5-7c3c4aba2ee0",
                "code": "I307304132",
                "name": "BIZBOOK",
                "email": "ngcphungnguyn@gmail.com",
                "address": "",
                "phone": "0123456789",
                "roleName": "Issuer",
                "role": 2,
                "status": true,
                "statusName": null,
                "imageUrl": "https://lh3.googleusercontent.com/a/ALm5wu0FH3PWgtOhqCmxcKHFIWcYY-6j_C9f7nq9oBcA=s96-c"
            },
            "publisher": {
                "id": 2,
                "code": "NXBKD",
                "name": "NXB Kim Đồng",
                "email": "cskh_online@nxbkimdong.com.vn",
                "address": "Số 55 Quang Trung, Nguyễn Du, Hai Bà Trưng, Hà Nội",
                "imageUrl": "https://theme.hstatic.net/200000343865/1000938429/14/logo.png?v=180",
                "phone": "01900571595"
            },
            "bookAuthors": [
                {
                    "id": 27,
                    "bookId": 15,
                    "authorId": 1,
                    "author": {
                        "id": 1,
                        "name": "Nguyễn Nhật Ánh",
                    }
                },
                {
                    "id": 28,
                    "bookId": 15,
                    "authorId": 2,
                    "author": {
                        "id": 2,
                        "name": "Sven Carlsson, Jonas",
                    }
                }
            ],
            "formats": [
                {
                    "id": 43,
                    "bookId": 15,
                    "type": 1,
                    "typeName": "Bìa cứng",
                    "createdDate": new Date("2022-12-30T16:17:03.187"),
                },
                {
                    "id": 44,
                    "bookId": 15,
                    "type": 2,
                    "typeName": "Bìa mềm",
                    "url": "https://salt.tikicdn.com/ts/product/6d/61/45/4d4166c4fee360442889f320c84a12c5.jpg",
                    "createdDate": new Date("2022-12-30T16:17:03.187"),
                }
            ]
        }
    ];