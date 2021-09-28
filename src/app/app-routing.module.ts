import { NgModule } from "@angular/core";
import { Routes , RouterModule } from "@angular/router";
import {ApproverlistComponent} from "./approverlist/approverlist.component"
import { BackupApproverComponent } from "./backup-approver/backup-approver.component";
import { HelloMessageComponent } from "./hello-message/hello-message.component";

const routes:Routes = [

    {path : '' , component : HelloMessageComponent},
    {path: 'hello', component : HelloMessageComponent},
    {path: 'primary-approver', component : ApproverlistComponent},
    {path: 'backup-approver', component : BackupApproverComponent}
];

@NgModule({

  
imports: [RouterModule.forRoot(routes)],
exports:[RouterModule]
})

export class AppRouterModule
{
    
}
