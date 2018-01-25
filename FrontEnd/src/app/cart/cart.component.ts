import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from "@angular/forms";
import { Http, RequestOptions, Headers } from "@angular/http";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  // product = {};

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  // ngOnInit() {
  //   this.loadCartList();
  // }

  // loadCartList(){

  //   let header = new Headers({ "Content-Type": "application/json" });
  //   let options = new RequestOptions({ headers: header })

  //   this.http.get("http://localhost:3003/api/cart", options)
  //   .subscribe(
  //     result => {
  //       this.cartList = result.json();
  //     },
  //     error => {

  //     }
  //   );
  // }

  ngOnInit() {
    // this.getProductDetail(this.route.snapshot.params['id']);
  }

  // getProductDetail(id) {

  //   let header = new Headers({ "Content-Type": "application/json" });
  //   let options = new RequestOptions({ headers: header })

  //   this.http.get('http://localhost:3003/api/product/detail/'+id)
  //   .subscribe(
  //     data => {
  //     this.product = data;
  //   });
  // }
}
