import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root'})
export class BlogService{
    constructor(private http: HttpClient){

    }
    getBlog(){
        return this.http.get<any>('http://ninedev-api.vercel.app/blogs')
    }
}