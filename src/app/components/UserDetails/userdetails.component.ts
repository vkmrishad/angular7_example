import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'user-details',
  templateUrl: './userdetails.component.html'
 // styleUrls: ['./userdetails.component.css']
})
export class UserDetailsComponent {
	
	private userid: any;
	private users: any;
	private userDetails: any;

	constructor(
		private route:ActivatedRoute,
		private userService: UserService
	){}

	ngOnInit() {
		this.userid = this.route.snapshot.params.userid;
		console.log(this.userid);
		this.userService.executeGet('https://jsonplaceholder.typicode.com/users').subscribe((res : any[])=>{
			this.users = res;
			this.userDetails = this.users.find(element => element.id == this.userid);
        });
	}
}