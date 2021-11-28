import React, { useEffect } from 'react';
import pic from '../../assets/img/bookpic.jpg';
import { useSelector, useDispatch } from 'react-redux';
import { getUserProfile } from '../../redux/actions/Users/useraction';
import { Link } from 'react-router-dom';
import { deleteBook} from '../../redux/actions/Books/bookaction';
import Loading from '../Loading/Loading'

import './Profile.css'
const Profile = ({ history }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserProfile());
  }, [dispatch, history]);



  const userProfile = useSelector(state => state.userProfile);
  const { loading, user, error } = userProfile;

  const books = userProfile.user && userProfile.user.books;

  const renderTable = () => {
    const handlerDeleteBook = id => {
      dispatch(deleteBook(id));
      window.location.reload()
    };
  
    if (user) {
      return (
        <table className='table table-hover'>
          <thead>
            <tr>
              <th scope='col'>Author</th>
              <th scope='col'>Book Name</th>
              <th scope='col'>Delete</th>
              <th scope='col'>Update</th>
            </tr>
          </thead>
          <tbody>
            {books.map(book => {
                return (
                  <tr className='table-dark' key={book._id}>
                    <th scope='row'>{book.author}</th>
                    <td>{book.title}</td>
                    <td>
                          <i
                            onClick={() => handlerDeleteBook(book._id)}
                            className='fas fa-trash '
                            style={{ color: 'red',  cursor: 'pointer', }}></i>
                        </td>
                        <td>
                          
                        <Link to={`/book/${book && book._id}`}>
                            <i
                              className='far fa-edit'
                              style={{
                                color: 'yellow',
                                cursor: 'pointer',
                              }}></i>
                          </Link>
                          
                        </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      );
    } else {
      return (
        <>
          <h1>You don't have any book created.</h1>
          <Link to='/addbook'>Start Creating</Link>
        </>
      );
    }
  };

  return (
    <>
      {error && <h2>{error}</h2>}
      {loading ? <Loading /> :
        <div className='container'>
          <div className='row'>
            <div className='col mt-5'>
              {/* {loading && !user ? (
              <Loading />
            ) : ( */}
              <div className='card m-auto ' style={{ width: '50%' }}>
                <img src={pic} className='card-img-top' alt='...' />
                <div className='card-body'>
                  <h5 className='card-title'>{user && user.email}</h5>
                  <p className='card-text'>{user && user.name}</p>
                  <Link to='/profile/update' className='btn btn-primary'>
                    Update your profile
                  </Link>
                </div>
              </div>
              {/* )} */}
            </div>
          </div>

          <div className='row'>
            <div className='col'>{renderTable()}</div>
          </div>
        </div>
      }

    </>
  );
};

export default Profile;