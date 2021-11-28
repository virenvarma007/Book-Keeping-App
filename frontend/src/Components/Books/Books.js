import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks, deleteBook} from '../../redux/actions/Books/bookaction';
import Loading from '../Loading/Loading';
import { Link } from 'react-router-dom';
// import BookDetail from './BookDetail';

const Books = () => {
  //Fetch books
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const bookslist = useSelector(state => state.bookList);
  const { books, loading } = bookslist;
  // End of fetch books

  //Delete book handler
  const handlerDeleteBook = id => {
    dispatch(deleteBook(id));
    window.location.reload()
  };
  return (
    <div>
      {loading && <Loading />}
      {books !== undefined && books.length === 0 ? (
        'No'
      ) : (
        <div className='row'>
          <div className='col'>
            <table className='table table-hover'>
              <thead>
                <tr>
                  <th scope='col'>Author</th>
                  <th scope='col'>Book Name</th>
                  <th scope='col'>Action</th>
                  <th scope='col'>Action</th>
                </tr>
              </thead>
              <tbody>
                {books &&
                  books.map(book => {
                    return (
                      <tr className='table-dark' key={book._id}>
                        <td>{book.author}</td>
                        <th scope='row'>{book.title}</th>
                        <td>
                          <i
                            onClick={() => handlerDeleteBook(book._id)}
                            className='fas fa-trash '
                            style={{ color: 'red', cursor: 'pointer', }}></i>
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
          </div>
        </div>
      )}
    </div>
  );
};

export default Books;