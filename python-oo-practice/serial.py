class SerialGenerator:
    """A class to generate unique sequential serial numbers."""
    
    def __init__(self, start: int):
        """Initialize the generator with a starting number."""
        self.start = start
        self.current = start
    
    def generate(self) -> int:
        """Return the next sequential number and increment the counter."""
        serial_number = self.current
        self.current += 1
        return serial_number
    
    def reset(self) -> None:
        """Reset the serial number to the original start number."""
        self.current = self.start
    
    def __repr__(self) -> str:
        """Return a string representation of the SerialGenerator instance."""
        return f"SerialGenerator(start={self.start})"