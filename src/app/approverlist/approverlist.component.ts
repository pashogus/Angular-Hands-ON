import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Approver } from '../modal/approver';
import {ApproverServiceService} from './../services/approver-service.service'

@Component({
  selector: 'app-approverlist',
  templateUrl: './approverlist.component.html',
  styleUrls: ['./approverlist.component.css']
})
export class ApproverlistComponent implements OnInit {


  userlist: Approver[];
  column =["User Name" , "Email" , "Full Name"];
  index =["username" , "email" , "fullName"];
  searchText='';


  constructor(
    private route: ActivatedRoute,
    private router : Router,
    private approverservice:ApproverServiceService)
  
  { }

  ngOnInit() {
const temp = localStorage.getItem("isAuthenticated");
 console.log("inside Primary approver :",temp);
 if(temp == 'true') 
 {
   console.log("inside Primary approver 1:")
    this.approverservice.getPrimaryApproverList().subscribe((res) => {
     this.userlist=res;
    });
  }
  else{
    console.log("inside Primary approver 2:")
    alert("Please do login to view the Primary Approver List");
    this.router.navigate(["/hello"]);
  }
  }

}
