def list_manipulation(lst, command, location, value=None):
    # Check for invalid command or location
    if command not in ['add', 'remove'] or location not in ['beginning', 'end']:
        return None

    if command == 'remove':
        # Remove item from beginning or end
        if location == 'beginning':
            return lst.pop(0)
        elif location == 'end':
            return lst.pop()

    elif command == 'add':
        # Add item to beginning or end
        if location == 'beginning':
            lst.insert(0, value)
        elif location == 'end':
            lst.append(value)
        return lst