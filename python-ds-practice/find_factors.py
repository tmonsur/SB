def find_factors(num):
    factors = []
    for i in range(1, num + 1):
        if num % i == 0:  # Check if there is no remainder
            factors.append(i)
    return factors