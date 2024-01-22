from time import sleep
import os


def addline(text):
    linha_especifica = 3 # adicionar apartir da 3 linha

    file = open('/etc/teamviewer/global.conf', 'r') # ler linha por linha
    lines = file.readlines()
    file.close()

    lines.insert(linha_especifica, text + "\n") # inserir texto

    file = open('/etc/teamviewer/global.conf', 'w') # gravar nova linha
    file.writelines(lines)
    file.close()

def search(msg1): # buscar palavras no DEF WOLD
    archive01 = open('/etc/teamviewer/global.conf', 'r')
    for linha in archive01:
#        linha = linha.rstrip()
        if str(msg1) in linha: # msg2 convertido para str
            print(linha)
            return str(linha)
    archive01.close()


def read(msg1): # comparacao positiva de frases que vem do DEF WOLD
    if search(msg1) and "Linha Ativa" and 'Linha Inativa': # para aparecer as linhas inseridas retire (and 'Linhas Inativas')
        str(msg1)
#       print("Linha: ", str(msg1), " Encontrada \n")
    elif search(msg1) and "Linha Inativa" or "Linha Ativa": # comparacao negativa de frases que vem do DEF WOLD
#            print('\nAdicionado: ', str(msg1), '\n')
            addline(str(msg1))  # Buscando Frases do MSG1/CONVERT e regras para add texto em str


def wold():
    contador = 0
    while contador <= 3: # gerar um ciclo de 4 voltas para ler 4 if's
        contador += 1
        sleep(1)

        def convert():
            ClientID = 1
            Always_Online = 2
            EulaAccepted = 3
            EulaAcceptedRevision = 4

            if contador == ClientID:
                ClientID = 'ClientID'
#                print(ClientID)
                return str(ClientID)

            if contador == Always_Online:
                Always_Online = '[int32] Always_Online = 1'
#                print(Always_Online)
                return str(Always_Online)

            if contador == EulaAccepted:
                EulaAccepted = '[int32] EulaAccepted = 1'
#                print(EulaAccepted)
                return str(EulaAccepted)

            if contador == EulaAcceptedRevision:
                EulaAcceptedRevision = '[int32] EulaAcceptedRevision = 6'
#                print(EulaAcceptedRevision)
                return str(EulaAcceptedRevision)

        read(str(convert()))
    active('ativador')


def active(ativador):
    ativador = ['sudo teamviewer --daemon restart',
                'sudo teamviewer --daemon enable',
                'sudo teamviewer passwd H@rumi02']
    for i in ativador:
        sleep(5)
#        print(i)
        os.system(i)


wold()