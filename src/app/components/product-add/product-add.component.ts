import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css'],
})
export class ProductAddComponent implements OnInit {
  productAddForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private toastrService: ToastrService
  ) {}
  ngOnInit(): void {
    this.createProductAddForm();
  }
  createProductAddForm() {
    this.productAddForm = this.formBuilder.group({
      productName: ['', Validators.required],
      productCode: ['', Validators.required],
      barcode: ['', Validators.required],
      stock: ['', Validators.required],
      image: ['', Validators.required],
      unitPrice: ['', Validators.required],
      taxRate: ['', Validators.required],
      brand: ['', Validators.required],
      description: ['', Validators.required],
      status: ['', Validators.required],
      categoryId: ['', Validators.required],
    });
  }
  add() {
    if (this.productAddForm.valid) {
      let productModel = Object.assign({}, this.productAddForm.value);
      this.productService.add(productModel).subscribe({
        next: (response) => {
          this.toastrService.success(response.message, 'Başarılı');
        },
        error: (responseError) => {
          if (responseError.error.isSuccess == false) {
            this.toastrService.error(responseError.error.message);
          } else {
            if (responseError.error.Errors.length > 0) {
              
              for (let i = 0; i < responseError.error.Errors.length; i++) {
                //console.log(responseError.error.Errors)
                console.log(responseError.error.Errors[i].PropertyName)
                this.toastrService.error(
                  responseError.error.Errors[i].ErrorMessage,
                  'Doğrulama hatası'
                );
              }
            } 
          }
        },
      });
    }else {
      this.toastrService.error('Formunuz eksik', 'Dikkat');
    }
  }
}