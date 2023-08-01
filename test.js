const myarray = ["tea", "coffee", "milk", "coke", "water", "coke"];
let output = [];


function addarray(input){

    for(let i= 0; i< input.length; i++){
    
        let k = 0
        if(i % 2 == 0)
        {
            output[i] = input[i];
        }
        else
        {
            i++;

        }

        k++;
}
return output;
}

console.log(addarray(myarray));