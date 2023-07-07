import React, {Fragment} from 'react'
import NavBar from '../components/NavBar';
const Layout = ({children}) => {
  return (
      <div>
            <NavBar/>
                {children}
        </div>
  );
}

export default Layout;