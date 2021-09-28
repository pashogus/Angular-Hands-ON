import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector:'[appdropdown]'
})
export class DropDownDirective
{
    //class is simply an array of an object, we are explicitly selecting open object
    @HostBinding('class.open') isOpen=false;

    @HostListener('click') toggleOpen()
    {
        this.isOpen = !this.isOpen;
}
}