import { Component, Input, OnInit } from '@angular/core';
import { Follower } from 'src/app/models/Follower';

@Component({
  selector: 'component-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UsersComponent implements OnInit {
  @Input() followers:Array<Follower>|undefined;
  @Input() username!:string;

  constructor () {}

  ngOnInit(): void {}
}
