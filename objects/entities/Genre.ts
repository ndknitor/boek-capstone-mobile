export interface Genre {
    id: number,
    categoryId: number | null,
    name: string;
    displayIndex: number,
    status: boolean;
    statusName: string;
}