export interface Format{
    id: number,
    bookId: number;
    type: number;
    typeName: string;
    url?: string;
    createdDate: Date;
    updatedDate?: Date;
}