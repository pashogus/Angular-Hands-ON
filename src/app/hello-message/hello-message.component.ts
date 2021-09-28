import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApproverServiceService } from '../services/approver-service.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-hello-message',
  templateUrl: './hello-message.component.html',
  styleUrls: ['./hello-message.component.css']
})
export class HelloMessageComponent implements OnInit {

  constructor( private approverservice:ApproverServiceService ,
    private authenticationService:AuthenticationService) {
    
  }
  welcomemessage='';
  username:string;
  password:string;
  isloggedInUser:Boolean;

  ngOnInit(): void {
    this.approverservice.getapproverMessage().subscribe( (res) =>{
      this.welcomemessage=res.message;
       });
  }

  onSubmit(form : NgForm)
  {
console.log(form);
this.username=form.value.username;
this.password=form.value.password;
this.isloggedInUser=this.authenticationService.login(this.username,this.password);
form.reset();
  }

}
