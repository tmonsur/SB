def flip_case(phrase, to_swap):
    
    # Initialize an empty string to store the result
    result = ''
    
    # Loop through each character in the phrase
    for char in phrase:
        # If the character matches 'to_swap', flip its case
        if char.lower() == to_swap.lower():
            if char.islower():
                result += char.upper()
            else:
                result += char.lower()
        else:
            result += char
    
    return result

