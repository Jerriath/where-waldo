


//This function is used to create the points array that will be checked against the backend values
//Basically if any point (including the center) falls between the bounds of the character (backend values), the character will be marked as found
export const createPointsArray = (e) => {
    let bounds = document.querySelector(".gameLevel").getBoundingClientRect();
    console.log(bounds.left + " " + bounds.right + "      " + bounds.top + " " + bounds.bottom);
    let xCenter = e.clientX;
    let yCenter = e.clientY;
    let pointsArray = [[xCenter, yCenter]]
    pointsArray.push([xCenter - 25, yCenter - 25]);
    pointsArray.push([xCenter + 25, yCenter - 25]);
    pointsArray.push([xCenter - 25, yCenter + 25]);
    pointsArray.push([xCenter + 25, yCenter + 25]);
    let adjustedArray = adjustPointsArray(pointsArray, bounds);
    console.log(adjustedArray);
    return adjustedArray;
}


//Adjusts the x and y values of the points in the array to percentage values relative to the actual image; this is to make sure the some point on the image
//will send the same percentage coordinates to the backend no matter the clients' resolution
const adjustPointsArray = (pointsArray, bounds) => {
    const imageRangeX = bounds.right - bounds.left;
    const imageRangeY = bounds.bottom - bounds.top;
    let newPointsArray = pointsArray.map( (point) => {
        let newX = point[0] - bounds.left;
        let newY = point[1] - bounds.top;
        newX = Math.floor(newX * 1000 / imageRangeX) / 1000;
        newY = Math.floor(newY * 1000 / imageRangeY) / 1000;
        return [newX, newY];
    })
    return newPointsArray;
}   