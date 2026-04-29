// jsx: javascript syntax extension

import { CORE_CONCEPTS, EXAMPLES } from './data';
import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcept/CoreConcept';
import TabButton from './components/TabButton/TabButton';
import { useState } from 'react'; // called a hook to work with variables
import CoreConcepts from './components/CoreConcept/CoreConcepts';
import Section from './components/Section';
import Examples from './components/Examples';

// rules about hooks: 
//functions only called in another react hook
// needs to be in the top level of a react component (not in functions)
//

// function UserDiv() {
//     const user = { firstName: "Jeffrey", lastName: "Chu", age: 19 }

//     return (
//         <div>
//             <h2> Name: {user.firstName} {user.lastName} </h2>
//             <h2> Age: {user.age} </h2>
//         </div>
//     )
// }

function App() {
    console.log("App is Rendered")

    return (
        <>
            <Header />
            <main>
                <CoreConcepts/>
                <Examples/>
            </main>
        </>
    );
}

export default App;