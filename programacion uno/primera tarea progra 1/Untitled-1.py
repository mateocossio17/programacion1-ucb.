def hex_a_binario(hexadecimal):
    # Convertir de hexadecimal a entero, luego a binario
    decimal = int(hexadecimal, 16)
    binario = bin(decimal)[2:]
    print(f"Hexadecimal: {hexadecimal.upper()} → Binario: {binario}")

def binario_a_hex(binario):
    # Convertir de binario a entero, luego a hexadecimal
    decimal = int(binario, 2)
    hexadecimal = hex(decimal)[2:].upper()
    print(f"Binario: {binario} → Hexadecimal: {hexadecimal}")

# Ejemplo de uso
opcion = input("¿Qué conversión deseas hacer? (1: Hex a Binario, 2: Binario a Hex): ")

if opcion == "1":
    hex_input = input("Ingresa un número hexadecimal: ")
    hex_a_binario(hex_input)
elif opcion == "2":
    bin_input = input("Ingresa un número binario: ")
    binario_a_hex(bin_input)
else:
    print("Opción no válida.")