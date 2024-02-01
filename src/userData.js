export const loggedInUser = () => {
    const profiles = JSON.parse(sessionStorage.getItem('profiles')) || [];

    if (profiles.length === 0) {
        // Return 0 when no profiles exist
        return 0;
    }

    for (let i = 0; i < profiles.length; i++) {
        if (profiles[i] && profiles[i]['isLoggedIn']) {
            // Return the index of the logged-in user
            return i;
        }
    }

    // If no profile is logged in, return 0
    return 0;
};


export const logOutCurrentUser = () => {
    const profiles = JSON.parse(sessionStorage.getItem("profiles"));
    profiles[loggedInUser()].isLoggedIn = false;
    sessionStorage.setItem('profiles', JSON.stringify(profiles));
}

export const logInUser = (index) => {
    const profiles = JSON.parse(sessionStorage.getItem("profiles"));
    profiles[index].isLoggedIn = true;
    sessionStorage.setItem('profiles', JSON.stringify(profiles));
}



export const generateGraphBarHeight = (i) => {
    const user = loggedInUser();
    let userToDoList = (JSON.parse(sessionStorage.getItem('profiles'))[user].toDoLists)[i]
    console.log(Object.values(userToDoList));

    userToDoList = Object.values(userToDoList)[0];
    let checkedTasks = 0;
    const totalTasks = userToDoList.length;
    console.log(totalTasks);
    userToDoList.forEach(element => {
        if (element.isChecked) {
            checkedTasks++;
        }
    });
    return [checkedTasks, totalTasks];

};