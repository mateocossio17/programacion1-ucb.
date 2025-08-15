def operar_binarios(bin1, bin2, operacion):
    # Convertir binarios a enteros
    num1 = int(bin1, 2)
    num2 = int(bin2, 2)

    # Realizar la operación
    if operacion == "+":
        resultado = num1 + num2
    elif operacion == "-":
        resultado = num1 - num2
    elif operacion == "*":
        resultado = num1 * num2
    elif operacion == "/":
        if num2 == 0:
            print("Error: división por cero.")
            return
        resultado = num1 // num2  # División entera
    else:
        print("Operación no válida.")
        return

    # Mostrar resultados
    print(f"{bin1} ({num1}) {operacion} {bin2} ({num2}) = {bin(resultado)[2:]} ({resultado})")

# Ejemplo de uso
binario1 = input("Ingresa el primer número binario: ")
binario2 = input("Ingresa el segundo número binario: ")
operacion = input("Ingresa la operación (+, -, *, /): ")

operar_binarios(binario1, binario2, operacion)