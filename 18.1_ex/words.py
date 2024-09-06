def print_upper_words(words, must_start_with=None):
    
    """
    Print each word in the list in uppercase.

    Args:
    words (list of str): The list of words to process.
    must_start_with (set of str, optional): A set of letters that words must start with to be printed. 
                                            If None, all words will be printed in uppercase.

    Example:
    >>> print_upper_words(["hello", "hey", "goodbye", "yo", "yes"], must_start_with={"h", "y"})
    HELLO
    HEY
    YO
    YES
    """

    # If no specific letters are provided, print all words in uppercase
    if must_start_with is None:
        for word in words:
            print(word.upper())
    else:
        for word in words:
            if word[0].lower() in must_start_with:
                print(word.upper())

# Test cases
print_upper_words(["hello", "hey", "goodbye", "yo", "yes","god","gif"], must_start_with={"g"})
print_upper_words(["hello", "hey", "goodbye", "yo", "yes"], must_start_with={"h", "y"})
