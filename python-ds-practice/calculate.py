def calculate(operation, a, b, make_int=False, message='The result is'):
    # Perform the operation
    if operation == 'add':
        result = a + b
    elif operation == 'subtract':
        result = a - b
    elif operation == 'multiply':
        result = a * b
    elif operation == 'divide':
        if b == 0:  # Avoid division by zero
            return None
        result = a / b
    else:
        return None  # If operation is invalid, return None
    
    # Truncate the result to an integer if make_int is True
    if make_int:
        result = int(result)

    # Return the result with the message
    return f"{message} {result}"
