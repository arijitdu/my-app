import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RootObject } from 'src/app/interfaces/ivehical';
import { UsersDataService } from 'src/app/services/users-data.service'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  hero?: RootObject
  constructor(private UsersDataService: UsersDataService,
    private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(params => {
      let id = `${params.id}`;
      this.UsersDataService.getRandomHero(id).subscribe(data => this.hero = data)
    });

  }

}

