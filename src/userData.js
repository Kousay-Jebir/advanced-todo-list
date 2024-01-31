export const loggedInUser = () => {
    const profiles = JSON.parse(sessionStorage.getItem('profiles'));
    for (var i = 0; i < profiles.length; i++) {
        if (profiles[i]['isLoggedIn']) {
            return i;
        }

    }
} //returns index of logged in user
