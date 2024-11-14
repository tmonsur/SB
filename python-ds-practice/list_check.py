def list_check(lst):

    for i in lst:
        if not isinstance(i,list):
            return False
    return True