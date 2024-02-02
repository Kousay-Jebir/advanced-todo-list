export const loggedInUser = () => {
    const profiles = JSON.parse(localStorage.getItem('profiles')) || [];

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
    const profiles = JSON.parse(localStorage.getItem("profiles"));
    profiles[loggedInUser()].isLoggedIn = false;
    localStorage.setItem('profiles', JSON.stringify(profiles));
}

export const logInUser = (index) => {
    const profiles = JSON.parse(localStorage.getItem("profiles"));
    profiles[index].isLoggedIn = true;
    localStorage.setItem('profiles', JSON.stringify(profiles));
}



export const generateGraphBarHeight = (i, disable) => {
    const user = loggedInUser();
    const userToDoLists = JSON.parse(localStorage.getItem('profiles'))[user]?.toDoLists;

    if (!userToDoLists || i < 0 || i >= userToDoLists.length) {

        disable(false);
        return [0, 0];
    }

    const userToDoList = Object.values(userToDoLists[i])[0];

    if (!userToDoList) {

        disable(false);
        return [0, 0];
    }

    console.log(Object.values(userToDoList));

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
