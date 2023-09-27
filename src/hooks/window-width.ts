import { useEffect, useState } from 'react';

export const useWindowWidth = (width: number) => {
    const [isDevice, setIsDevice] = useState(false)

    useEffect(() => {
        const handleResize = () => {
        if (window.innerWidth < width) {
            setIsDevice(true);
        } else {
            setIsDevice(false);
        }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);
    
    return { isDevice };
};


