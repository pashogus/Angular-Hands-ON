import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Approver } from '../modal/approver';
import { ApproverServiceService } from '../services/approver-service.service';

@Component({
  selector: 'app-backup-approver',
  templateUrl: './backup-approver.component.html',
  styleUrls: ['./backup-approver.component.css']
})
export class BackupApproverComponent implements OnInit {

  backup_approver_list : Approver[] =[];
  column =["User Name" , "Email" , "Full Name"];
  index =["username" , "email" , "fullName"];
  searchText='';
  isLoading:Boolean=false;

  constructor( private approverservice:ApproverServiceService,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    const temp = localStorage.getItem("isAuthenticated");
 console.log("inside Primary approver :",temp);
 if(temp == 'true') 
 {
   this.isLoading=true;
    this.approverservice.getBackupApproverList().subscribe((res)=>{
           this.backup_approver_list=res;
           this.isLoading=false;
    });
  }
  else
  {
 alert("Please do login to view the Backup Approver List");
        this.router.navigate(["/hello"]);
  }
  }

}
