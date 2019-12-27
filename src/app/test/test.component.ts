import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public iname="";

  public name = "Shraddha Khandelwal";
  public successClass = "text-success";
  public hasError = true;
  public isSpecial = true;
  public hcolor = "orange";
  public messageClasses ={
    "text-success": !this.hasError,
    "text-danger":this.isSpecial,
    "text-special":this.isSpecial
  }
  public titleStyle = {
    color : "blue",
    fontStyle : "italic"
  }


  public greetings="";
  constructor() { }

  ngOnInit() {
  }
  greetUser(){
    return "Hello" + this.name;
  }
  onClick(event){
    console.log(event);
    this.greetings =event.type;
  }
  logMessage(value){
    console.log(value)

  }

  
}
