// Task 1: Calculate the Tip

let billPrice = 200;
let tip;

    if (billPrice >= 50 && billPrice <= 300) {
        tip = billPrice * .15; // 15% tip applied for bills between $50 and $300
                                             }
            else {
                tip = billPrice * .20; // 20% tip applied for any other amount
                 }
console.log("Tip amount: $" + tip);


// Task 2: Output Details

let totalPrice = billPrice + tip; // adds the bill price to the calculated tip

console.log(`The bill was $${billPrice}, the tip was $${tip}, and the total value is $${totalPrice}`);


// Task 3: Create a Function

function calculateTip(billPrice)
    {
    let tip;
    if (billPrice >= 50 && billPrice <= 300) {
        tip = billPrice * .15; // 15% tip applied for bills between $50 and $300
                                             }
            else {
                tip = billPrice * .20; // 20% tip applied for any other amount
                 }
     return tip;
    }

   let testBill = 100;
   let testTip = calculateTip(testBill);

   console.log(`For am example bill of ${testBill}, the tip would be ${testTip}`)

   // Task 4: Utilize Arrays

function calculateTip(billPrice)
{
if (billPrice >= 50 && billPrice <= 300) {
    tip = billPrice * .15; // 15% tip applied for bills between $50 and $300
                                         }
        else {
            tip = billPrice * .20; // 20% tip applied for any other amount
             }
  return tip;
}
const bills = [275, 40, 430, 125, 555, 44]; // used the two data sets to create an array
const tips = bills.map(bills => calculateTip(bills));
const totals = tips.map((bills, index) => bills + tips[index]);

console.log(totals);