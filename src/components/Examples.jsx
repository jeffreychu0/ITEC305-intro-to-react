import { useState } from 'react'; // called a hook to work with variables
import { EXAMPLES } from '../data';
import TabButton from './TabButton/TabButton';
import Section from './Section';
import Tabs from './Tabs';

export default function Examples() {
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
        <Section title="Examples" id="examples">
            <Tabs buttons={
                <>
                    <TabButton className={selectedTopic === "components" ? 'active' : ''} onClick={() => handleSelect("components")}>Components</TabButton>
                    <TabButton className={selectedTopic === "jsx" ? 'active' : ''} onClick={() => handleSelect("jsx")}>JSX</TabButton>
                    <TabButton className={selectedTopic === "props" ? 'active' : ''} onClick={() => handleSelect("props")}>Props</TabButton>
                    <TabButton className={selectedTopic === "state" ? 'active' : ''} onClick={() => handleSelect("state")}>State</TabButton>
                </>
            }>
                {tabContent}
            </Tabs>

        </Section>
    )
}