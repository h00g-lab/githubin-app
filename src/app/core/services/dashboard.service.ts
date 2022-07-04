import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class DashboardService {
    private apiUrl: string = `${environment.apiUrl}`

    constructor(
		private http: HttpClient
	) { }
	public get(username: string, repository: string): Observable<any> {
		let url = `${this.apiUrl}${username}/${repository}`;
		return this.http.get<any>(url);
	}
}
