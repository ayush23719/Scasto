import React, { useEffect, useState } from 'react';
import '../Styles/Background.css'
const WORDS = ['HTML', 'CSS', 'JavaScript', 'Node.js', 'React', 'PHP', 'jQuery', 'Firebase', 'MySQL'];

function Background() {
    const [words, setWords] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            const newWords = [...words];

            for (let i = 0; i < 3; i++) {
                newWords.push({
                    word: WORDS[Math.floor(Math.random() * WORDS.length)],
                    x: Math.random() * window.innerWidth,
                    y: -Math.random() * window.innerHeight - 50
                });
            }

            setWords(newWords);
        }, 1000);

        return () => clearInterval(interval);
    }, [words]);

    return (
        <div className="word-loop">
            {words.map((word, i) => (
                <span
                    className="word"
                    key={i}
                    style={{ left: word.x, top: word.y, animationDelay: `${i * 0.1}s`, marginTop: '-30px' }}
                >
                    {word.word}
                </span>
            ))}
        </div>
    );
}

export default Background;
