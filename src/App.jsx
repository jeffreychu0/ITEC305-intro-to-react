// jsx: javascript syntax extension

import { CORE_CONCEPTS, EXAMPLES } from './data';
import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcept/CoreConcept';
import TabButton from './components/TabButton/TabButton';
import { useState } from 'react'; // called a hook to work with variables

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
        <div>
            <Header />
            <main>
                <section id="core-concepts">
                    <h2>Time to get started!</h2>
                    <ul>
                        <CoreConcept
                            {
                            ...CORE_CONCEPTS[0]
                            }
                        />
                        <CoreConcept
                            {
                            ...CORE_CONCEPTS[1]
                            }
                        />
                        <CoreConcept
                            {
                            ...CORE_CONCEPTS[2]
                            }
                        />
                        <CoreConcept
                            {
                            ...CORE_CONCEPTS[3]
                            }
                        />
                        {/* {
                            CORE_CONCEPTS.map((concept) => {
                                return <CoreConcept {...concept} />
                            })
                        } */}
                    </ul>
                </section>
                <section id="examples">
                    <h2>Examples</h2>
                    <menu>
                        <TabButton onSelect={() => { handleSelect("components") }} isSelected={selectedTopic === "components"}>Components</TabButton>
                        <TabButton onSelect={() => { handleSelect("jsx") }} isSelected={selectedTopic === "jsx"}>JSX</TabButton>
                        <TabButton onSelect={() => { handleSelect("props") }} isSelected={selectedTopic === "props"}>Props</TabButton>
                        <TabButton onSelect={() => { handleSelect("state") }} isSelected={selectedTopic === "state"}>State</TabButton>
                    </menu>
                    {tabContent}
                </section>
            </main>
        </div>
    );
}

export default App;