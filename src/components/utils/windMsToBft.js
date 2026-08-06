export const msToBft = (speed) => {
    const bftScale = [
        [0, 0.2],
        [0.3, 1.5],
        [1.6, 3.3],
        [3.4, 5.4],
        [5.5, 7.9],
        [8.0, 10.7],
        [10.8, 13.8],
        [13.9, 17.1],
        [17.2, 20.7],
        [20.8, 24.4],
        [24.5, 28.4],
        [28.5, 32.6],
        [32.7, 50],
    ];

    for (let bft = 0; bft < bftScale.length; bft++) {
        const [min, max] = bftScale[bft];

        if (speed >= min && speed <= max) {
            return bft;
        }
    }

    return 0;
};