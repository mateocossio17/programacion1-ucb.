# Inicializamos variables
numero = 1
suma_pares = 0

# Bucle para recorrer del 1 al 50
while numero <= 50:
    if numero % 2 == 0:  # Verifica si el número es par
        suma_pares += numero
    numero += 1

# Mostrar el resultado
print(f"La suma de los números pares entre 1 y 50 es: {suma_pares}")