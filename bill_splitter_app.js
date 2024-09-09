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
