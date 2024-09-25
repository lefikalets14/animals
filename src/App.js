import './App.css';
import { useState } from "react";
import AnimalShow from "./AnimalShow";

function getRandomAnimal() {
    const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];

    return animals[Math.floor(Math.random() * animals.length)]
}


function App() {
    //function makeArray() {
    //    return [1,10,32,40]
    //}

    //const myArray = makeArray();
    //const firstElement = myArray[0];
    //const secondElement = myArray[1];

    //const [firstElement, secondElement, shit3] = makeArray();
    //console.log(firstElement, secondElement, shit3);

    const [animals, setAnimals] = useState([]);

    const handleClick = () =>  {
        setAnimals([...animals, getRandomAnimal()]);
    };

    const renderedAnimals = animals.map((animal, index) => {
        return <AnimalShow type={animal} key={index} />
    });

    return (
        <div className='app' >
            <button onClick={handleClick}>Add Animal</button>
            <div className='animal-list' > {renderedAnimals} </div>
        </div>
    );

//    return (
//       <div>
//            <button onClick={() => console.log('Button was Clicked')} >
//                Add Animal
//            </button>
//        </div>
//   );
}

export default App;