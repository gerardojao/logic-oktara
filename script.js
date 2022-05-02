
let storage = 20,
k = 'shelf',
amountShelves = 3

for(i = 1; i <= amountShelves; i++) {
    eval( k + i + '= ' + storage); 
}

let orangesSelled = 15

let totalOranges = storage*amountShelves


if(orangesSelled < totalOranges){ 
    if(orangesSelled > shelf1){
       orangesSelled  = orangesSelled - shelf1
     
       shelf1 = 0
       shelf2 = shelf2 - orangesSelled
       console.log("linea 56");
       console.log(shelf1, shelf2, shelf3);
 

      if (shelf1 < storage) {
          shelf2 = shelf2 - orangesSelled
          shelf1 = shelf1 + orangesSelled
  
          if(shelf2 < storage){
              shelf3 = shelf3 - orangesSelled
              shelf2 = shelf2 + orangesSelled
          }     
    totalOranges = shelf1+shelf2+shelf3   
    console.log("linea 70");
      console.log(shelf1,shelf2,shelf3);

      console.log(totalOranges);
  
  }
     }
      else {  
          shelf1 = shelf1 - orangesSelled 
        
   // debo recorrer el array    
   if (shelf1 < storage) {
    shelf2 = shelf2 - orangesSelled
    shelf1 = shelf1 + orangesSelled
    
    if(shelf2 < storage){
        shelf3 = shelf3 - orangesSelled
        shelf2 = shelf2 + orangesSelled
            }     
            totalOranges = shelf1+shelf2+shelf3    
            console.log(shelf1,shelf2,shelf3);

        console.log(totalOranges);
    
    }
}
   
}else console.log(`we don't have that amount, we can sell you ${totalOranges} oranges`)
// for (let i = 0; i < arrS.length; i++) {
// console.log(arrS[i]);
    
// }