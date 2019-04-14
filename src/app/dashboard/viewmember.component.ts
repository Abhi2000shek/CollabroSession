import { Component, OnInit } from '@angular/core';
import { Session, Member } from '../Model/Session';
import { CollabserviceService } from '../collabservice.service';

@Component({
  selector: 'app-viewmember',
  templateUrl: './viewmember.component.html',
  styleUrls: ['./vendor/bootstrap/css/bootstrap.min.css','./vendor/datatables/dataTables.bootstrap4.css', './vendor/fontawesome-free/css/all.min.css', './css/sb-admin.css']
})
export class ViewmemberComponent implements OnInit {
  public allmember: Member[];
  constructor(private q: CollabserviceService) { }

  ngOnInit() {
    this.q.GetMember().subscribe(memberdata => {
      this.allmember = memberdata;
    });
  }
  
}
