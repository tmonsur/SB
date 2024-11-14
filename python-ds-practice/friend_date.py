def friend_date(a, b):
    # Extract the hobby lists for both friends
    hobbies_a = set(a[2])  
    hobbies_b = set(b[2])  
    
    # Check for common hobbies
    return bool(hobbies_a & hobbies_b)  # Return True if there's an intersection
