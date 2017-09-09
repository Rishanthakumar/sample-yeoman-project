import {Component} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';


@Component({
  selector: 'app',
  templateUrl: './signup-component.html'
})

export class SignupComponent {

  constructor(private http: Http) {
  }

  response = 'Add to See';

  public submitter(fName, lName, amount) {
    var head = new Headers();
    head.set('Content-Type', 'application/x-www-form-urlencoded');
    var str = 'firstName=' + fName + '&lastName=' + lName + '&amount=' + amount;
    console.log(fName + lName + amount);
    this.http.post('http://localhost:9000/api/users', str, {headers: head}).map((res: Response) => res).subscribe(data => this.response = 'Added Successfuly!');
  }

}
export class DropdownValue {
  value: string;
  label: string;

  constructor(value: string, label: string) {
    this.value = value;
    this.label = label;
  }
}
