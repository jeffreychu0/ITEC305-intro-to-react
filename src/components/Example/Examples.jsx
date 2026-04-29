import TabButton from "../TabButton/TabButton"
import './examples.css'

export default function Examples({title, children, ...props}) {
    
    return (
        <section {...props}>
            <h2>{title}</h2>
            {children}
        </section>
    )
}