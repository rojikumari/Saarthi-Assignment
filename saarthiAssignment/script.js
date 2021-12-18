// Input:  
        //    let arr = [s];
               state = {
               "Maharashtra" : "Pune",
               "Karnataka" : "Bangalore",
               "Andra Pradesh" : "Vijaywada",
               "Kerala": "Palakkad"
               }
               covidCases = {
               "Pune": 100,
               "Bangalore": 90,
               "Vijaywada": 92,
               "Palakkad": 300
               }

               let y = Object.entries(state);
               console.log(y);
               let z = Object.entries(covidCases);
               console.log(z);
               let obj = new Object();
               for(let i=0;i<y.length;i++){
                    let k = y[i][0];
                    let c = y[i][1];
                    for(let j=0;j<z.length;j++){
                        if(c == z[j][0]){
                             obj[k]=z[j][1];
                            // console.log(k,z[j][1])
                        }
                    }
                 }
               console.log(obj);

            //    console.log(covidCases[Pune])
            //    Output:
            //    finalResult = {
            //    "Maharashtra" : 100,
            //    "Karnataka" : 90,
            //    "Andra Pradesh" : 92,
            //    "Kerala" : 300
        //  }

        // var finalResult={}
        // let arr1 = Object.values(covidCases)
        // let arr = Object.values(state);
        // for(let i=0;i<arr1.length;i++){
        //     Object.assign(finalResult,{arr1: arr})
        // }
        
        
        // finResult[arr1] = arr;
        // console.log(finResult);
        // arr.forEach((data)=>{
              
        // })
        // console.log(arr1);
        // console.log(arr);

