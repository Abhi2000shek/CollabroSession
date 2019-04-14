import { Component, OnInit } from '@angular/core';
import { CollabserviceService } from '../collabservice.service';
import { Session } from '../Model/Session';
import { from } from 'rxjs';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./vendor/bootstrap/css/bootstrap.min.css', './vendor/fontawesome-free/css/all.min.css', './css/sb-admin.css']
})
export class DashboardComponent implements OnInit {
  public allsession: Session[];
  constructor(private q: CollabserviceService) { }

  ngOnInit() {
    this.q.GetData().subscribe(data => {
      this.allsession = data;
    })
  }

}
