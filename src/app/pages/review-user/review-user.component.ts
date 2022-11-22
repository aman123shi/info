import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-review-user',
  templateUrl: './review-user.component.html',
  styleUrls: ['./review-user.component.scss'],
})
export class ReviewUserComponent implements OnInit {
  constructor(public userService: UserService) {}

  ngOnInit(): void {}
}
