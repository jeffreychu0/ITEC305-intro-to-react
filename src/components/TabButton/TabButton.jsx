import './TabButton.css'

// Children is a special property in the props
function TabButton({children, onSelect, isSelected}) {
    console.log("Tab is Rendered")

    function handleClick() {
        console.log("Hello World");
    }

    return (
        <li>
            <button className = {isSelected ? 'active' : ''} onClick={onSelect}>{children}</button>
        </li>
    )
}

export default TabButton;