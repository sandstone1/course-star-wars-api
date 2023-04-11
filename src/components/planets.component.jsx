
/*
// 1 -
// coming from the navbar.component.jsx 2 -
// set up a basic functional component below and then let's go to the people.component.jsx
// file 1 -

// End of 1 -

import React from 'react';

// 2 -
// coming from the app-react-query-tutorial.js file
// import in the useQuery hook
// and useQuery is a hook that will help us manage our asynchronous data and let's go to 3 -
// below
import { useQuery } from 'react-query';
// End of 2 -


// 6 -
// coming from 5 - below
// import the Planet component
// and then go to 7 - below
import Planet from './planet.component';
// End of 6 -


// 4 -
// coming from 3 - below
// and make the function below asynchronous 
const fetchPlanets = async (  ) => {

    // we will use the fetch API to grab the data from the 3rd party API and save the result
    // in the const " response " as in the server response and remember to get the data from
    // the Star Wars API we have to pass in an endpoint and we can get that endpoint from the
    // Star Wars API website or https://swapi.dev/documentation and that endpoint is
    // " http swapi.dev/api/planets/ " and here we are requesting a list of planets and remember
    // to add " :// " to the endpoint and remember " fetch( 'http://swapi.dev/api/planets/' ); "
    // is asynchronous so we need to use the await keyword before fetch(); and by doing this we
    // will await or wait for the fetch API to go out and grab all the data before we store the
    // result in the const " response " 
    const response = await fetch( 'http://swapi.dev/api/planets/' );

    // now convert the json data into JavaScript or a JavaScript object and we can do that
    // by using the json method on the response object or " response.json(); " and save the
    // result to the const " data "
    const data = response.json();

    // and then let's return the data object
    return data;

    // so let's go to 5 - below

};
// End of 4 -


const Planets = () => {

    // 3 -
    // we need to pass in 2 arguments to useQuery(); and the first argument is a descriptive
    // name for our query and we will name this query " planets " and the second argument is
    // going to be an asynchronous function that will go and grab data from the Star Wars API
    // and let's call this function fetchPlanets and now let's make the fetchPlanets function
    // and let's go to 4 - above

    // 5 -
    // so by making fetchPlanets the second argument inside the useQuery hook or
    // " useQuery( 'planets', fetchPlanets ); " we are specifying that fetchPlanets is going
    // to go out and get the data and then the useQuery hook will manage the fetching for us
    // and cache the data for us and refresh the data in background when it need to do so
    // so from this construct or " useQuery( 'planets', fetchPlanets ); " we can extract
    // or destructure off 2 different things, one is the " data " or the data object that was
    // returned inside the fetchPlanets function and the second thing is the " status " and
    // status represents the status of the query and the status could tell us if the query
    // was successful or if the query is loading or if the query resulted in an error, etc.
    // and let's log " data " to the console and see what we get

    const { data, status } = useQuery( 'planets', fetchPlanets );

    console.log( data );

    // console.log( data ); results in:

    /*
        count: 60
        next: "http://swapi.dev/api/planets/?page=2"
        previous: null
        results: Array(10)
        0: {name: "Tatooine", rotation_period: "23", orbital_period: "304", diameter:
        "10465", climate: "arid", …}
        1: {name: "Alderaan", rotation_period: "24", orbital_period: "364", diameter:
        "12500", climate: "temperate", …}
        2: {name: "Yavin IV", rotation_period: "24", orbital_period: "4818", diameter:
        "10200", climate: "temperate, tropical", …}
        3: {name: "Hoth", rotation_period: "23", orbital_period: "549", diameter:
        "7200", climate: "frozen", …}
        4: {name: "Dagobah", rotation_period: "23", orbital_period: "341", diameter:
        "8900", climate: "murky", …}
        5: {name: "Bespin", rotation_period: "12", orbital_period: "5110", diameter:
        "118000", climate: "temperate", …}
        6: {name: "Endor", rotation_period: "18", orbital_period: "402", diameter:
        "4900", climate: "temperate", …}
        7: {name: "Naboo", rotation_period: "26", orbital_period: "312", diameter:
        "12120", climate: "temperate", …}
        8: {name: "Coruscant", rotation_period: "24", orbital_period: "368", diameter:
        "12240", climate: "temperate", …}
        9: {name: "Kamino", rotation_period: "27", orbital_period: "463", diameter:
        "19720", climate: "temperate", …}
        length: 10
            __proto__: Array(0)
        __proto__: Object
    */

    // and this is correct so everything is working as expected

    // and now that we have this data we can map through the results and manipulate the data as
    // needed

    // and remember the count property above says there are 60 planets but the Star Wars API
    // only send us 10 planets at a time and we can see above that to get the next 10 planets
    // we need to use this endpoint: " next: "http://swapi.dev/api/planets/?page=2" " and we
    // get go out and get the next 10 in a future lesson but for now let's stick with the 10
    // planets that we have

    // now let's output the status in the DOM and we will do " <p>{ status }</p> " below and
    // remember the status is the status of the query and if we save this file and return
    // to the home page or " localhost:3003 " we will see the following result:

    // initially status was equal to " loading " and then status quickly changed to " success "

    // and this is correct so everything is working as expected

    // and if there is an error or say we create an error by adding a d to the end of our
    // endpoint or " const response = await fetch( 'http://swapi.dev/api/planetsd/' ); " then
    // we will get the following result on the home page:

    // " error "

    // and this is correct so everything is working as expected

    // and if we get an " error " then we could display an error message to the user

    // so what we really want to do is check the " status " and if the status equals " loading "
    // then we could show a loading spinner and if the status equals " error " then we could
    // show an error message and if the status equals " success " then we could show the
    // data and let's comment out the status below and instead let's do a few different
    // " status " checks and we will use the logical AND operator ( && ) and Mozilla defines
    // this operator as follows:

    // " Syntax - expr1 && expr2
    // Description - If expr1 can be converted to true, then return expr2; else, return expr1 "

    // so if " status === 'error' " is true then the output will be
    // " <div>Error fetching data</div> " and if " status === 'error' " is false then the output
    // will be nothing since expr1 is false and a false value inside {} in react results in a null
    // value or an empty value

    // and now we can apply the same principals for " loading " and " success "

    // and after applying the success conditional below, we get the following result on the home
    // page:

    /*
        Planets
        Tatooine
        Alderaan
        Yavin IV
        Hoth
        Dagobah
        Bespin
        Endor
        Naboo
        Coruscant
        Kamino
    */

    // and this is correct so everything is working as expected

    // and remember we need to assign a key property to each " result " as we cycle through the
    // " results " and to do this we will create a custom component called " Planet " and let's
    // import this component in 6 - above

    // End of 3 -
    // End of 5 -

    // 7 -
    // coming from 6 - above
    // inside the Planet component below, make sure we pass in a key property and we will do
    // " key={ result.name } " and we can do " result.name " since each planet has a unique
    // name

    // next, let's style the Planet component so let's go to the index.css file 2 -
    // End of 7 -

    // 8 -
    // coming from the index.css file 2 -
    // so react query is (1) fetching the data from the Star Wars API and (2) then react query
    // is giving us the data object and the status and then once we have the data we are cycling
    // through the data using the map(); function and then outputting the data to the DOM in the
    // Planet component and now we need to do the same thing for the People component

    // and now let's copy this entire file and replace the People component with the code in this
    // file and then let's go to the people.component.jsx file 2 -
    // End of 8 -

    /*
    return (
        <div>
            <h2>Planets</h2>
            <p>{ /* status }</p>

            { /* loading status }
            {
                status === 'loading' && (

                    <div>Loading data</div>

                )
            }

            { /* error status }
            {
                status === 'error' && (

                    <div>Error fetching data</div>

                )
            }

            { /* success status }
            {
                status === 'success' && (

                    <div>
                    {
                        data.results.map( ( result ) => (

                            <Planet
                                key={ result.name }
                                planet={ result }
                            />

                         ) )
                    }
                    </div>

                )
            }

        </div>
    );

};

export default Planets;
*/









