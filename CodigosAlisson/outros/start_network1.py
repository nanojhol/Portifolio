# -*- coding: utf-8 -*-
#!/usr/bin/python

import os
import time
import socket
from infra.log import Log
from datetime import datetime
from infra.config import Config

confiaveis = ['www.washego.com.br', 'google.com.br']

while True:
    def check_host():
        global confiaveis
        for host in confiaveis:
            a = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
            a.settimeout(1)
        
            try:
                b = a.connect_ex((host, 80))
                if b == 0:
                    return True

            except:
                pass

            a.close()
            return False
                    
    if check_host() and "Conexão Ativa" or "Conexão Inativa" is "Conexão Ativa":
        time.sleep(1)
        
    else:
        if check_host() and "Conexão Ativa" or "Conexão Inativa" is "Conexão Inativa":
            config = Config()
            log = Log(config)
            test = 0
        
            while(test <= 4): 
                test += 1 
                time.sleep(60)
                if check_host() and "Conexão Ativa" or "Conexão Inativa" is "Conexão Ativa": 
                    log.info('\033[33m' + str(test) + ' Testes Realizados - Maquina Online Novamente ' '\033[m')
                    os.system("mpg321 -g 100 > /dev/null 2>&1 /var/tmp/washngo/sounds/reiniciar_internet.mp3")
                    break

                if(test == 5):
                    log.info("\033[32mMaquina Offline " + ' 15 Teste de 60 segundos \033[m')
                    os.system("sudo reboot")
                    time.sleep(1)

