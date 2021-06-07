/**
 * Libraries
 */

import * as React from 'react';
  
export const useInterval = (callback, delay) => {
    const savedCallback = React.useRef(null);

    // Remember the latest function.
    React.useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    React.useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}
