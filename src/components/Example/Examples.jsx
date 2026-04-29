import TabButton from "../TabButton/TabButton"
import './examples.css'

export default function Examples() {
    
    return (
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
    )
}