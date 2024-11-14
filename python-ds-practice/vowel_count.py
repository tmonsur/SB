def vowel_count(phrase):
    vowels = "aeiou"
    # Create an empty dictionary to store the frequency of vowels
    freq_map = {}

    phrase = phrase.lower()

    # Iterate through the string
    for char in phrase:
        
        if char in vowels:
            if char in freq_map:
                freq_map[char] += 1
            else:
                freq_map[char] = 1

    # Return the frequency map of vowels
    return freq_map