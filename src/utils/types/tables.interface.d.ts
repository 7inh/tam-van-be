export interface Account {
    id: number;
    email: string;
    password: string;
    role: "user" | "candidate" | "company"; // "admin" role can't not be created by api;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
}

export interface Profile {
    id: number;
    account_id: number;
    full_name: string;
    avatar_url: string;
    contact_mail: string;
    phone_number?: string;
    address?: string;
    description?: string;
    attach_resume?: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
}
