print('1 = Abrir menu do Win \n'
      '2 = Abrir navegador \n'
      '3 =  Clicar \n'
      '4 = Posição do Mouse\n')

entrada = input('Escolha uma função: ')

if entrada == '0':
    print('opção invalida')

elif entrada == '1':
    print('opção Executad 1')
    #pyautogui.press('f4', interval=0.25)
    #pyautogui.hotkey('fn','f4', interval=0.25)    
elif entrada == '2':
    print('opção Executada 2')
    #pyautogui.press('f4', interval=0.25)
else:
    print('Nada digitado')