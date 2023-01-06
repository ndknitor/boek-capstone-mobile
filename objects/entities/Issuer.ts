export interface Issuer{
    id: string;
    code: string;
    name?: string;
    email: string;
    address: string;
    phone: string;
    roleName: string;
    role: number,
    status: boolean,
    statusName: string | null,
    imageUrl: string;
}