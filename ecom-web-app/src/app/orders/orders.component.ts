import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders : any;
  customerId!: number;
  constructor(private http:HttpClient , private router: Router, private route: ActivatedRoute ) {
    this.customerId=route.snapshot.params['customerId'] // this is the way to get the parameter from the url
  }

  ngOnInit(): void {
    this.http.get("http://localhost:9999/order-service/orders/search/byCustomerId?customerId=1&projection=fullOrder&customerId="+this.customerId)
      .subscribe({
        next : (data)=>{
          this.orders=data;
        },
        error : (err)=>{}
      });
  }

  getOrderDetails(o: any) {
    this.router.navigateByUrl("/orders-details/"+o.id);
  }
}

