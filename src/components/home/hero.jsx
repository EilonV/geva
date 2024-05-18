import { useEffect, useState } from 'react';
import vid from '../../assets/videos/Let Sleeping Dogs Lie - Blissfully Unaware.mp4';

export const Hero = () => {
    const arr = ['sound design', 'game audio', 'music composition']
    const [word, setWord] = useState(arr[0])

    useEffect(() => {
        const interval = setInterval(() => {
            setWord(prevWord => {
                const currentIndex = arr.indexOf(prevWord)
                const nextIndex = (currentIndex + 1) % arr.length
                return arr[nextIndex];
            });
        }, 2000)

        return () => clearInterval(interval);
    }, [])

    return (<div className="hero-wrapper full">
        <div className="hero">
            {/* <video autoPlay muted loop>
                <source src={vid} type="video/mp4" />
            </video> */}
            <div className="hero-content">
                <h2>{word}</h2>
                <h1>GEVA HASON</h1>
            </div>
        </div>
    </div>
    )
}