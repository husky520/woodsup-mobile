import { AfterViewInit, Component, OnInit } from '@angular/core';
import { TeamData } from '../../interface/team.interface';
import { JobData } from '../../interface/Job.interface';
import { teamData } from '../../mock/team.data';
import { jobsData } from '../../mock/jobs.data';

@Component({
  selector: 'team-page',
  templateUrl: 'team.component.html',
  styleUrls: ['team.component.scss'],
})
export class TeamComponent implements OnInit, AfterViewInit {

  public team: TeamData[];
  public jobsData: JobData[];

  ngOnInit(): void {
    this.team = teamData;
    this.jobsData = jobsData;
  }

  ngAfterViewInit(): void {
  }
}
