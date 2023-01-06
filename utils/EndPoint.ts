const EndPont =
{
    admin: {
        authors: "/api/admin/authors",
        genres: "/api/admin/genres",
        publishers: "/api/admin/publishers",
        users: "/api/admin/users",

    },
    issuer:
    {
        authors: "/api/issuer/authors",
        books: {
            index: "/api/issuer/books",
            bookCombo: "/api/issuer/books/book-combo",
            bookSeries: "/api/issuer/books/book-series",
            enableBook: "/api/issuer/books/enabled-book",
            disabledBook: "​/api​/issuer​/books​/disabled-book​"
        },
        formats: "/api/issuers/formats"
    },
    users: {
        index: "/api/users",
        me: "/api/users/me",
        staff: "/api/users/staff",
        customer: "/api/users/customer",
        issuer: "/api/users/issuer"
    },
    public: {
        login: "/api/login",
        author: "/api/authors",
        books:
        {
            index: "/api/books",
            genre: "/api/books/genre"
        },
        formats: "/api/formats",
        genres: "/api/genres",
        publisher: "​/api​/publishers"
    }
}
export default EndPont;