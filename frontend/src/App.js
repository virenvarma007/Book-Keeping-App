import './App.css';
import { BrowserRouter, Route ,Switch} from 'react-router-dom';
import Books from './Components/Books/Books';
import Navbar from './Components/Navbar/Navbar'
import AddBook from './Components/Books/AddBook';
import Register from './Components/users/RegisterUser';
import Login from './Components/users/LoginUser';
import Home from './Components/Home/Homepage';
import Profile from './Components/Profile/Profile';
import UpdateProfile from './Components/Profile/UpdateProfile';
import BookDetail from './Components/Books/BookDetail';
import Team from './Components/Team/Team'
import Contact from './Components/Contact/Contact'
function App() {
  return (
<>
<BrowserRouter>
<Navbar/>
  <Switch>
<Route exact path='/' component={Home}></Route>
<Route exact path='/profile' component={Profile }></Route>
<Route exact path='/profile/update' component={UpdateProfile }></Route>
<Route exact path='/login' component={Login}></Route>
<Route exact path='/books' component={Books}></Route>
<Route exact path='/addbook' component={AddBook}></Route>
<Route exact path='/book/:id' component={BookDetail} />
<Route exact path='/register' component={Register}></Route>
<Route exact path='/team' component={Team}></Route>
<Route exact path='/contact' component={Contact}></Route>
  </Switch>
</BrowserRouter>
</>
  );
}

export default App;
