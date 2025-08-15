# Función para verificar si un número es primo
def es_primo(n):
    if n < 2:
        return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return False
    return True

# Inicializar suma
suma_primos = 0
numero = 1

# Recorrer del 1 al 100
while numero <= 100:
    if es_primo(numero):
        suma_primos += numero
    numero += 1

# Mostrar resultado
print(f"La suma de los números primos entre 1 y 100 es: {suma_primos}")