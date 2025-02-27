import { AppUser } from '@/contexts/types';

export async function getUser() {
    const response = await fetch('/api/user');

    if (response) {
        const value = await response.json();
        return value;
    }

    return null;
}

export async function hasUser(name: string, email: string) {
    const response = await fetch(`/api/user/${name}?email=${email}`);

    if (response) {
        const { user } = await response.json();
        
        if (!user) {
            return null;
        }

        return user;
    }

    return null;
}

export async function setUser({ name, email, id, is_admin }: AppUser) {
    const response = await fetch.post('/api/user',
        {
            name: name,
            email: email,
            id: id,
            is_admin: is_admin,
        }
    );

    if (response.status == 200) {
        return true;
    }

    return false;
}

export async function cleanUser() {
    const response = await fetch.delete('/api/user');
    
    if (response.status == 200) {
        return true;
    }

    return false;
}