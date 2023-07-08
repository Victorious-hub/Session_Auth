import React, {useEffect,Fragment} from 'react'
import NavBar from '../components/NavBar';
import {connect} from 'react-redux'

const Layout = ({children}) => {

    return (
      <div>
            <NavBar/>
                {children}
        </div>
  );
}
export default Layout;