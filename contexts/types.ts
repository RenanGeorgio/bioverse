export type AppUser = {
    name: string;
    email: string;
    id: string | number | undefined;
    is_admin: boolean;
}

export interface AppContextInterface {
    currentUser: AppUser | undefined;
    updateUser: (user: AppUser) => Promise<void>;
}