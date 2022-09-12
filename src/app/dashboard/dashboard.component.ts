import {Component, OnInit} from '@angular/core';
import {DashboardService} from "../service/dashboard.service";
import {User} from "../model/user";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user: User;

  constructor(private route: ActivatedRoute,
              private router: Router, private dashboardService: DashboardService) {
  }

  ngOnInit(): void {
    console.log("hi");
    this.dashboardService.getDashboard().subscribe(user => {
      console.log("res {}", user)
      this.user = user;
    })
  }

}
