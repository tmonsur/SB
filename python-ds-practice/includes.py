def includes(collection, sought, start=None):
    if isinstance(collection, (list, tuple, str)):  # Ordered collections (list, tuple, string)
        return sought in collection[start:]
    
    elif isinstance(collection, set):  # For sets, order doesn't matter
        return sought in collection
    
    elif isinstance(collection, dict):  # For dictionaries, check if sought is a value
        return sought in collection.values()
    
    return False