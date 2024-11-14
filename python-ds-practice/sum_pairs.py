def sum_pairs(nums, goal):
    seen = set() 
    for i in nums:
        complement = goal - i  
        if complement in seen:
            return (complement, i)  
        seen.add(i) 
    return ()
