function setCookie(name, value, hoursToExpire = 1, sameSite = 'Strict') {
    const date = new Date();
    date.setTime(date.getTime() + (hoursToExpire * 60 * 60 * 1000));
    const expires = `expires=${date.toUTCString()}`;
    const secure = location.protocol === 'https:' ? 'Secure' : '';
    const cookieString = `${name}=${value}; ${expires}; path=/; ${secure}; SameSite=${sameSite}`;
    document.cookie = cookieString;
}


function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (const cookie of cookies) {
        const [cookieName, cookieValue] = cookie.split('=').map(c => c.trim());
        if (cookieName === name) {
            return cookieValue;
        }
    }
    return null;
}

export {
    getCookie,
    setCookie
}