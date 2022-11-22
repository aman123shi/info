import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  plans: ComboType[] = [
    { label: 'self plus one', value: 'value1' },
    { label: 'plan 2', value: 'value2' },
    { label: 'plan 3', value: 'value3' },
  ];
  relation: ComboType[] = [
    { label: 'spouse', value: 'spouse' },
    { label: 'child', value: 'child' },
  ];
  phoneType: ComboType[] = [
    { label: 'Cell', value: 'cell' },
    { label: 'Desk', value: 'desk' },
  ];
  selectedPlan: string | undefined;
  selectedRelation: string | undefined;
  constructor(public userService: UserService) {}

  ngOnInit(): void {}
  onClick() {}
}
interface ComboType {
  label: string;
  value: string;
}
