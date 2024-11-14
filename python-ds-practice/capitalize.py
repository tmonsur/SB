def capitalize(phrase):
    
    words = phrase.split(" ", 1)  # Split into two parts: first word and the rest
    if words:
        # Capitalize the first word and concatenate with the rest of the string
        return words[0].capitalize() + (words[1] if len(words) > 1 else "")
    return phrase
