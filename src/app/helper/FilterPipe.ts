import { KeyedWrite } from "@angular/compiler";
import { Pipe, PipeTransform } from "@angular/core";
import { Approver } from "../modal/approver";

@Pipe(
    {
        name:'filter'
    }
)
export class FilterPipe implements PipeTransform 
{

     /**
   * Pipe filters the list of elements based on the search text provided
   *
   * @param value list of elements to search in
   * @param SearchText search string
   * @returns list of elements filtered by search text or []
   */
    transform(userlist: any[], SearchText:String) {

        if (!userlist) {
            return [];
          }

          if (!SearchText) {
            return userlist;
          }

     return userlist.filter(value => 
        {
            return value.username.includes(SearchText)|| value.email.includes(SearchText)|| value.fullName.includes(SearchText);
        }
    )
    

    
    
}
}