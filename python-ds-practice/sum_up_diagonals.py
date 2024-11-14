def sum_up_diagonals(matrix):
  
    diagonal_sum = 0
    n = len(matrix)  
    
    for i in range(n):
        diagonal_sum += matrix[i][i]  # TL-to-BR diagonal
        diagonal_sum += matrix[i][n-1-i]  # BL-to-TR diagonal
    
    # If the matrix has an odd size, the center element is counted twice, so subtract it once
    if n % 2 == 1:
        center_index = n // 2
        diagonal_sum -= matrix[center_index][center_index]
    
    return diagonal_sum
