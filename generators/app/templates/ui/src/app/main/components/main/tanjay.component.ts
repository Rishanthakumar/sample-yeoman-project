import {Component} from "@angular/core";
import {Http, Response} from "@angular/http";

@Component({
  selector: 'app-tanjay',
  templateUrl: './tanjay.component.html'
})


export class TanJayComponent {
  public data = {};
  edit = false;

  constructor(private http: Http) {
    // let headers = new Headers();
    // headers.append("Access-Control-Allow-Origin", "*");
    // headers.append('Access-Control-Allow-Methods', 'OPTIONS,GET,POST,PUT,DELETE');
    // headers.append("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");

    this.data = this.getUsers();
  }


  open($event, item) {
    item.firstName = "No one";
  }

  editMode($event, edit, user) {
    if (edit == true) {
      this.edit = false;
      user.edit = false;
    } else {
      this.edit = true;
      user.edit = true;
    }
  }

  refresher() {
    this.data = this.getUsers();
  }


  getUsers() {
    this.http.get("http://localhost:9000/api/users").map((res: Response) => res.json()).subscribe(data => this.data = data);
  }
}
