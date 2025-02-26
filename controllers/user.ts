export async function getUser() {
    const response = await fetch('/api/user');

    if (response) {
        const value = await response.json();
        return value;
    }

    return null;
}

export async function setUser(name: string, email: string) {
    const response = await fetch('/api/user',
        method: 'POST',
        {
            name: name,
            email: email,
            id: string | number;
            is_admin: boolean;
        }
    );

    if (response.status == 200) {
        return true;
    }

    return false;
}

export async function cleanUser() {
    const response = await fetch('/api/user', method: 'DELETE');
    
    if (response.status == 200) {
        return true;
    }

    return false;
}