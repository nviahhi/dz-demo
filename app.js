'use strict';

class Billing {
    constructor(amount = 0) {
		 this.amount = amount;
    }

	calculateTotal() {
		return this.amount;
	}
}

class fixBilling extends Billing  {
    constructor(amount) {
		 super(amount);
    }
}

class hourBilling extends Billing  {
    constructor(amount, hours) {
		 super(amount);
		 this.hours = hours;
    }

	calculateTotal() {
		return this.amount * this.hours;
	}
}

class itemBilling extends Billing  {
    constructor(amount, items) {
		 super(amount);
		 this.items = items;		 
    }

	calculateTotal() {
		 return this.amount * this.items;
	}
}

 const fb = new fixBilling(3); 
 const hb = new hourBilling(3, 10); 
 const ib = new itemBilling(3, 20); 
 console.log(fb.calculateTotal());
 console.log(hb.calculateTotal());
 console.log(ib.calculateTotal());
