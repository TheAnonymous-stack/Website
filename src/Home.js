import { useState } from 'react';
const Home = () => {
    //let name = 'mario';
    const [name, setName] = useState('mario');
    const handleClick = () => {
       setName('luigi');
    }

    const handleClickAgain = (name) => {
        console.log("hello "+name);

    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{ name }</p>
            <button onClick={handleClick}>Click me</button>
            <button onClick={() => handleClickAgain('mario')}>Click me again</button>
        </div>
     );
}
 
export default Home ;