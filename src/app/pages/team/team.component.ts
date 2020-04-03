import { AfterViewInit, Component, OnInit } from '@angular/core';
import { TeamData } from '../../interface/team.interface';
import { JobData } from '../../interface/job.interface';
import { jobsData } from '../../mock/jobs.data';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/internal/operators';

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

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.jobsData = jobsData;
    this.tabIndex = 1;

    this.http.get('/assets/data/team.json').pipe(take(1)).subscribe((res: any) => {
      if (res && res.teamData1 && res.teamData2) {
        this.team1 = res.teamData1;
        this.team2 = res.teamData2;
      }
    });
  }

  ngAfterViewInit(): void {
  }

  switchTab() {
    this.tabIndex = this.tabIndex === 1 ? 2 : 1;
  }
}
