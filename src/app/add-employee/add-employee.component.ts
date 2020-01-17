import { Component, OnInit } from "@angular/core";
import { HttpClientService, Employee } from "../service/httpclient.service";
import { Router } from '@angular/router';

@Component({
  selector: "app-add-employee",
  templateUrl: "./add-employee.component.html",
  styleUrls: ["./add-employee.component.css"]
})
export class AddEmployeeComponent implements OnInit {
  user: Employee = new Employee("", "", "", "");

  constructor(private httpClientService: HttpClientService,
    private router: Router) {}

  ngOnInit() {}

  createEmployee(): void {
    console.debug(this.user);
    this.httpClientService.createEmployee(this.user).subscribe(data => {
      alert("Employee created successfully.");
      this.router.navigate([''])
    });
  }
}
