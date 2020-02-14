import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-driven-template",
  templateUrl: "./driven-template.component.html",
  styleUrls: ["./driven-template.component.scss"]
})
export class DrivenTemplateComponent implements OnInit {
  model: Order = new Order();
  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.model);
  }
}
export class Order {
  title: string;
  quantity: number;
  date: Date;
  contact: string;
}
