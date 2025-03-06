import { getURL } from '@/utils/helpers';
import { AppUser } from '@/contexts/types';


export async function getUser() {
    const response = await fetch(getURL('/api/user'));
    
    if (response?.status == 201) {
        const { user } = await response.json();
        return user;
    }

    return null;
}

export async function hasUser(name: string, email: string) {
    const response = await fetch(getURL(`/api/user/${name}?email=${email}`));

    if (response?.status == 200) {
        const { user } = await response.json();

        return user;
    }

    return null;
}

export async function setUser({ name, email, id, is_admin }: AppUser) {
    const response = await fetch(getURL('/api/user'),
        {
            method: "POST",
            body: JSON.stringify({
                name: name,
                email: email,
                id: id,
                is_admin: is_admin,
            })
        }
    );

    if (response?.status == 200) {
        const { data } = await response.json();
        console.log(data);
        return data;
    }

    return null;
}

export async function cleanUser() {
    const response = await fetch(getURL('/api/user'), { method: "DELETE" });
    
    if (response?.status == 204) {
        return true;
    }

    return false;
}