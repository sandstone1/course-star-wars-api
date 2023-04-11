
// 1 -
// coming from the app.js file 1 -
// first, let's import in react
import React from 'react';

// 3 -

// need to first install the material icon package
// #4
// material icons: " Rogers-iMac:react_query Home$ npm install @material-ui/core " and
// this will include material icons in our react query tutorial project
// TUTORIAL 5 - Pagination

// first,
// (1) we need to import in material icon font package or
// " import LanguageIcon from '@material-ui/icons/Language'; " and then

// (2) add <LanguageIcon /> for the planets icon and <PersonIcon /> for the people
// icon and then

// (3) add the following link in the head section of the index.html file
// " <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"> "
import LanguageIcon from '@material-ui/icons/Language';
import PersonIcon from '@material-ui/icons/Person';
// End of 3 -


// and then let's create a functional component and then add some html or jsx to the
// component and what we want to do is if we click on the planets' button or the people button
// then we will update the related state inside the App component, meaning that if we click on
// the planets' button then we will show the planets' component and if we click on the
// people button then we will show the people component

// so go back to the App.js file 2 - and add the NavBar component

// End of 1 -


// 2 -
// coming from the App.js file 3 -
// first, destructure the " setPage " property and then set up the onClick event for setPage
// and now let's go to the planets.components.jsx file 1 -

// End of 2 -

const NavBar = ( { setPage } ) => (

    <nav>

        <button
            onClick={ () => setPage( 'planets' ) }
        >
            <LanguageIcon 
                style=
                {
                    {                    
                        marginRight : 8,
                        
                        fontSize    : 30,
                        fill        : "rgba( 204, 204, 204, 1 )",

                        verticalAlign : -6
                    }
                }
            />
            Planets
        </button>
        <button
            onClick={ () => setPage( 'people' ) }
        >
            <PersonIcon
                style=
                {
                    {                    
                        marginRight : 6,
                        
                        fontSize    : 30,
                        fill        : "rgba( 204, 204, 204, 1 )",

                        verticalAlign : -6
                    }
                }
            />
            People
        </button>
    </nav>

);

export default NavBar;
