def partition(lst, fn):
    
    a = []  # List for items that pass the test
    b = []  # List for items that fail the test
    
    for item in lst:
        if fn(item):
            a.append(item)  # Add item to list 'a' if it passes the test
        else:
            b.append(item)  # Add item to list 'b' if it fails the test
    
    return [a, b]  # Return the partitioned lists as a list of two lists
