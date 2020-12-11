const checkCookie = function () {
    let user = window.localStorage.getItem('stgDesafioMalwee');
    user = JSON.parse(user);
    if (user !== '' || user !== undefined || user !== null ) {
        return user;
    } else {
        return null;
    }
    
};

export { checkCookie };