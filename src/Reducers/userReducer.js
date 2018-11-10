const userReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_USER':
            console.log("You posted!");
            return state.concat([action.data]);
        case 'DELETE_USER':
            console.log("You erased it!");
            return state.filter((user) => user.id !== action.id);
        case 'EDIT_USER':
            return state.map((user) => user.id === action.id ? { ...user, edit: !user.edit } : user);
        case 'UPDATE':
            return state.map((user) => {
                if (user.id === action.id) {
                    return {
                        ...user,
                        firstname: action.data.newFirstname,
                        lastname: action.data.newLastname,
                        country: action.data.newCountry,
                        edit: !user.edit
                    }
                } else return user;
            })
        default:
            return state;
    }
}

export default userReducer;