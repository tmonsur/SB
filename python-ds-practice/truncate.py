def truncate(phrase, n):
    
    if n<3:
        return "Truncation must be at least 3 characters."
        
    # If the phrase is longer than n, truncate and add '...'
    if len(phrase) >= n:
        return phrase[:n-3] + '...'

    # If the phrase is shorter than n, return it as is
    return phrase
