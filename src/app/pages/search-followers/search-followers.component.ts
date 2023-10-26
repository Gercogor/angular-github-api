import { Component } from '@angular/core';
import { GitHubService } from 'src/app/services/API/git-hub.service';
import { NgForm } from '@angular/forms';
import { Follower } from 'src/app/models/Follower';

@Component({
  selector: 'app-search-followers',
  templateUrl: './search-followers.component.html',
  styleUrls: ['./search-followers.component.scss']
})
export class SearchFollowersComponent {

  constructor(private githubService:GitHubService) {}

  username = '';
  error = '';
  followers:Array<Follower> = [];
  isLoading = false;
  isNewUsername = false;
  pagination = {
    perpage : '10',
    page: 1
  }

  changeUserName(event:any){
    this.username = event.target.value;
    this.error = '';
    this.isNewUsername = true;
  } 

  submit (form: NgForm) {
    if(!form.valid) {
      this.error = 'INPUT NICKNAME';
      return
    }
    this.getFollowers();
  }
  
  getFollowers() {

    this.githubService.getFollowerData(this.username, this.pagination).subscribe({
      next:(data)=>{
        if (!data.length && !this.isNewUsername){
          if (this.pagination.page!==1) this.pagination.page = this.pagination.page-1;
          this.isLoading = false;
          return
        }
        this.followers = data;
        this.isLoading = false;
        this.isNewUsername = false;
      },
      error: (err) => {
        this.followers = [];
        this.error = err.error.message;
        this.isLoading = false;
      },
    });

    this.isLoading = true;
  }

  changePerPage () {
    this.pagination.page = 1;
    this.getFollowers();
  }

  nextPage () {
    this.pagination.page = this.pagination.page+1;
    this.getFollowers();
  }

  previousPage () {
    if (this.pagination.page==1) return;
    this.pagination.page = this.pagination.page-1;
    this.getFollowers();
  }
}
