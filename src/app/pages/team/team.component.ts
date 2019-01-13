import { AfterViewInit, Component, OnInit } from '@angular/core';
import { TeamData } from '../../interface/team.interface';
import { JobData } from '../../interface/Job.interface';
import { teamData1, teamData2 } from '../../mock/team.data';
import { jobsData } from '../../mock/jobs.data';

@Component({
  selector: 'team-page',
  templateUrl: 'team.component.html',
  styleUrls: ['team.component.scss'],
})
export class TeamComponent implements OnInit, AfterViewInit {

  public team1: TeamData[];
  public team2: TeamData[];
  public jobsData: JobData[];

  public tabIndex: number;

  ngOnInit(): void {
    this.team1 = teamData1;
    this.team2 = teamData2;
    this.jobsData = jobsData;
    this.tabIndex = 1;
  }

  ngAfterViewInit(): void {
  }

  switchTab() {
    this.tabIndex = this.tabIndex === 1 ? 2 : 1;
  }
}
