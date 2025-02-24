export type AppUser = {
    name: string;
    email: string;
    id: string | number;
    is_admin: boolean;
}

export interface AppContextInterface {
    currentUser: AppUser | undefined;
    updateUser: (user: AppUser) => void;
}