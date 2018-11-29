import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.scss']
})
export class ParticipantsComponent implements OnInit {
  public participants: Array<object>;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getParticipants()
  }

  getParticipants () {
    this.userService.getUsers()
      .subscribe(
        res => {
          this.participants = res['objects'];
        },
        error => {
          console.error(error)
        }
      )
  }
}
