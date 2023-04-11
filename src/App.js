
/*
import React, { useState } from 'react';
import NavBar from './components/navbar.component';
import Planets from './components/planets.component';
import People from './components/people.component';

const App = () => {

    // 1 -
    // coming from the app-react-query-tutorial.js file
    // let's add an h1 and div tag below and inside the div we will either show the planet
    // component or the people component and let's go to the navbar.jsx file 1 -
    // End of 1 -


    // 3 -
    // coming from 2 - below

    // from https://daveceddia.com/usestate-hook-examples/
    // " useState returns an array with 2 elements, and we’re using ES6 destructuring
    // to assign names to them. The first element is the current value of the state, and the
    // second element is a state setter function – just call it with a new value, and the state
    // will be set and the component will re-render. "

    // to handle page state we will use the useState hook and set the default value to the
    // planets page and remember the planets page is a separate component and then down below
    // let's use a ternary operator to evaluate " page " and then based on that result we will
    // show either the planets' component or the people componet
    const [ page, setPage ] = useState( 'planets' );

    // and now let's flash out the Planets' component and the People component but first let's
    // import both components above and then we need to pass the setPage prop to the NavBar
    // component below and set it equal to setPage function above and then go to the navbar.jsx
    // file 2 -

    // End of 3 -


    return (

        // 2 -
        // coming from the navbar.jsx file 1 -
        // let's add the NavBar component below and remember we need to import in the NavBar
        // component at the top of this file and now let's open the integrated terminal and
        // type the following to spin up the local development server:

        // Rogers-iMac:react_query Home$ npm start

        // and this results in:

        // " Compiled successfully!

        // You can now view react_query in the browser.

        // Local:            http://localhost:3003
        // On Your Network:  http://10.210.71.67:3003

        // Note that the development build is not optimized.
        // To create a production build, use npm run build. "

        // and if I go to " localhost:3003 " then I see the home page for this application and
        // this is correct so everything is working as expected
        
        // and the next thing we want to do is hook up the NavBar component functionality so that
        // if we click on the planets' button then we will show the planets' component below and
        // if we click on the people button then we will show the people component below and to
        // make this happen we will add some state so that we can keep track of which button a
        // user clicks ( i.e. the planets' button or the people button )  and let's go to 3 -
        // above

        // End of 2 -

        <div className="app">

            <h1>Star Wars Info</h1>

            <NavBar
                setPage={ setPage }
            />

            <div className="app--content">
            {
                page === 'planets' ? (
                    <Planets /> 
                ) : (
                    <People />
                )
            }
            </div>

        </div>

    );

};

export default App;
*/






// ===============================








// at the beginning of Tutorial #3, given all the notes, I created a new file below without
// the notes so we are starting fresh


import React, { useState } from 'react';
import NavBar from './components/navbar.component';
import Planets from './components/planets.component';
import People from './components/people.component';


// 4 -
// coming from the app-react-query-tutorial.js
// import in react query dev tools
import { ReactQueryDevtools } from 'react-query-devtools';

// next we need to render these dev tools to the DOM and we want to render the react query dev
// tools adjancent to the App and not inside the App and let's add the ReactQueryDevtools
// package below the App div and add the initialIsOpen property and set it equal to false so
// that by default we don't see the react query dev tools on the screen when we open the app
// and then next we need to surround the app div and the ReactQueryDevtools component in one
// top level element so let's add a fragment below and the fragment is basically an empty
// element and it will serve as the top level elemnent

// and if we save this file and go to our home page then we will see in the bottom left corner
// a react query icon and if we click on the icon then the react query dev tools window will
// open up at the bottom of the page

// and we can control how long the data stays fresh for and we control that in the config box in
// the react query dev tools window and if we go to config and click on that box we see:

/*
▶ config 15 items
cacheTime: 300000
enabled: true
notifyOnStatusChange: true
queryFn:
queryKeySerializerFn:
refetchOnMount: true
refetchOnReconnect: true
refetchOnWindowFocus: true
retry: 3
retryDelay:
staleTime: 0
structuralSharing: true
*/

// and we see that the " staleTime " is 0 but if we want to want for 2000 milliseconds before
// our data goes stale then we can do that in the useQuery hook so let's go to the
// planets.component.jsx file 9 - and update the useQuery hook

// End of 4 -


const App = () => {

    const [ page, setPage ] = useState( 'planets' );

    return (

        <div className="wrapper">

            <div className="app">

                <h1>Star Wars Info</h1>

                <NavBar
                    setPage={ setPage }
                />

                <div className="app--content">
                {
                    page === 'planets' ? (
                        <Planets /> 
                    ) : (
                        <People />
                    )
                }
                </div>

            </div>

            <ReactQueryDevtools initialIsOpen={ false } />

        </div>

    );

};

export default App;



