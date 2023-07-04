let a = parseInt(prompt("Enter your amount"));
  /* if((a>=60)&&(a<=70)){
  console.log("Buy i phone");
  } */

switch (true){
 	 case (a>=60)&&(a<=70):
  	 document.write("Buy i phone");
  	 break;
   
   case (a>=50)&&(a<60) :
  	 document.write("Buy redmi");
   	 break;
    
   case (a>=40)&&(a<50):
   	 document.write("Buy LG");
     break;
   
   case (a<40):
     document.write("Not enough money");
     break;
    
		default :
     document.write("Above 70 we don't have any mobile");

}