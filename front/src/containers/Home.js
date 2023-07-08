import React from 'react'
import {Link} from 'react-router-dom'
const Home = () => {
  return (
      <div className='container'>
          <div className='mt-5 p-5 bg-light'>
              <h1 className='display-4'>Hi there!</h1>
              <p className='lead'>You may authenticate yourself using sessions!</p>
              <hr className='my-4'/>
              <p>Click the Log In button</p>
              <Link className='btn btn-primary btn-lg' to='/login' role='button'>Login</Link>
          </div>
      </div>
  );
}

export default Home;