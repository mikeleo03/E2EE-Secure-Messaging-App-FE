function setWithExpiry(key: string, value: string, ttl: number) {
    const now = new Date();
    localStorage.setItem(key, value);
    localStorage.setItem(key + '-expiry', (now.getTime() + ttl).toString());
}

function getWithExpiry(key: string) {
    const now = new Date();
    const expiryTimeString = localStorage.getItem(key + '-expiry');
    
    if (expiryTimeString === null) {
        // Value not found
        // Clear local storage
        localStorage.clear();
        return null;
    }

    const expiryTime = parseInt(expiryTimeString, 10);

    if (isNaN(expiryTime) || now.getTime() > expiryTime) {
        localStorage.removeItem(key);
        localStorage.removeItem(key + '-expiry');
        return null;
    }

    return localStorage.getItem(key);
}

export { setWithExpiry, getWithExpiry };