import './TabButton.css'

// Children is a special property in the props
function TabButton({children, onSelect, isSelected, ...props}) {
    return (
        <li>
            <button {...props}>{children}</button>
        </li>
    )
}

export default TabButton;