import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

type Pagination = {
  perpage: string,
  page: number
}

@Injectable({
  providedIn: 'root'
})
export class GitHubService {

  constructor(private http:HttpClient) { }

  getFollowerData (username:string, pagination:Pagination):Observable<any> {
    const url = `https://api.github.com/users/${username}/followers?per_page=${pagination.perpage}&page=${pagination.page}`;      
    return this.http.get<any>(url);
  }
}
