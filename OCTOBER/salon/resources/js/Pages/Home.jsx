import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home({ color, size }) {

    const [letters, setLetters] = useState('100px');

    const url = 'http://salon.test/letters';

    useEffect(_ => {

        // setInterval(_ => {
                
                axios.get(url).then(res => {
    
                    setLetters(res.data.valueSize);
    
                });
        // }, 10000);

    }, []);


    return (
        <div>
            <h1 style={

                {
                    color,
                    fontSize: size,
                    fontFamily: 'monospace',
                    letterSpacing: letters,
                    transition: 'all 1s ease'
                }

            }>Home</h1>
        </div>
    );

}