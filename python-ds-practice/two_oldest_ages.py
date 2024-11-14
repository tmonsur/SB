def two_oldest_ages(ages):
    
    # Remove duplicates by converting to a set, then sort the unique ages
    unique_ages = sorted(set(ages))
    
    # Get the last two elements from the sorted list for the two oldest ages
    return (unique_ages[-2], unique_ages[-1])