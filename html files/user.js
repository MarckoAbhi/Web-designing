let a = prompt("Enter your age:");
a =Number.parseInt(a);
if(a<0){
    alert("please enetr an valid age:");

}
else if(a<18){
    alert("You are not eligible :");

}
else {
    alert("You are eligible to sign-up");

}
console.log("Done")