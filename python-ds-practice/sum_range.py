def sum_range(nums, start=0, end=None):
    if end is None:
        end = len(nums) - 1
    
    if end >= len(nums):
        end = len(nums) - 1
    
    return sum(nums[start:end+1])