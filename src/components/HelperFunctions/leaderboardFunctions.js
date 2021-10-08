//Function to take a firestore snapshot as an input and return an array of score objects (each with a name att. and time att.)
export const processScores = async (snapshot) => {
    let returnArray = [];
    let index = 0;
    await snapshot.forEach( (doc) => {
        returnArray[index] = {
            name: doc.id,
            time: doc.data().time
        }
        index++;
    })
    returnArray.sort(sortFunction);
    return returnArray;
}

//Sorts the array by time completed
const sortFunction = (a, b) => {
    if (a.time > b.time) {
        return 1;
    }
    else if (a.time < b.time) {
        return -1
    }
    else {
        return 0;
    }
}