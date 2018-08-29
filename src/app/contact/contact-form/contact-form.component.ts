import { Component, OnInit } from '@angular/core';
import { faEnvelope, faUser, faPaperPlane } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  faEnvelope = faEnvelope;
  faUser = faUser;
  faPaperPlane = faPaperPlane;

  constructor() { }

  ngOnInit() {
  }

}
