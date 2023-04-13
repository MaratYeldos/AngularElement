import { Component, OnInit } from '@angular/core';
import {AchievementService} from "../../../service/achievement.service";
import {Achievement} from "../../../models/achievement.model";

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.scss']
})
export class CountComponent implements OnInit {
  achievements: Achievement[] | any = [];
  constructor(private achievementService: AchievementService) { }

  ngOnInit(): void {
    this.achievements = this.achievementService.getAchievements();
  }

}
