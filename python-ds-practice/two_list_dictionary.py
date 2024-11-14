def two_list_dictionary(keys, values):
    result = {}
    
    # Iterate over the keys and values
    for i in range(len(keys)):
        if i < len(values):  # If there's a corresponding value for the key
            result[keys[i]] = values[i]
        else:  # If no corresponding value, assign None
            result[keys[i]] = None
            
    return result