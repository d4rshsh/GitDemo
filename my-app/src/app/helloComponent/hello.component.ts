import { Component } from "@angular/core";
@Component({
    selector:'hello-cmp',
    template: `
     <div> First name is {{firstName}} </div>
     <div> Last name is  {{lastName}} </div>  
    
    `
})
export class helloComponent{
    firstName: string;
    lastName: string;
    constructor()
    {
        console.log("constructor of hello-cmp called");
this.firstName = "James";
this.lastName = "McAtee";
    }                            
}
