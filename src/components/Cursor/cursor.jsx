import React, { useEffect, useState } from 'react';
import styles from './cursor.module.css'; 

const CustomCursor = () => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateCursorPosition = (e) => {
            setCursorPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', updateCursorPosition);

        return () => {
            window.removeEventListener('mousemove', updateCursorPosition);
        };
    }, []);

    return (
        <div
            className={styles.customCursor} 
            style={{
                left: `${cursorPosition.x}px`,
                top: `${cursorPosition.y}px`,
            }}
        />
    );
};

export default CustomCursor;