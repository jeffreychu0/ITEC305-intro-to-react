import TabButton from "../TabButton/TabButton"


export default function Examples({title, children, ...props}) {
    
    return (
        <section {...props}>
            <h2>{title}</h2>
            {children}
        </section>
    )
}