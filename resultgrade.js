 var marks= prompt("Enter your Marks : ");

  if(marks>=80){
    document.write("A+");
  }
  else if(marks>=70){
    document.write("A");
  }
  else if(marks>=60){
    document.write("A-");
  }
  else if(marks>=50){
    document.write("B");
  }
  else if(marks>=40){
    document.write("C");
  }
  else if(marks>=33){
    document.write("D");
  }
   else{
    document.write("Failed");
  }; More result grades below:
   var marks= prompt("Enter your Marks : ");

  if(marks>100 || marks< 0){
    document.write("Invalid");
  }
  else if(marks>=80 && marks<=100){
    document.write("A+");
  }
  else if(marks>=70 && marks<=79){
    document.write("A");
  }
  else if(marks>=60 && marks<=69){
    document.write("A-");
  }
  else if(marks>=50 && marks<=59){
    document.write("B");
  }
  else if(marks>=40 && marks<=49){
    document.write("C");
  }
  else if(marks>=33 && marks<=39){
    document.write("D");
  }
   else{
    document.write("Failed");
  };
Another code of version (if else)
var num1 = prompt("Enter Numer1 :");
var num2 = prompt("Enter Numer2 :");
var num3 = prompt("Enter Numer3 :");

if(num1>num2 && num1>num3){
  document.write(num1);
}
else if(num2>num1 && num2>num3){
  document.write(num2);
}
else{
  document.write(num3);
};
