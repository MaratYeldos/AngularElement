import { Injectable } from '@angular/core';
import {Achievement} from "../models/achievement.model";

@Injectable({
  providedIn: 'root'
})
export class AchievementService {
  achievements: Achievement[] = [
    new Achievement('30', 'Clients'),
    new Achievement('300+', 'Taken business legalities'),
    new Achievement('8', 'Years of Journey'),
  ]
  constructor() { }

  getAchievements() {
    return this.achievements.slice();
  }
}
