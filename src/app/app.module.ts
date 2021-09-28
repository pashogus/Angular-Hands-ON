import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipieComponent } from './recipie/recipie.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipieDetailComponent } from './recipie/recipie-detail/recipie-detail.component';
import { RecipieListComponent } from './recipie/recipie-list/recipie-list.component';
import { RecipieItemComponent } from './recipie/recipie-list/recipie-item/recipie-item.component';
import { ShoppingItemComponent } from './shopping-list/shopping-item/shopping-item.component';
import { DropDownDirective } from './shared/dropdown.directive';
import { shoppingListService } from './shared/shoppinglist.service';
import { ApproverlistComponent } from './approverlist/approverlist.component';
import { AppRouterModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BasicAuthInterceptor } from './helper/basic-auth.interceptor';
import { HelloMessageComponent } from './hello-message/hello-message.component';
import { BackupApproverComponent } from './backup-approver/backup-approver.component';
import { FooterComponent } from './footer/footer.component';
import { FilterPipe } from './helper/FilterPipe';
import { FormsModule } from '@angular/forms';
import { AuthenticationComponent } from './authentication/authentication.component';

@NgModule({
  //declarations will hold components and pipes
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipieComponent,
   ShoppingListComponent,
   RecipieDetailComponent,
   RecipieListComponent,
   RecipieItemComponent,
   ShoppingItemComponent,
   DropDownDirective,
    ApproverlistComponent,
    HelloMessageComponent,
    BackupApproverComponent,
    FooterComponent,
    FilterPipe,
    AuthenticationComponent 
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    HttpClientModule,
    FormsModule
  ],
 providers: [
   { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
  shoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
