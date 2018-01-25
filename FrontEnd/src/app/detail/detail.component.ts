import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from "@angular/forms";
import { Http, RequestOptions, Headers } from "@angular/http";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  // file : File;
  product = {};
  // cartList = [];

  constructor (private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.getProductDetail(this.route.snapshot.params['id']);
  }

  getProductDetail(id) {

    let header = new Headers({ "Content-Type": "application/json" });
    let options = new RequestOptions({ headers: header })

    this.http.get('http://localhost:3003/api/product/detail/'+id)
    .subscribe(
      data => {
      this.product = data;
    });
  }

  // savetoCart(id){

  //   let header = new Headers({ "Content-Type": "application/json" });
  //   let options = new RequestOptions({ headers: header })

  //   this.http.get('http://localhost:3003/api/cart/'+id)
  //   .subscribe(
  //     data => {
  //     this.product = data;
  //   });
  // }

  // savetoCart(f: NgForm) {

  //   let formData = new FormData();
  //     formData.append("nameProduct", f.value.nameProduct);
  //     formData.append("categoryProduct", f.value.categoryProduct);
  //     formData.append("priceProduct", f.value.priceProduct);
  //     formData.append("profileProduct", this.file);

  //   let header = new Headers({ "Content-Type": "application/json" })
  //   let options = new RequestOptions({ headers: header })

  //   this.http.post("http://localhost:3003/api/cart", formData, options)
  //   .subscribe(
  //     result => {
  //       console.log(result.json());
  //       sessionStorage.setItem("token", result.json().token)
  //       this.router.navigate(['/cart']);
  //     },
  //     error => {

  //     }
  //   )
  // }

}
