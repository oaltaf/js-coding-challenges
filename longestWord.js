
// const arr = [39, 22, 4, 66, 3, 1, 42, 7, 80];
const arr = ["Osama", "Faraz Alam", "ZMK", "This is a Testing String", "Faraz Alam is an Automation Tester in Devigital Systems"];

const arrayLargest = [4, 44, 64, 13, 43, 9, 69, 13];

checkLongestText = (myarray) => {

    let longText = "";
    let text = "";
    for(let i = 0; i<myarray.length; i++){
        
        for(let j=i+1; j<myarray.length; j++){

            if(myarray[i].length > myarray[j].length){
                longText = myarray[i].length;
                text = myarray[i];
                // console.log(myarray[i]);
            }
            else{
                longText = myarray[j].length;
                text = myarray[j];
                // console.log(myarray[j]);
            }
        // console.log("Length of " + i + " Word is = " + myarray[i].length);
        
    }
    }
    console.log(text);
    return longText;  
}

console.log(checkLongestText(arr));

/* checkMaxNumber = (arrayOfNumbers) => {

    let maxNumber = 0;
    for(let i=0; i<arrayOfNumbers.length; i++){

        for(let j=i+1; j<arrayOfNumbers.length; j++){

            if(arrayOfNumbers[i] > arrayOfNumbers[j]){
                maxNumber = arrayOfNumbers[i];
            }
            else{
                maxNumber = arrayOfNumbers[j];
            }
 
        }
}
    return maxNumber;
} */