// Question 1

function sum(arr){
  let total = 0;

  for (let i = 0; i < arr.length; i++){
    total += arr[i].price;
    }
  total = total/arr.length;  
  return total.toFixed(2);
}
// sum(items);
document.querySelector("#answer1").innerHTML = `The average price is $${sum(items)}`;



// Question 2

function range(arr, point1, point2){
    let output = '';
  
    for (let i = 0; i < arr.length; i++){
      if (arr[i].price >= point1 && arr[i].price <= point2){
        let title = arr[i].title;
        let price = arr[i].price;
        let product = title.concat(' ', price);
        output = output.concat('\n\n', product);
      }
    }
    return output;
  }
//   range(items, 14.00, 18.00);
  document.querySelector("#answer2").innerHTML = range(items, 14.00, 18.00);



// function range(arr, point1, point2){
//   let output = [];

//   for (let i = 0; i < arr.length; i++){
//     if (arr[i].price >= point1 && arr[i].price <= point2){
//       output.push(format(arr[i]));
//     }
//   }
//   return output;
// }
// range(items, 14.00, 18.00);
// document.querySelector("#answer2").innerHTML = range(items, 14.00, 18.00);


// function format(obj){
//     return obj.title.toString();  
//   }



// Question 3

function itemSort(arr){
    let output = '';
  
    for (let i = 0; i < arr.length; i++){
      if (arr[i].currency_code === "GBP"){
          
        let name = arr[i].title;
        let price = arr[i].price;
        let product = name.concat(' ', price);  
        output = output.concat('', product);
      }
    }
    return output;
  }
//   itemSort(items);
document.querySelector("#answer3").innerHTML = itemSort(items);


// function itemSort(arr){
//   let output = [];

//   for (let i = 0; i < arr.length; i++){
//     if (arr[i].currency_code === "GBP"){
//       output.push(arr[i].name);
//     }
//   }
//   return output;
// }
// itemSort(items);




// Question 4

function materialType(arr, type){
    let output = '';
  
    for (let i = 0; i < arr.length; i++){ 
      if (arr[i].materials.length > 0){
        materials = arr[i].materials;
  
        for (let j = 0; j < materials.length; j++){
          if (materials[j] === type){
          output = output.concat('', arr[i].title);
          }    
        }
      }  
    }
    return output;
  }
  materialType(items, "wood");
  document.querySelector("#answer4").innerHTML = materialType(items, "wood");



// function materialType(arr, type){
//   let output = [];

//   for (let i = 0; i < arr.length; i++){
//     if (target === type){
//       output.push(arr[i]);
//     }
//   }
//   return output;
// }
// materialType(items, "wood");
// document.querySelector("#answer4").innerHTML = materialType(items, "wood");



// Question 5

function materialQuantity(arr){
    let output = '';
  
    for (let i = 0; i < arr.length; i++){
      if (arr[i].materials.length >= 8){
        let title = arr[i].title;
        let number = arr[i].materials.length;
        let product = title.concat(' ', number);
        output = output.concat('\n', product);
      }
    }
    return output;
  }
  materialQuantity(items);
  document.querySelector("#answer5").innerHTML = materialQuantity(items);



// function materialQuantity(arr){
//   let output = [];

//   for (let i = 0; i < arr.length; i++){
//     if (arr[i].materials.length >= 8){
//       output.push(arr[i]);
//     }
//   }
//   return output;
// }
// materialQuantity(items);
// document.querySelector("#answer5").innerHTML = materialQuantity(items);



// Question 6

function whoMade(arr){
    let output = 0;
  
    for (let i = 0; i < arr.length; i++){
      if (arr[i].who_made === "i_did"){
        output += 1;
      }
    }
    return `${output} were made by their sellers`;
  }
  whoMade(items);
document.querySelector("#answer6").innerHTML = whoMade(items);