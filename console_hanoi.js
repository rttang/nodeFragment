var iCount = 0,
    strMoveStep = "";
var readline = require('readline');
var rl = readline.createInterface({
	input:process.stdin,
	output:process.stdout
	});
rl.question("pleass put in hanoi num :\t",function(count){
	console.log("input num is :\t",count);
	hanoi(count,"A","B","C");
	console.info("move step is :\t%s",strMoveStep);
	console.info("move num is:\t%s",iCount);
	rl.close();
	});
function move(x,y){
	iCount++;
	strMoveStep +=x+"->"+y+"\t";
	}
function hanoi(m,a,b,c){
	if(m==1){
	  move(a,c);
	}else{
	  hanoi(m-1,a,c,b);
	  move(a,c);
	  hanoi(m-1,b,a,c);
	}
}
