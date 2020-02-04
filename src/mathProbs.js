export function fibonacci(num){
  var fiboSeq =  [];
  for(let i =0; i < num; i++ ){
    if(fiboSeq.length < 2){
      fiboSeq.push(i)
    }else {
      fiboSeq.push(fiboSeq[i-2]+fiboSeq[i-1])
    }
  }
  return fiboSeq;
}