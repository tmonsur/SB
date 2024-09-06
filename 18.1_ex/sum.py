def sum_nums(nums):
    # """Given list of numbers, return sum of those numbers.
    # YOUR CODE HERE

    suming = 0 
    for num in nums:
        suming += num  
    return suming  

print("sum_nums returned", sum_nums([1, 2, 3, 4]))