// ===============================








/*
// at the beginning of Tutorial #3, given all the notes, I created a new file below without
// the notes so we are starting fresh


// import in react and the useState hook
import React, { useState } from 'react';
// import in the useQuery hook
import { useQuery } from 'react-query';
// import the Planet component
import Planet from './planet.component';


// and make the function below asynchronous 
const fetchPlanets = async ( key, greeting, page ) => {

    // use the fetch API to grab the data from the Star Wars API
    const response = await fetch( `http://swapi.dev/api/planets/?page=${page}` );

    // convert the json data into JavaScript or a JavaScript object
    const data = response.json();

    // and then let's return the data object
    return data;

};


// create a functional component called Planets
const Planets = () => {

    // 9 -
    // coming from the App.js file 4 -
    // let's add a third argument to the useQuery hook below and this argument is an object that
    // represents the config in the react query dev tools window

    // and let's set the staleTime inside the third argument to 2000 milliseconds or
    // " staleTime : 2000 " and now a query will remain fresh for 2 seconds before it becomes
    // stale and remember that react query will only refetch when the data becomes stale
    
    // there are other things we can change in the config, such as " retry " which is set
    // to 3 by default

    // let's try changing cacheTime to 10 milliseconds from the default of 300000 milliseconds
    // so let's add " cacheTime : 10 " and change staleTime back to 0 or " staleTime : 0 " and
    // if we go to the home page we see that everytime we click on the planets' button we are
    // getting new data and not cached data and therefore the user experience is becoming worse
    // not better

    // before we move on, let's comment out " cacheTime : 10, "

    // we can also fire functions inside the third argument that represent different stages of
    // the request so, for example, whenever our status equals success we could say
    // " onSuccess : () => console.log( 'data fetched with no problems' ) " and if we go to
    // the home page and look inside the console we should see " data fetched with no problems "
    // and we do see this string so everything is working as expected

    // and there are more options that we can add to the third argument and for a full list see
    // the documents
    
    // so in this lesson we learned about the react query dev tools package and the config option
    // and in the next lesson we will learn how to pass query variables to the useQuery hook  

    // End of 9 -

    // 10 -
    // coming from the app-react-query-tutorial.js file
    // and to use query parameters inside the useQuery hook we change the first argument from
    // " planets " to an array or " [] " and the first argument inside the array is still the
    // name or key for the useQuery hook or " [ 'planets',  ] " and after the first argument
    // we can pass in as many items as we want and these items will subsequently be parameters
    // in the fetchPlanets function above so let's try this out by passing in a second item or
    // " [ 'planets', 'hello ninjas' ] " and then in the fetchPlanets function we will take
    // in 2 different parameters and we can call these parameters whatever we want or
    
    /*
    const fetchPlanets = async ( key, greeting ) => {

        // use the fetch API to grab the data from the Star Wars API
        const response = await fetch( 'http://swapi.dev/api/planets/' );

        // convert the json data into JavaScript or a JavaScript object
        const data = response.json();

        // and then let's return the data object
        return data;

    };
    */

    // so " greeting " inside the fetchPlanets function will be this item " 'hello ninjas' "
    // and we can test this out by logging out " greeting " in the console or

    /*
    const fetchPlanets = async ( key, greeting ) => {
        console.log( greeting );

        const response = await fetch( 'http://swapi.dev/api/planets/' );
        const data = response.json();
        return data;

    };
    */

    // and the result in the console is " hello ninjas "

    // and this is correct so everything is working as expected

    // so this is how we pass in different values to the fetchPlanets function but let's try
    // something a bit more useful so what if we pass in the page number for the results?
    // and if we go to the react query dev tools we can see that the next page is " page2 "
    // or " next: "http://swapi.dev/api/planets/?page=2" " and therefore if we want to get
    // the next 10 results then we have to add the query parameter " page=2 " to the end
    // of the endpoint so we could do the following:

    /*
    const { data, status } = useQuery( [ 'planets', 'hello ninjas', 2 ], fetchPlanets, {
    } );

    */

    // and

    /*
    const fetchPlanets = async ( key, greeting, page ) => {
        console.log( greeting );

        const response = await fetch( `http://swapi.dev/api/planets/?page=${ page }` );
        const data = response.json();
        return data;

    };

    */

    // and remember to use the backticks and then add in the placeholder or " ${ page } " and
    // then use string interpolation to get the value for the placeholder and then insert that
    // value into the string

    // and if we save this file and go to the home page, we will see the next 10 results and 
    // the next page in the react query dev tools console is now
    // " next: "http://swapi.dev/api/planets/?page=3" " and the previous page is now
    // " previous: "http://swapi.dev/api/planets/?page=1" "

    // and this is correct so everything is working as expected

    // and now instead of hard coding the number " 2 " below in the useQuery hook, let's make
    // the number dynamic by using the useState hook or
    // " const [ page, setPage ] = useState( 1 ); " and then remember to import the useState
    // hook above
    
    // and then let's change " 2 " in the useQuery hook to " page " so we are now using state
    // inside the useQuery hook

    // next let's add a few buttons below to change the page numbers ( see below for details )
    // and when we go to the home page, we see that everything is working as expected

    // and this is how we create a very crude pagination system using query variables and in the
    // next lesson we will learn how to paginate our date using a new hook

    /*
    // the useState hook will update our page numbers
    const [ page, setPage ] = useState( 1 );

    // End of 10 -


    // create a useQuery hook and get the data object and the status of the query
    const { data, status } = useQuery( [ 'planets', 'hello ninjas', page ], fetchPlanets, {

        // staleTime : 0,
        // cacheTime : 10,
        // onSuccess : () => console.log( 'data fetched with no problems' )

    } );

    console.log( data );

    // return some jsx
    return (
        <div>
            <h2>Planets</h2>

            <button onClick={ () => setPage( 1 ) } >Page 1</button>
            <button onClick={ () => setPage( 2 ) } >Page 2</button>
            <button onClick={ () => setPage( 3 ) } >Page 3</button>
            <button onClick={ () => setPage( 4 ) } >Page 4</button>
            <button onClick={ () => setPage( 5 ) } >Page 5</button>
            <button onClick={ () => setPage( 6 ) } >Page 6</button>

            { /* loading status }
            {
                status === 'loading' && (

                    <div>Loading data</div>

                )
            }

            { /* error status }
            {
                status === 'error' && (

                    <div>Error fetching data</div>

                )
            }

            { /* success status }
            {
                status === 'success' && (

                    <div>
                    {
                        data.results.map( ( result ) => (

                            <Planet
                                key={ result.name }
                                planet={ result }
                            />

                         ) )
                    }
                    </div>

                )
            }

        </div>
    );

};

export default Planets;
*/










