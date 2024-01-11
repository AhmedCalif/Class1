function calculateDistance(
    startX: number, startY: number, 
    endX: number, endY: number
): number {
    const horizontalDistance = endX - startX;
    const verticalDistance = endY - startY;
    return Math.sqrt(horizontalDistance * horizontalDistance + verticalDistance * verticalDistance);
}
console.log(calculateDistance(10, 3, 5, 2));