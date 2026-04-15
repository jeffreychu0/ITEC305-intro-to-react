// This is still props, but now its destructured
// The other option is to do (props) and use props.image, etc
function CoreConcept({ image, title, description }) {
    return (
        <li>
            <img src={image} alt={image} />
            <h3>{title}</h3>
            <p>{description}</p>
        </li>
    )
}

export default CoreConcept;