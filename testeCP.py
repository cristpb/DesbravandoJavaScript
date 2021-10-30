# Função que irá somar três números e retornar o resultado
def Soma():
    a = int(input("Digite o primeiro número: "))
    b = int(input("Digite o segundo número: "))
    c = int(input("Digite o terceiro número: "))
    return a + b + c

if __name__ == "__main__":
    print(Soma())