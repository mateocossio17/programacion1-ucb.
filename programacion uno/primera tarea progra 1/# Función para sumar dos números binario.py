# Función para sumar dos números binarios y mostrar el resultado en decimal
def sumar_binarios(bin1, bin2):
    # Convertir binarios a enteros
    num1 = int(bin1, 2)
    num2 = int(bin2, 2)

    # Sumar los números
    suma = num1 + num2

    # Mostrar resultados
    print(f"Primer número binario: {bin1} → Decimal: {num1}")
    print(f"Segundo número binario: {bin2} → Decimal: {num2}")
    print(f"Suma en binario: {bin(suma)[2:]}")
    print(f"Suma en decimal: {suma}")

# Ejemplo de uso
binario1 = input("Ingresa el primer número binario: ")
binario2 = input("Ingresa el segundo número binario: ")
sumar_binarios(binario1, binario2)