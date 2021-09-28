import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Message } from '../modal/message';
import { Approver } from '../modal/approver';

@Injectable({
  providedIn: 'root'
})
export class ApproverServiceService {

  constructor(private http:HttpClient) { 
  }

  getapproverMessage()
  {
    return this.http.get<Message>("http://localhost:8080/hello");
    
  }

  getPrimaryApproverList()
  {
    return this.http.get<Approver[]>("http://localhost:8080/primary-approver",{responseType: 'json'});

  }

  getBackupApproverList()
  {
    return this.http.get<Approver[]>("http://localhost:8080/backup-approver");

  }
}
