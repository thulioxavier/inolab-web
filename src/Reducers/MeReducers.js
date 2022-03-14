 const initialState = {
    email: '',
 };

 export default (state = initialState, action) =>{

    switch (action.type) {
        case 'SET_EMAIL':
            return {...state, email: action.payload.email};
            break;
        default:
            break;
    }

    return state;
 }