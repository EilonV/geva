import { useEffect, useState } from 'react';
import vid from '../../assets/videos/hero final final.webm';

export const Hero = () => {
    const arr = ['sound design', 'game audio', 'music composition & production']
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
    })

    return (<div className="hero-wrapper full">
        <div className="hero">
            <video autoPlay muted loop playsInline preload="auto">
                <source src={vid} type="video/webm" />
            </video>
            <div className="hero-content">
                <h1>GEVA HASON</h1>
                <h2>{word}</h2>
            </div>
        </div>
    </div>
    )
}