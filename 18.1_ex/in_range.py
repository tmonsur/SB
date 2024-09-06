def in_range(nums, lowest, highest):
    # Print numbers inside range.
    # YOUR CODE HERE
    
    for num in nums:
        if num >= lowest and num<=highest:
            print(f"{num} fits")


in_range([10, 20, 30, 40, 50], 15, 30)            
