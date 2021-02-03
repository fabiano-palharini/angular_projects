import { Injectable } from "@angular/core";
import { MovementCounterService } from "./movement-counter.service";

@Injectable()
export class UserService {
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  constructor(private movementCounterService: MovementCounterService) {}

  setToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.movementCounterService.increaseInactiveMovements();
  }

  setToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.movementCounterService.increaseActiveMovements();
  }
}
