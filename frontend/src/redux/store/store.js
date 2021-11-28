import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import createdBookReducer from '../reducers/Books/createBookReducer';
import booksListReducer from '../reducers/Books/BookListReducer';
import bookDetailReducer from '../reducers/Books/BookDetailReducer';
import userReducer from '../reducers/Users/userAuthReducer';
import userProfile from '../reducers/Users/userProfileReducer'
import userUpdateReducer from '../reducers/Users/userUpdateProfile'
const middleware = [thunk];

const reducer = combineReducers({
    bookCreated: createdBookReducer,
    bookList: booksListReducer,
    bookDetails: bookDetailReducer,
    userDetails: userReducer, //login and Register
    userProfile: userProfile,
    UpdatedUser: userUpdateReducer,
   

});

const userAuthFromStorage = localStorage.getItem('userAuthData')
    ? JSON.parse(localStorage.getItem('userAuthData'))
    : null;

const initialState = {
    userDetails: { userInfo: userAuthFromStorage },
};
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;