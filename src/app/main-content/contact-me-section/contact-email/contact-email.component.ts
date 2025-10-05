import { Component } from '@angular/core';
import { VariablenServiceService } from '../../../../service/language/variablen-service.service';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TypografieComponent } from "../../../shared/text/typografie/typografie.component";
import { FormfieldComponent } from "../../../shared/fomrs/formfield/formfield.component";
import { ContactService } from '../../../../service/contact/contact.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact-email',
  imports: [
    CommonModule,
    FormsModule,
    FormfieldComponent,
    ReactiveFormsModule,
    TypografieComponent,
    RouterLink
],
  templateUrl: './contact-email.component.html',
  styleUrl: './contact-email.component.scss'
})
export class ContactEmailComponent {
  language: boolean = true;
  sendBtn: boolean = true;
  checkbox: boolean = false;

  constructor(
    private service: VariablenServiceService,
    private contactService: ContactService
  ) { }

  emailForm = new FormGroup({
    name: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true
    }),
    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
      nonNullable: true
    }),
    message: new FormControl('', {
      validators: [Validators.required, Validators.minLength(10)],
      nonNullable: true
    }),
    checkbox: new FormControl(false, {
      validators: [Validators.requiredTrue],
      nonNullable: true
    })
  })


  ngOnInit(): void {
    this.service.currentLanguage.subscribe(language => {
      this.language = language;
    })
  }

  resetSendBtn() {
    this.sendBtn = false;
    setTimeout(() => {
      this.sendBtn = true;
    }, 5000);
  }

  onSubmit() {
    this.emailForm.markAllAsTouched();
    if (this.emailForm.valid) {
      this.contactService.sendContactForm(this.emailForm.value).subscribe({
        next: (response) => {
          this.accepted(response);
        },
        error: (error) => {
          this.failed(error);
        }
      });
    }
  }

  accepted(response: any) {
    this.resetSendBtn();
    this.emailForm.reset();
  }

  failed(error: any) {
    this.resetSendBtn();
  }

}
