import {type user} from "../data/users";
import {usersTestData} from "../data/usersTestData";

export const userAccount = {

    createUserAccount: (firstName: string, lastName: string, username: string, email: string, password: string): user => {
        const newUser: user = {
            id: usersTestData.length + 1,
            firstName,
            lastName,
            username,
            email,
            password
        };
        usersTestData.push(newUser);
        return newUser;
    },

    addUserAccount: (user: user): void => {
        usersTestData.push(user);
    },

    // optional
    getUserByFirstName: (firstName: string): user | undefined => {
        return usersTestData.find(user => user.firstName === firstName);
    },

    // optional
    getUserByLastName: (lastName: string): user | undefined => {
        return usersTestData.find(user => user.lastName === lastName);
    },

    getUserByUsername: (username: string): user | undefined => {
        return usersTestData.find(user => user.username === username);
    },

    getUserByEmail: (email: string): user | undefined => {
        return usersTestData.find(user => user.email === email);
    },

    getAllUsersAccounts: (): user[] => {
        return usersTestData;
    },

    updateUserAccount: (updatedUser: user): user | undefined => {
        const index = usersTestData.findIndex(user => user.id === updatedUser.id);
        if (index !== -1) {
            usersTestData[index] = updatedUser;
            return updatedUser;
        }
    },

    // optional
    removeUserAccount: (id: number): boolean => {
        const index = usersTestData.findIndex(user => user.id === id);
        if (index !== -1) {
            usersTestData.splice(index, 1);
            return true;
        }
        return false;
    }
};