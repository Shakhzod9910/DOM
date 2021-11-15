function calculateBmi() {
    
    const name = document.getElementById ("name");
    const weightVal = document.getElementById ("weight");
    const heightVal = document.getElementById ("height");
    const result = document.querySelector ("#result");

   const weight = parseFloat (weightVal.value);
   const height = parseFloat (heightVal.value);

   let bmi = weight / ( height * height );

   result.textContent = ` ${name.value}ning BMI ko'rsatkichi ${bmi} `;
}calculateBmi()























//function calculateBmi(name, weight, height){
   // let bmi = weight / (height * height);
    //console.log(name + "ning BMI ko'rsatkichi" + bmi);
 //   console.log(` ${name} ning BMI ko'rsatkichi ${bmi} `);}
   


































// DOM = document object model

//const p = document.getElementById("p1");
//console.log(p);