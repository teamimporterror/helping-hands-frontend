import { Component, OnInit } from '@angular/core';
import { NgoVerificationService } from 'src/app/Service/ngo-verification.service';
import { AuthenticateService } from 'src/app/Service/authentication.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private verify:NgoVerificationService,private auth:AuthenticateService) { }

  ngOnInit() {
  }
  
  onSave(value){
    console.log(value);
    console.log(this.auth.currentUser().status)
    this.verify.sendNgoData(value).subscribe(res=>{console.log(res)})
  }


}