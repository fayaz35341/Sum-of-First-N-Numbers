//executed but accuracy 66% 
class Solution {
    seriesSum(n) {
        // code here
        let count=0
        for(let i=0;i<n+1;i++){
            count+=i
        }
        return count
    }
}

//second 

class Solution {
    seriesSum(n) {
        // code here
        return (n*(n+1))/2
    }
}

console.log(new Solution().seriesSum(6))

//3 accuracy 85%

class Solution {
    seriesSum(n) {
        // code here
        if(n===0){
            return 0;
        }
        return n+this.seriesSum(n-1)
    }
}
