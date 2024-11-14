def sum_floats(nums):
    
    sum = 0
    for i in nums:
        if isinstance(i, float):
            sum += i

    return sum