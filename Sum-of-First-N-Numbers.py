# my

class Solution:
    def seriesSum(self, n : int) -> int:
        # code here
        count=0
        for i in range(n+1):
            count+=i
        return count

#second

class Solution:
    def seriesSum(self, n : int) -> int:
        # code here
        return int((n*(n+1))/2)
        
print(Solution().seriesSum(5))

#3

class Solution:
    def seriesSum(self, n : int) -> int:
        # code here
        if n==0:
            return 0
        return n+self.seriesSum(n-1)
print(Solution().seriesSum(5))        
