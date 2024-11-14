def multiply_even_numbers(nums):
    
    result = 1
    found_even = False

    for num in nums:
        if num % 2 == 0:  # Check if the number is even
            result *= num  # Multiply result by the even number
            found_even = True  # Set flag to True if an even number is found
    
    # If no even numbers were found, return 1
    if not found_even:
        return 1
    
    return result
