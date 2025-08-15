# Solicitar al usuario qué número quiere multiplicar
numero = int(input("Ingresa el número para la tabla de multiplicar: "))

# Inicializar el contador
contador = 1

# Usar while para generar la tabla del número
while contador <= 10:
    resultado = numero * contador
    print(f"{numero} x {contador} = {resultado}")
    contador += 1