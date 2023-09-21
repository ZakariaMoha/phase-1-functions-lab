function distanceFromHqInBlocks(blocks) {
  return Math.abs(blocks - 42);
}
function distanceFromHqInFeet(blocks) {
  const blocksFromHQ = distanceFromHqInBlocks(blocks);
  return blocksFromHQ * 264; 
}
function distanceTravelledInFeet(startblock,endblock) {
  const blocksTravelled = Math.abs(startblock - endblock);
  return blocksTravelled * 264; 
}
function calculatesFarePrice(startBlock, endBlock) {
const distanceInFeet = distanceTravelledInFeet(startBlock, endBlock);
if (distanceInFeet <= 400) {
    return 0; 
} else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
const extraFeet = distanceInFeet - 400;
return (extraFeet / 100) * 2; 
} else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
return 25; 
} else {
return 'cannot travel that far'; 
}
}
