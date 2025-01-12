function stringChop(str, size) {
  // your code here
	let n=str.length;
	let size=5;
	let ans=[];
	let i = 0;
	while ( i < n) {
	    let k='';
	    let j = 0;
	    while ( i < n && j < size) {
	        
	        k+=str[i];
	        i++;
	        j++
	        
	    }
	    ans.push(k);
	}
	return ans;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
