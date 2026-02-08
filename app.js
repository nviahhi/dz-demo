'use strict';

class Car {
    constructor(brand, model, mileage) {
		this.brand = brand;
		this.model = model;
		this.mileage = mileage;
    }

	info() {
		console.log(`Марка: ${this.brand}, Модель: ${this.model},  Пробег: ${this.mileage} `)
	}

	get brand() {
		return this._brand;
	}

	set brand(value) {
		if (typeof value !== 'string' || value.trim() === '') { throw new Error('Неверная марка'); } 
		else {
			this._brand= value;
		}
	}

	get model() {
		return this._model;
	}

	set model(value) {
		if (typeof value !== 'string' || value.trim() === '') { throw new Error('Неверная модель'); } 
		else {
			this._model= value;
		}
	}

	get mileage() {
		return this._mileage;
	}
	
	set mileage(value) {
		if (typeof value !== 'number' || !Number.isInteger(value) || value < 0)  { throw new Error('Неверный пробег'); } 
		else {
			this._mileage = value;
		}
	}
}
const car = new Car('Toyota','Camry', 20000);

car.info();

