Algoritmo "exer4"
Var
    i: inteiro
    nros: vetor [1.5] de inteiro
Inicio
    para i de 1 ate 5 faca
        escreval("Digite um valor")
    leia (nros[i])
fimpara
    para i de 1 ate 5 faca
    escolha i
        caso 1
            nros[i] <- nros[i]-1
        caso 2
            nros[i] <- nros[i]+1
        caso 3
            nros[i] <- nros [i-2]+nros [i-1]
        outrocaso
            nros [i] <-0
        fimescolha
    fimpara
        para i de 1 ate 5 faca
            escreval (nros [i])
    fimpara
Fimalgoritmo