// ===============================










// at the beginning of Tutorial #5, given all the notes, I created a new file below without
// the notes so we are starting fresh


// import in react and the useState hook
import React, { useState } from 'react';
// import in the usePaginatedQuery hook
import { usePaginatedQuery } from 'react-query';
// import the Planet component
import Planet from './planet.component';


// and make the function below asynchronous 
const fetchPlanets = async ( key, page ) => {

    // use the fetch API to grab the data from the Star Wars API
    const response = await fetch( `http://swapi.dev/api/planets/?page=${page}` );

    // convert the json data into JavaScript or a JavaScript object
    const data = response.json();

    // and then let's return the data object
    return data;

};


// create a functional component called Planets
const Planets = () => {

    // the useState hook will update our page numbers
    const [ page, setPage ] = useState( 1 );


    // 11 -
    // coming from the app-react-query-tutorial.js file
    // first, let's delete the string " 'hello ninjas' " inside the useQuery hook since we no
    // longer need this and then delete the corresponding parameter in the fetchPlanets function
    // above or " greeting " and now let's replace the useQuery hook with the usePaginatedQuery
    // hook or just replace " useQuery " with " usePaginatedQuery " and remember to import the
    // usePaginatedQuery hook above

    // now we are still using the fetchPlanets hook to grab the data and we are still using the
    // key " planets " and we will still pass through the " page " query varaible or query
    // parameter

    // and instead of destructuring off " data " and " status ", we will destructure off 3
    // things: (1) resolvedData (2) latestData and (3) status so this time around instead of
    // one single data item we have 2 data items and resolved data is data that has been
    // successfully fetched and we have access to and resolved data is the data that we
    // output and see on the webpage and the latest data is the data for ongoing queries and
    // the latest data does not include cached queries

    // so how does resolved data and latest data work together? when fetch data we will get
    // the first page of results and then output that data in the component and that data
    // represents " resolved data " and then usePaginatedQuery goes out and fetches the next
    // block of data and usePaginatedQuery does this in the background and the latest data
    // represents the new fetch that is going on in the background and initially while this
    // new fetch is ongoing the latest data value is equal to undefined but when this fetch
    // completes then the value of resolved data updates to match the value of latest data
    // and then again we output the resolved data to the template or component and this
    // process results in the user continuing to see the resolved data or current data
    // until we have updated the latest data and once we have updated the latest data then
    // the value of resolved data updates to match the value of latest data and this process
    // results in a really nice user experience

    // so let's use resolved data and latest data to add this functionality to our webpage
    // but first let's remove the hardcoded button elements below and let's change
    // " data.results.map( ( result ) => () ) " to
    // " resolvedData.results.map( ( result ) => () ) "

    // and let's save this file and go the home page and view the home page and we see that
    // the home page is still working as expected

    // the next thing we want to do is add some buttons so we can go to the next page or
    // the previous page and we do that inside the success status block of code and let's add
    // the page number in between the 2 buttons

    // for the previous page button, let's add an onClick event handler and inside the handler
    // we will use the setPage() function and inside the setPage() function let's use the
    // Math.max() function and this function takes in 2 numbers and returns the higher number
    // or " onClick={ () => setPage( ( oldValue ) => Math.max( oldValue - 1, 1 ) ) } "

    // for the next page button, let's revise our code to the following:
    // " onClick={ () => setPage( ( oldValue ) =>
    //  ( !latestData || !latestData.next ? oldValue : oldValue + 1 ) } " and here we are saying
    // if " !latestData || !latestData.next " evaluates to true then we stick with the old
    // value and if " !latestData || !latestData.next " evaluates to false then we add 1 to the
    // old value and remember ( from microsoft.com ) " The logical OR operator (||) returns the
    // boolean value true if either or both operands is true and returns false otherwise. " or
    // ( from w3 schools ) " Returns true if one of the statements is true " so !latestData
    // means we don't have data and !latestData.next means we don't have a next property and
    // if either of these statements is true then we stick with the old value; otherwise, if
    // both statements are false, meaning we do have data and we do have a next property then
    // we add 1 to the oldValue

    // now let's go to the home page and test this out

    // and we see that everything is working as expected

    // now when we reach the last set of results we want to disable the Next page button and
    // when we reach the first set of results we want to disable the Previous page button and
    // and the Previous page button will be disabled if we are on or at page 1 or
    // " disabled={ page === 1 } " and the Next page button will be disabled if we don't have
    // any latest data or if the latest data is undefined or if the next property on the
    // latestData does not exist or " disabled={ !latestData || !latestData.next } "

    // now let's go to the home page and test this out

    // and we see that everything is working as expected

    // when a button becomes disabled let's style the button differently to reflect the disabled
    // status and go to the index.css file 3 - to do this

    // now that we added a style for when a button becomes disabled let's go to the home page
    // and test this out but I did not like the style change so I left it out

    // and the net ninja said this is pretty much it for this series and he hopes we enjoyed
    // it

    // End of 11 -


    // create the usePaginatedQuery hook
    const { 
        resolvedData,
        latestData,
        status
    } = usePaginatedQuery( [ 'planets', page ], fetchPlanets, {} );

    // return some jsx
    return (
        <div>
            <h2>Planets</h2>

            { /* loading status */ }
            {
                status === 'loading' && (

                    <div>Loading data</div>

                )
            }

            { /* error status */ }
            {
                status === 'error' && (

                    <div>Error fetching data</div>

                )
            }

            { /* success status */ }
            {
                status === 'success' && (

                    <section>

                        { /* previous page button */ }
                        <button

                            onClick=
                                { 
                                    () => setPage( ( oldValue ) => Math.max( oldValue - 1, 1 ) )
                                }
                            disabled=
                                {
                                    page === 1
                                }
                        
                        >
                            Previous page
                        </button>

                        <span>{ page }</span>

                        { /* next page button */ }
                        <button
                        
                            onClick=
                                { 
                                    () => setPage( ( oldValue ) => ( !latestData || !latestData.next ? oldValue : oldValue + 1 ) )
                                }
                            disabled=
                                {
                                    !latestData || !latestData.next
                                }
                        
                        >
                            Next page
                        </button>

                        { /* map over API results */ }
                        <div>
                        {
                            resolvedData.results.map( ( result ) => (

                                <Planet
                                    key={ result.name }
                                    planet={ result }
                                />

                            ) )
                        }
                        </div>

                    </section>

                )
            }

        </div>
    );

};

export default Planets;


