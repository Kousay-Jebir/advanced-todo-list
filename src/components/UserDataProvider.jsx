import React, { useState } from 'react';
import userDataContext from '../contexts/userDataContext';

const UserDataProvider = ({ children }) => {
    // Get the profiles string from sessionStorage
    const profilesString = localStorage.getItem('profiles');

    // Parse the profiles string into an array of profile objects
    const profiles = JSON.parse(profilesString);

    return (
        <userDataContext.Provider value={profiles}>
            {children}
        </userDataContext.Provider>
    );
};

export default UserDataProvider;
