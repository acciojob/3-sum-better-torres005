function threeSum(arr, target) {
// write your code here
	let closetSum = Number.MAX_VALUE;
	n = arr.length 
  for(i =0;i<n, i++){
	  for(j=i+1;j<n;j++){
		  for(k=j+1;j<n;j++{

			   if (Math.abs(target - closestSum) >
                    Math.abs(target - (arr[i] + arr[j] + arr[k])))
                    closestSum = (arr[i] + arr[j] + arr[k]);
			  
		  })
	  }
  }
	return closetSum;
}

module.exports = threeSum;
