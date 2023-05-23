class Car {
 constructor(brand, color, maxSpeed, chassisNumber) {
   this.brand = brand;
   this.color = color;
   this.maxSpeed = maxSpeed;
   this.chassisNumber = chassisNumber;
 }
}
 
const car1 = new Car('BMW', 'red', 200, 'b-1');
const car2 = new Car('Audi', 'blue', 220, 'a-1');
const car3 = new Car('BMW', 'black', 250, 'b-2');

console.log(car1);
console.log(car2);
console.log(car3);
 
/* Output:
Car { brand: 'BMW', color: 'red', maxSpeed: 200, chassisNumber: 'b-1' }
Car { brand: 'Audi', color: 'blue', maxSpeed: 220, chassisNumber: 'a-1' }
Car { brand: 'BMW', color: 'black', maxSpeed: 250, chassisNumber: 'b-2' }
*/