import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';

export default function Home({ color, size }) {

    const [letters, setLetters] = useState('100px');

    useEffect(_ => {

        setTimeout(_ => {
            setLetters('10px');
        }, 2000);

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