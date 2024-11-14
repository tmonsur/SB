def find_the_duplicate(nums):
    
    # Create an empty set to store seen numbers
    seen = set()
    
    # Iterate through each number in the list
    for num in nums:
        # If the number is already in seen, it's the duplicate
        if num in seen:
            return num
        # Otherwise, add the number to seen
        seen.add(num)
    
    # If no duplicate is found, return None
    return None