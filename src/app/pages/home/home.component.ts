import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  plans: Plan[] = [
    { label: 'self plus one', value: 'value1' },
    { label: 'plan 2', value: 'value2' },
    { label: 'plan 3', value: 'value3' },
  ];
  relation: Plan[] = [
    { label: 'spouse', value: 'spouse' },
    { label: 'child', value: 'child' },
  ];
  selectedPlan: string | undefined;
  selectedRelation: string | undefined;
  constructor(public userService: UserService) {}

  ngOnInit(): void {}
  onClick() {}
}
interface Plan {
  label: string;
  value: string;
}
