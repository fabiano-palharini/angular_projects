export class MovementCounterService {
  movementToActiveCounter : number = 0;
  movementToInactiveCounter : number = 0;

  increaseActiveMovements() {
    this.movementToActiveCounter++;
    console.log(this.movementToActiveCounter)
  }

  increaseInactiveMovements() {
    this.movementToInactiveCounter++;
    console.log(this.movementToInactiveCounter)
  }
}
