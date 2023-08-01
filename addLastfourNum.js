class Test{

    static checkNumber = (arrayTest) =>{
        
        if(arrayTest.length < 2){
            console.log("Array size is less than two due to which sorting is not possible");
        }

        else{
            console.log("Big array");
            arrayTest = arrayTest.sort(function(a,b){return b-a});
            console.log(arrayTest);
            let sum = 0;
            for (let k=0; k<arrayTest.length; k++) {
                for(let j = k+1; j<arrayTest.length; j++){

                    console.log("I am in For Loop  " + arrayTest.length);
                if(k == 3){
                    console.log("I am in IF Condition");
                    console.log(arrayTest[k] + " when K is " + k);
                    console.log(arrayTest[j] + " when K is " + j);
                    sum = arrayTest[k] + arrayTest[j];
                    console.log(sum);
                    break;
                }
                }
                
            }
            console.log(`Sum of array is ---> ${sum}`)

        }
    }
}

const oaArray = [20, 58, 2, 5, 8, 30, 3];

Test.checkNumber(oaArray);