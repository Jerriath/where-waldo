//Function to take a firestore snapshot as an input and return an array of score objects (each with a name att. and time att.)
export const processScores = async (snapshot) => {
    const returnArray = [];
    let index = 0;
    await snapshot.forEach( (doc) => {
        returnArray[index] = {
            name: doc.id,
            time: doc.data().time
        }
        index++;
    })
    return returnArray;
}