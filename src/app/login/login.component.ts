import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email:string = '';
  password:string = '';

  
  verifyFake(){
    if(this.email != "juan@lol.com" || this.password != "pindonga"){
      localStorage.setItem('bool', 'false')
      alert("te equivocaste")
      return;
    }
    else{
    localStorage.setItem('bool', 'true')
    alert("atroden")
  }
}
}