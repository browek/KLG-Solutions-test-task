import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-invoice',
  templateUrl: './new-invoice.component.html',
  styleUrls: ['./new-invoice.component.scss']
})
export class NewInvoiceComponent implements OnInit {

  dataForm: FormGroup | any
  validationMsgs = {
    name: [
      { type: 'required', message: 'Please enter name' },
      { type: 'minLength', message: 'Min length 3' },
      { type: 'maxLength', message: 'Max length 30' },
    ],
    count: [
      { type: 'required', message: 'Please enter count' },
      { type: 'min', message: 'Min 1' },
      { type: 'max', message: 'Max 100' },
      { type: 'pattern', message: 'Please input number' },
    ],
    price: [
      { type: 'required', message: 'Please enter price' },
      { type: 'min', message: 'Min 1' },
      { type: 'max', message: 'Max 1000000' },
      { type: 'pattern', message: 'Please input number' },
    ],
  }

  constructor(
    private formBuilder: FormBuilder, 
    private snackBar: MatSnackBar,
    private router: Router) { }

  ngOnInit(): void {
    this.dataForm = this.formBuilder.group({
      data: this.formBuilder.array([this.createFormGroup()])
    });

  }

  createFormGroup(): FormGroup {
    return new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
      count: new FormControl('1', [Validators.required, Validators.min(1), Validators.max(100), Validators.pattern("^[0-9]*$")]),
      price: new FormControl('0', [Validators.required, Validators.min(1), Validators.max(1000000), Validators.pattern("^[0-9]*$")]),
    })
  }


  addFormGroup() {
    const data = this.dataForm.get('data') as FormArray
    data.push(this.createFormGroup())
  }

  removeItem(index: number) {
    const formArray = this.dataForm.get('data') as FormArray;
    formArray.removeAt(index);
  };

  submitForm() {
    this.dataForm.markAllAsTouched();
    if ((this.dataForm.get('data') as FormArray).length == 0) {
      this.snackBar.open('Please add items', 'Ok');
    } else if (this.dataForm.valid) {
      this.router.navigate(['preview'], { state:  {data:(this.dataForm.get('data') as FormArray).value}});
    }
  };

}
