def triple_and_filter(nums):
    result = []
    for num in nums:
        if num % 4 == 0:
            result.append(num * 3)
    return result
