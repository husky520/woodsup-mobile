import { AfterViewInit, Component, OnInit } from '@angular/core';
import { JobData } from '../../interface/job.interface';
import { jobsData } from '../../mock/jobs.data';

@Component({
  selector: 'join-us-page',
  templateUrl: 'join-us.component.html',
  styleUrls: ['join-us.component.scss'],
})
export class JoinUsComponent implements OnInit, AfterViewInit {

  public jobsData: JobData[];

  ngOnInit(): void {
    this.jobsData = jobsData;
  }

  ngAfterViewInit(): void {
  }
}
