import './CoreConcept.css'

// This is still props, but now its destructured
// The other option is to do (props) and use props.image, etc

// Separation of Concerns (Components)
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