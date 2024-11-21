// function addition(){
//     let a=10
//     let b=20
//     let c=a+b
//     return (<div>
//         <h1> result is {c}</h1>
//     </div>)
// }
// export default addition


// function factorial(){
//     let num=4
//     let fact=1
// for(let i=1;i<=num;i++){
//     fact=fact*i
// }
// return fact
// }
// export default factorial



// function prime(){
//     let arr=[1,1,20,18,19]
// for(let i=0;i<arr.length;i++){
//     let num=arr[i]
//     let count=1
//     if(num%2==0 && num!=2){
//         return `${num} is not prime`
//     }
//     else{
//         for(let i=2;i<num;i++){
//             if(num%i==0){
//                 count++
//                 break;
//             }
//         }
//         if(count==1){
//             return `${num} is not prime`
//         }
//         else{
//             return `${num}prime`
//         }
//     }
// }
// return {num}
// }
// export default prime



// function prime() {
//     let arr = [1, 1, 20, 18, 19,23];
//     let results = []

//     for (let i = 0; i < arr.length; i++) {
//         let num = arr[i];
//         let count = 1;
//         if(num % 2 === 0 ||num==1) {
//             results += `${num} is not prime`; 
//         } else {
//             for(let j = 2; j <num; j++) { 
//                 if (num % j === 0) {
//                     count++;
//                     break;
//                 }
//             }
//             if (count === 1) {
//                 results += `${num} is prime`
//             } else {
//                 results += `${num} is not prime`
//             }
//         }
//     }
//     return results;
// }
// export default prime;


// function factorial(){
//     let arr=[1,2,3,4,5]
//     let res=''
//     for(let i=0;i<arr.length;i++){
//         let fact=1
//         let num=arr[i]
//         for(let j=1;j<=num;j++){
//             fact=fact*j
//         }
//        res+=`${fact}\n`
//     }
//     return res
// }
// export default factorial

// function max(){
//     let arr=[1,2,6,3,10,14,20,40,43,42]
//     let max=0
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>max){
//             max=arr[i]
//         }
//     }
//         return max
// }
// export default max


// function calculate(){
//     let arr=[1,2,3,4,5]
//     let sum=0
//     for(let i=0;i<arr.length;i++){
//         sum+=arr[i]
//     }
//     return sum;
// }
// export default calculate


// function program(){
//     function checkPrime(num){
//         var s=''
//         for(var i=2;i<num;i++){
//             if(num%i==0){
//                 s='not prime'
//                 break;
//             }
//         }
//         if(num==i){
//             s='prime'
//         }
//         return s;
//     }
//     return(<div>
//         <h1>{checkPrime(7)}</h1>
//     </div>)
// }
// export default program;



// function program(){
//     function table(num){
//         let result=''
//         for(let i=1;i<=10;i++){
//           result+=num*i+'<br>'
//         }
//         return result
//     }
//     return (<div>
//         <h1>{table(7)}</h1>
//     </div>)
// }
// export default program;



// function program (){
//     let arr1=[10,20,30]
//     let arr2=[40,50,60]
//     function join(arr1,arr2){
//         let res=[]
//         for(let i=0;i<arr1.length+arr2.length;i++){
//             if(i<arr1.length){
//                 res[i]=arr1[i]
//             }
//             else{
//                 res[i]=arr2[i-arr1.length]
//             }
//         }
//         return res;
//     }
//     return (<div> 
//         <h1>{join(arr1,arr2)}</h1>
//     </div>)
// }
// export default program;



// function program(){
//     function subject(physics,chemistry,maths,english,hindi){
//     let message=''
//     let flag=true
//     let grace=0
//     let total=0
//     let percentage=0
//     let marks=[physics,chemistry,maths,english,hindi]
//     for(let num in marks){
//         if(marks[num]<0 || marks[num]>100){
//             flag=false
// message=`pls enter marks in range in particular subject and subject is ${num}`
// break;
//         }
//         else{
//             if(marks[num]>=28 && marks[num]<33){
// grace=33-marks[num]
// return(num,grace)
//             }
//                 else if(marks[num]<28){
//                     return ('fail',num)
//                 }
//                 else{
//                     total+=[num]
//                 }
//         }
//          percentage=total/5
//         return percentage
//         if(percentage>=60 && percentage<=100){
//             return'first division'
//         }
//         else if(perecntage<60 && percentage>=45){
//             return 'second division'
//         }
//         else{
//             return 'third division'
//         }
//     }
// }
//     return (<div>
//         <h1>{subject(60,70,80,90,67)}</h1>
//     </div>)
// }
// export default program



// function program() {
//     function subject(physics, chemistry, maths, english, hindi) {
//         let message = '';
//         let flag = true;
//         let grace = 0;
//         let total = 0;
//         let marks = [physics, chemistry, maths, english, hindi];
//         for (let i in marks) {
//             if (marks[i] < 0 || marks[i] > 100) {
//                 flag = false;
//                 message = `Please enter marks in range for subject index ${i}.`;
//                 break;
//             } else {
//                 if (marks[i] >= 28 && marks[i] < 33) {
//                     grace = 33 - marks[i];
//                     message = `Grace marks needed for subject index ${i}: ${grace}`;
//                     break
//                 } else if (marks[i] < 28) {
//                     message = `Fail in subject index ${i}.`;
//                     break
//                 } else {
//                     total += marks[i]
//                 }
//             }
//         }
//         if (flag && message === '') {
//             let percentage = total / 5
//             if (percentage >= 60) {
//                 message = 'First division';
//             } else if (percentage >= 45) {
//                 message = 'Second division';
//             } else {
//                 message = 'Third division';
//             }
//             message += `\nTotal Marks: ${total}\nPercentage: ${percentage.toFixed(2)}%`;
//         }
//         return message
//     }
//     return (
//         <div>
//             <h1>{subject(60, 70, 80, 190, 67)}</h1>
//         </div>
//     )
// }
// export default program;

// function program(){
//     function calcMarks(){
//         let student={phy:65,chem:78,maths:90,hindi:97,english:98}
//         let t=0
//         for(let data in student){
// t+=student[data]
// console.log(data)
//         }
//         student.totalmarks=t
//         return student;
//     }
//     return (<div>
//         {Object.entries(calcMarks()).map((item,value)=><p>{item}</p>)}
//     </div>)
// }
// export default program