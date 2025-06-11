//executed but accuracy 66% 
class Solution {
    /**
    * @param number n

    * @returns number
    */
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
    /**
    * @param number n

    * @returns number
    */
    seriesSum(n) {
        // code here
        return (n*(n+1))/2
    }
}

console.log(new Solution().seriesSum(6))
