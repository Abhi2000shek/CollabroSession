import { Component, OnInit } from '@angular/core';
import { Session, Member } from '../Model/Session';
import { CollabserviceService } from '../collabservice.service';

@Component({
  selector: 'app-addmember',
  templateUrl: './addmember.component.html',
  styleUrls: ['./vendor/bootstrap/css/bootstrap.min.css', './vendor/fontawesome-free/css/all.min.css', './css/sb-admin.css']
})
export class AddmemberComponent implements OnInit {
  public allmember: Member[];
  constructor(private q: CollabserviceService) { }

  ngOnInit() {

  }
  addmem(cd) {
    this.q.AddData(cd.value);
  }
}

