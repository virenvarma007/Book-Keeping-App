import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../redux/actions/Users/useraction';
import ErrorMessage from '../ErrorMessage';
import Loading from '../Loading/Loading'

const Login = ({ history }) => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  const dispatch = useDispatch();


  const userLoginDetails = useSelector(state => state.userDetails);

  const { loading, userInfo, error } = userLoginDetails;

  const submitFormHandler = e => {
    e.preventDefault();
    dispatch(loginUser(email, password));
    
   
  };

  useEffect(()=>{
      if(userInfo) history.push('/profile');
  },[userLoginDetails])

  return (
    <div className='row container-height'>
      <div className='col-lg-6 col-md-6 m-auto'>
        <div className='container'>
          <h1 className='text-center'>Login</h1>
          {loading && <Loading/>}
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <form onSubmit={submitFormHandler}>
            <fieldset>
              <div className='form-group'>
                <label htmlFor='exampleInputEmail1'>Email address</label>
                <input
                  value={email}
                  onChange={e => setemail(e.target.value)}
                  type='email'
                  className='form-control'
                  id='exampleInputEmail1'
                  aria-describedby='emailHelp'
                  placeholder='Enter email'
                  required
                />
              </div>
              <div className='form-group'>
                <label htmlFor='exampleInputPassword1'>Password</label>
                <input
                  value={password}
                  onChange={e => setpassword(e.target.value)}
                  type='password'
                  className='form-control'
                  id='exampleInputPassword1'
                  placeholder='Password'
                  required
                />
              </div>
              <button type='submit' className='btn btn-info m-auto'>
                Login
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;