/**
 * Created by BlisS on 22/03/17.
 */
import React from 'react';
import {Link} from 'react-router';


const Header = (...props) => {
    return (
      <div className="nav">
        <Link to="/" activeClassName="active">Home</Link>
        {" | "}
        <Link to="list" activeClassName="active">Lista</Link>
      </div>
    );
};

Header.propTypes = {};

export default Header;
