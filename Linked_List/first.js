//  let linkList = {
//     head:{
//         value: 10,
//         next:{
//             value: 20,
//             next: {
//                 value: 30,
//                 next:{
//                     value: 40,
//                     next:null
//                 }
//             }
//         }
//     }
//  }


class LL {
    constructor(data){
        this.head={
            value :data,
            next :null
        }
        this.tail= this.head;
        this.length = 1;
    }

    append(data){
        const newNode = {
             value :data,
             next : null
        }
        this.tail.next = newNode;
        this.tail = newNode;
    }
}


const myLL = new LL(10);
myLL.append(20);
myLL.append(30);
console.log(myLL)