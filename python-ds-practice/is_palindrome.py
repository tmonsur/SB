def is_palindrome(phrase):
    # Remove spaces and convert to lowercase
    cleaned_phrase = phrase.replace(" ", "").lower()
    # Check if the cleaned phrase is the same forwards and backwards
    return cleaned_phrase == cleaned_phrase[::-1]

