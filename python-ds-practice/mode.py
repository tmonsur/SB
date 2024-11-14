def mode(nums):
    # Create a dictionary to count occurrences of each element
    counts = {}
    
    # Count occurrences of each element in the list
    for num in nums:
        if num in counts:
            counts[num] += 1
        else:
            counts[num] = 1
    
    # Find the element with the maximum count
    most_common = None
    max_count = 0
    for num, count in counts.items():
        if count > max_count:
            most_common = num
            max_count = count
    
    return most_common
