import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractControl, ControlContainer, FormGroupDirective, ReactiveFormsModule } from '@angular/forms';
import { TypografieComponent } from "../../text/typografie/typografie.component";

@Component({
  selector: 'app-formfield',
  imports: [
    ReactiveFormsModule,
    CommonModule,
    TypografieComponent
],
  templateUrl: './formfield.component.html',
  styleUrl: './formfield.component.scss',
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class FormfieldComponent {
  @Input() label: string = '';
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() controlName: string = '';
  @Input() eyeIcon: boolean = false;
  @Input() borderActive: boolean = false
  @Input() optional: boolean = false;
  @Input() phone: boolean = false;
  @Input() color: 'white' | 'black' = 'black';
  @Input() duty: boolean = false;

  passwordVisible: boolean = false;

  @Input() errorMessages: { [key: string]: string } = {};

  @Output() focusEvent = new EventEmitter<void>();

  defaultErrorMessages: { [key: string]: string } = {};

  constructor(private controlContainer: ControlContainer) { }

  get control(): AbstractControl | null {
    return (this.controlContainer.control as any)?.get(this.controlName) || null;
  }
  errorKeys(): string[] {
    return this.control && this.control.errors ? Object.keys(this.control.errors) : [];
  }

  onFocus() {
    this.focusEvent.emit();
  }

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
    this.type = this.passwordVisible ? 'text' : 'password';
  }

  // FormFIeld example <app-form-field label="Email" type="email" placeholder="Email" controlName="email" inputId="email"
  //                   [errorMessages]="{ required: 'Email ist erforderlich', email: 'Ungültige Email-Adresse' }"></app-form-field>
}

