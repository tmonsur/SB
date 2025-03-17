import random

class WordFinder:
    """Machine for finding random words from a dictionary."""

    def __init__(self, path: str):
        """Read dictionary and report the number of words read."""
        dict_file = open(path, "r")  # Open file
        self.words = self.parse(dict_file)  # Call parse() for processing
        dict_file.close()  # Close file after reading

        print(f"{len(self.words)} words read")

    def parse(self, dict_file) -> list:
        """Parse dictionary file -> list of words (default: keep all lines)."""
        return [line.strip() for line in dict_file]

    def random(self) -> str:
        """Return a random word from the list."""
        return random.choice(self.words)


class SpecialWordFinder(WordFinder):
    """Specialized WordFinder that excludes blank lines and comments."""

    def parse(self, dict_file) -> list:
        """Parse dictionary file -> list of words, skipping blanks/comments."""
        return [line.strip() for line in dict_file 
                if line.strip() and not line.startswith("#")]
