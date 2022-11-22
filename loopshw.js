 //Write a for loop that logs 0-15;
 
 
 for (let i = 0; i <= 10; i++ ) {
    console.log(i);
 }

//Write a for loop that counts from 15-0;


for (let i = 15; i >= 0; i-- ) {
    console.log(i);
 }


 //Make variable laps = 0; write a for loop that logs (thats another lap!) and adds 1 to the laps variable. AFTER the loop, log laps.

let j = "laps"; 

 for (let j = 0; j <= 1000; j++ ) {
    console.log("that's another lap! " + j);
 }


//Make variable age. Make a loop from 0-100. In every loop check if i == age, if so log something, else say “age doesn't match”.


let k = "age"; 

 for (let k = 0; k <= 100; k++ ) {
      if (k == 36) {
         console.log("Happy Birthday, your getting old!");
      }
      else {
         console.log("age doesn't match");
      }
 }



 //Write a loop that logs all even numbers from 0-700.

 
   
 for(let i = 0; i<=700; i++) {
   
   if (i % 2 == 0) {
      console.log(i)
   }
   
 }


 //Write a loop that logs all odd numbers from 0-700.

 for(let i = 0; i<=700; i++) {
   
   if (i % 2 != 0) {
      console.log(i)
   }
   
 }

 // Write a loop with some “if else” statements. The loop should start at 1900 and go to 1949 and log when things were invented. For example when i = 1902 the code should log “it is 1902 - the teddy bear is invented!”


 for (let i = 1900; i <= 1949; i ++) {

   if (i === 1900) {
      console.log("In 1900 the Zeppelin was invinted.");
   }
   else if (i === 1902) {
      console.log("In 1902 the Teddy Bear was born.");
   }
   else if (i === 1910) {
      console.log("In 1910 the Talking Motion Picture was invented.");
   }
   else if (i === 1913) {
      console.log("In 1913 the Bra was invented.");
   }
   else if (i === 1918) {
      console.log("In 1918 the Fortune Cookie was invented.");
   }
   else if (i === 1923) {
      console.log("In 1923 the Traffic Signal was invented.");
   }
   else if (i === 1935) {
      console.log("In 1935 the Radar was invented")
   }
   else if (i === 1938) {
      console.log("In 1938 the Ballpoint Pen was invented.")
   }
   else if (i === 1943) {
      console.log("In 1943 the Slinky was invented.")
   }
   else {
      console.log(i);
   }
 }