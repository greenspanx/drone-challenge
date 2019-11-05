export interface AllocatorInterface {
    allocate(): Array<string>
    execute(str: string, n: number): Allocator
}

export class Allocator implements AllocatorInterface{
    insStr: string
    droneCount: number
    allocatedIns: Array<any>    
    constructor(insStr: string, droneCount: number){
        this.insStr = insStr 
        this.droneCount = droneCount 
        this.allocatedIns = new Array()
    }

    allocate () {
        // create n empty arrays corresponding to n drones 
        for(let i = 0; i < this.droneCount; i ++){
            eval("drone_" + i + " = new Array()");    
        } 
        
        this.execute(this.insStr, this.droneCount);
        return this.allocatedIns.map((item, index) => {
            return item.toString().replace(/,/g, '');
        });
    }



    execute (str: string, n: number): Allocator {  
        // divide string 
        let str_first = str.slice(0,n).split(''); // turn string to array
        let str_rest = str.slice(n); // get the rest of string 

        // quit condition 
        if(str.length < n){
            for (let i = 0; i < str.length; i ++) {
                eval(`drone_${i}`).push(str_first[i]);

            }
            // put all arrays in array allocatedIns, and then return 
            for (let i = 0; i < n; i ++) {
                this.allocatedIns.push(eval(`drone_${i}`));
            }      
            return this;
        }else if (str.length >= n){
            // allocate str to corresponding drone 
            for (let i = 0; i < n; i ++) {
                eval(`drone_${i}`).push(str_first[i]);
            }
            // recursive, until meet quit condition  
            this.execute(str_rest, n);    
        }
        throw new Error("unexpected error")
         
    }  
      
}


// class Allocator {
//     constructor(str, n){
//       this.str = str;
//       this.n = n;
//       this.allocatedIns = [];
//     }
  
//     allocate () {
//       // create n empty arrays corresponding to n drones 
//       for(let i = 0; i < n; i ++){
//         eval("drone_" + i + " = new Array()");    
//       } 
      
//       this.execute(this.str, this.n);
//       return this.allocatedIns.map((item, index) => {
//         return item.toString().replace(/,/g,'');
//       });
//     }
  
    
  
//     execute (str, n) {  
//       // divide string 
//       let str_first = str.slice(0,n).split(''); // array
//       let str_rest = str.slice(n); // string 
  
//       // quit condition 
//       if(str.length < n){
//         for (let i = 0; i < str.length; i ++) {
//           eval(`drone_${i}`).push(str_first[i]);
  
//         }
//         // put all arrays in array allocatedIns, and then return 
//         for (let i = 0; i < n; i ++) {
//           this.allocatedIns.push(eval(`drone_${i}`));
//         }      
//         return;
//       }
  
      
//       for (let i = 0; i < n; i ++) {
//         eval(`drone_${i}`).push(str_first[i]);
//       }
//       // recursive 
//       this.execute(str_rest, n);     
//     }  
  
//   }
  
  
  
//   // test 
//   let dstr = '1234123412341234123412341234123412341';
//   let n = 4;
//   let allocator = new Allocator(dstr, n);
//   console.log(allocator.allocate())