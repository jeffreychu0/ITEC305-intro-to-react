// Goal: make a new component called header:
import reactImg from './assets/react-core-concepts.png';

const reactDescription = ['Important', 'Crucial', 'Core'];
const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
}

function Header() {
    const description = reactDescription[getRandomInt(3)]

    return (
        <header>
            <img src={reactImg} alt="Stylized atom" />
            <h1>React Essentials</h1>
            <p>
                {description} Fundamental React concepts you will need for almost any app you are
                going to build!
            </p>
        </header>
    );
}

export default Header;