// jsx: javascript syntax extension

import { CORE_CONCEPTS, EXAMPLES } from './data';
import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcept/CoreConcept';
import TabButton from './components/TabButton/TabButton';
import { useState } from 'react'; // called a hook to work with variables
import CoreConcepts from './components/CoreConcept/CoreConcepts';
import Examples from './components/Example/Examples';

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
    const [selectedTopic, setSelectedTopic] = useState()

    let tabContent = "Please Select A Button"

    function handleSelect(selectedTopic) {
        setSelectedTopic(selectedTopic)
        console.log(selectedTopic)
    }

    if (selectedTopic) {
        tabContent = (
        <div id='tab-content'>
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
                <code>
                    {EXAMPLES[selectedTopic].code}
                </code>
            </pre>
        </div>
        )
    }

    return (
        <>
            <Header />
            <main>
                <CoreConcepts/>
                <Examples title="Examples" id="examples">
                    <menu>
                        <TabButton className={selectedTopic === "components" ? 'active' : ''} onClick={() => handleSelect("components")}>Components</TabButton>
                        <TabButton className={selectedTopic === "jsx" ? 'active' : ''} onClick={() => handleSelect("jsx")}>JSX</TabButton>
                        <TabButton className={selectedTopic === "props" ? 'active' : ''} onClick={() => handleSelect("props")}>Props</TabButton>
                        <TabButton className={selectedTopic === "state" ? 'active' : ''} onClick={() => handleSelect("state")}>State</TabButton>
                    </menu>
                    {tabContent}
                </Examples>
            </main>
        </>
    );
}

export default App;