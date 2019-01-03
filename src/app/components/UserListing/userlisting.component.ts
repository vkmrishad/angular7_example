import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'user-listing',
  templateUrl: './userlisting.component.html',
  styleUrls: ['./userlisting.component.css']
})
export class UserListingComponent {

	constructor(
		private userService: UserService
	) {}

	private users: any;
	private searchText: string;

	ngOnInit() {
		this.userService.executeGet('https://jsonplaceholder.typicode.com/users').subscribe((res : any[])=>{
			this.users = res;
        });
	}
}
