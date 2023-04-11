
// 1 -
// coming from the planets.component.jsx 1 -
// set up a basic functional component below and now if we go to the homepage or
// " localhost:3003 " and click on the " People " button then we see the following
// result:

// People

// and this is correct so everything is working as expected

// and if I click on the " Planets " button then we see the following result:

// Planets

// and this is correct so everything is working as expected

// and the last thing we will do in this tutorial is style the application and let's use the
// index.css file to style our application and let's go to the index.css file 1 - now

// End of 1 -

// 2 -
// coming from the planets.component.jsx file 8 -
// replace the below code with the code from the planets.component.jsx file and now let's
// modify the code for the People component

// import in React
import React from 'react';
// import in the useQuery hook
import { useQuery } from 'react-query';
// import in the Person component
import Person from './person.component';


// create the fetchPeople function
const fetchPeople = async (  ) => {

    const response = await fetch( 'http://swapi.dev/api/people/' );

    const data = response.json();

    return data;

};

// create a functional component for People
const People = () => {

    // set up the useQuery hook
    const { data, status } = useQuery( 'people', fetchPeople );

    console.log( data );

    // console.log( data ); results in:

    /*
        count: 82
        next: "http://swapi.dev/api/people/?page=2"
        previous: null
        results: Array(10)
        0: {name: "Luke Skywalker", height: "172", mass: "77", hair_color: "blond",
        skin_color: "fair", …}
        1: {name: "C-3PO", height: "167", mass: "75", hair_color: "n/a",
        skin_color: "gold", …}
        2: {name: "R2-D2", height: "96", mass: "32", hair_color: "n/a",
        skin_color: "white, blue", …}
        3: {name: "Darth Vader", height: "202", mass: "136", hair_color: "none",
        skin_color: "white", …}
        4: {name: "Leia Organa", height: "150", mass: "49", hair_color: "brown",
        skin_color: "light", …}
        5: {name: "Owen Lars", height: "178", mass: "120", hair_color: "brown, grey",
        skin_color: "light", …}
        6: {name: "Beru Whitesun lars", height: "165", mass: "75", hair_color: "brown",
        skin_color: "light", …}
        7: {name: "R5-D4", height: "97", mass: "32", hair_color: "n/a",
        skin_color: "white, red", …}
        8: {name: "Biggs Darklighter", height: "183", mass: "84", hair_color: "black",
        skin_color: "light", …}
        9: {name: "Obi-Wan Kenobi", height: "182", mass: "77", hair_color: "auburn, white",
        skin_color: "fair", …}
        length: 10
            __proto__: Array(0)
        __proto__: Object
    */

    // and this is correct so everything is working as expected

    // and after applying the success conditional below, we get the following result on the home
    // page:

    /*
        Luke Skywalker
        Gender - male
        Birth year - 19BBY

        C-3PO
        Gender - n/a
        Birth year - 112BBY

        R2-D2
        Gender - n/a
        Birth year - 33BBY

        Darth Vader
        Gender - male
        Birth year - 41.9BBY

        Leia Organa
        Gender - female
        Birth year - 19BBY

        Owen Lars
        Gender - male
        Birth year - 52BBY

        Beru Whitesun lars
        Gender - female
        Birth year - 47BBY

        R5-D4
        Gender - n/a
        Birth year - unknown

        Biggs Darklighter
        Gender - male
        Birth year - 24BBY

        Obi-Wan Kenobi
        Gender - male
        Birth year - 57BBY
    */

    // and this is correct so everything is working as expected

    // and remember the second time we load the People component we don't see any kind of delay
    // or see the loading message and that is because we are using cashed data and the reason
    // we're using cached data is due to using the react query library

    // and in the background react query ( and the useQuery hook ) is refetching the data just
    // to see if there is an update and if there is an update then react query will fetch the
    // updated data and show the updated data instead

    // so this is the basics of the useQuery hook and in the next lesson we are going to learn
    // about the react query dev tools and we learn a little bit about configuring the useQuery
    // hook

    return (
        <div>
            <h2>People</h2>

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

                    <div>
                    {
                        data.results.map( ( result ) => (

                            <Person
                                key={ result.name }
                                person={ result }
                            />

                         ) )
                    }
                    </div>

                )
            }

        </div>
    );

};

export default People;


// End of 2 -



/*
import React from 'react';


const People = () => (

    <div>
        <h2>People</h2>
    </div>

);

export default People;
*/
