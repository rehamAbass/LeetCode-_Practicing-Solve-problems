
function uncommonFromSentences(s1: string, s2: string): string[] {
let x1 = s1.split(" ");
let x2 = s2.split(" ");
let arr= x1;
x2.map((z)=> arr.push(z))
arr= arr.filter((w,index)=> {
  let f1 = arr.filter((t)=> w == t);
  if(f1 && f1.length >1){ }
  else{ 
  return w;
  }
});

console.log(arr);
return arr;
};
