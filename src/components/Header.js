import React from 'react';

function Header({title}) {
    return (
        <nav>
            <div className="nav-wrapper light-blue darken-2">
                <a href="#!" className="brand-logo">{title}</a>
            </div>
        </nav>
    );
}
 
export default Header;