# funciones todopoderosas 
# Función que convierte un número decimal a binario, octal y hexadecimal
def convertir_numero(decimal):
    binario = bin(decimal)         # Convierte a binario (prefijo '0b')
    octal = oct(decimal)           # Convierte a octal (prefijo '0o')
    hexadecimal = hex(decimal)     # Convierte a hexadecimal (prefijo '0x')

    # Imprimir resultados sin prefijos
    print(f"Decimal: {decimal}")
    print(f"Binario: {binario[2:]}")
    print(f"Octal: {octal[2:]}")
    print(f"Hexadecimal: {hexadecimal[2:].upper()}")

# Ejemplo de uso
numero = int(input("Ingresa un número decimal: "))
convertir_numero(numero)