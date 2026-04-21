import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountInfo } from '../account-info/account-info';
import { AuthService } from '../auth/auth-service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.html',
    styleUrl: './profile.scss',
    imports: [AccountInfo],
})


export class Profile {

    id: string | null = '';
    name: string | null = '';
    users: string[] = [];
    userData: any;

    constructor(private route: ActivatedRoute, private auth:AuthService) {
    }
    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');
        this.name = this.route.snapshot.paramMap.get('name');

        this.route.queryParams.subscribe((params) => {
            this.id = params['id'];
            this.name = params['name'];
        });

        this.route.params.subscribe((params) => {
            this.id = params['id'];
            this.name = params['name'];
        });

        this.userData=this.auth.getUserData();
    }

    getUsersFromChild(users: string[]) {
        this.users = users;
    }
}