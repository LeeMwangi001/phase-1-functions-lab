// Code your solution in this file!
function distanceFromHqInBlocks(location){
    const hqDistance = 42;
    return Math.abs(location - hqDistance);
}
function distanceFromHqInFeet(location){
    const blocks = distanceFromHqInBlocks(location);
    return blocks * 264;
}

function distanceTravelledInFeet(start,end){
    const distance = Math.abs(end - start);
    return distance * 264;
}

function calculatesFarePrice(start,destination){
    const distance = distanceTravelledInFeet(start,destination);
    
    if(distance <= 400){
        return 0;
    }
        else if (distance > 400 && distance <= 2000) {
            return 0.02 * (distance - 400) ;
        }
        else if (distance > 2000 && distance <= 2500) {
            return 25;
        }
        
        else {
            return 'cannot travel that far';
        }
}
