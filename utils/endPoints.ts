const endPont =
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
            genre: "/api/books/genre",
            mobile: {
                products: {
                    index: "/api/books/mobile/products",
                    unhierarchicalBookProducts: "/api/books/mobile/products/unhierarchical-book-products"
                }
            }
        },
        campaigns:
        {
            index: "/api/campaigns",
            mobile:
            {
                index: "/api/campaigns/mobile",
                staffs: "/api/campaigns/mobile/staffs",
                customers: "/api/campaigns/mobile/customers",
            }
        },
        formats: "/api/formats",
        genres: "/api/genres",
        publishers: "/api/publishers",
        languages: "/api/languages",
        provinces: "/api/provinces",
        districts: "/api/districts",
        groups: {
            index: "/api/groups",
            customer: "/api/groups/customer"
        },
        organizations: {
            index: "/api/organizations",
            customer : "/api/organizations/customer"
        }
    },
    lead: {
        districts: "/districts",
        ward: "/wards"
    }
}
export default endPont;