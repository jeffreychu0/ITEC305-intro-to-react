import './TabButton.css'

function handleClick() {

}

// Children is a special property in the props
function TabButton({children}) {
    function handleClick() {
        console.log("Hello World");
    }

    return (
        <li>
            <button onClick={handleClick}>{children}</button>
        </li>
    )
}

export default TabButton;