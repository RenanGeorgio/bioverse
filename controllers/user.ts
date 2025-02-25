export async function getUser() {
    const response = await fetch('/api/user');

    if (response) {
        const value = await response.json();
    }

    return null;
}