
export const frameScore = (
    frameNum,
    prevScore,
    f1s1,
    f1s2,
    f1s3,
    f2s1,
    f2s2,
    f3s1
) => {
    if (frameNum < 9) {
        if (f1s1 === 'x') {
            if (f2s1 === 'x' && f3s1 === 'x') {
                return parseInt(prevScore) + 30;
            }
            if (f2s1 === 'x' && f3s1 !== 'x') {
                return parseInt(prevScore) + 20 + parseInt(f3s1);
            }
            if (f2s2 === '/') {
                return parseInt(prevScore) + 20;
            }
            else {
                return parseInt(prevScore) + 10 + parseInt(f2s1) + parseInt(f2s2);
            }
        }
        if (f1s2 === '/') {
            if (f2s1 === 'x') {
                return parseInt(prevScore) + 20;
            }
            else {
                return parseInt(prevScore) + 10 + parseInt(f2s1);
            }
        }
        else {
            return parseInt(prevScore) + parseInt(f1s1) + parseInt(f1s2);
        }

    }
    if (frameNum === 9) {
        if (f1s1 === 'x') {
            if (f2s1 === 'x' && f2s2 === 'x') {
                return parseInt(prevScore) + 30;
            }
            if (f2s1 === 'x' && f2s2 !== 'x') {
                return parseInt(prevScore) + 20 + parseInt(f2s2);
            }
            if (f2s2 === '/') {
                return parseInt(prevScore) + 20;
            }
            else {
                return parseInt(prevScore) + 10 + parseInt(f2s1) + parseInt(f2s2);
            }
        }
        if (f1s2 === '/') {
            if (f2s1 === 'x') {
                return parseInt(prevScore) + 20;
            }
            else {
                return parseInt(prevScore) + 10 + parseInt(f2s1);
            }
        }
        else {
            return parseInt(prevScore) + parseInt(f1s1) + parseInt(f1s2);
        }
    }
    if (frameNum === 10) {
        if (f1s1 === 'x') {
            if (f1s2 === 'x') {
                if (f1s3 === 'x') {
                    return parseInt(prevScore) + 30;
                }
                else {
                    return parseInt(prevScore) + 20 + parseInt(f1s3);
                }
            }
            if (f1s3 === '/') {
                return parseInt(prevScore) + 20;
            }
            else {
                return parseInt(prevScore) + 10 + parseInt(f1s2) + parseInt(f1s3);
            }
        }
        if (f1s2 === '/') {

            if (f1s3 === 'x') {
                return parseInt(prevScore) + 20;
            }
            else {
                return parseInt(prevScore) + 10 + parseInt(f1s3);
            }
        }
        else {
            return parseInt(prevScore) + parseInt(f1s1) + parseInt(f1s2);
        }
    }
};