'''
Equipe 05

Augusto 195304 1ºSI
Denis 199988 1ºSI
Hanne 097353 1ºSI
Cristian 196094 1ºSI
Andre 198246 1ºSI
Elize 196260 1ºSI
Davi 184975 3ºSI
Guilherme Paulino 052974 5ºEG
Julia 199633 1ºSI


'''

alfabeto = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'] # define a lista do vigenere

class Vigenere:
    def __init__(self, message, key):

        #verificando se a key não é maior que a texto
        keystream = ''
        i = 0
        # aqui serve para deixar a key com o mesmo tamanho da mensagem
        while len(keystream) < len(message):
            keystream += key[i]
            i += 1
            if i == len(key):
                i = 0
        self.message = message.upper()
        self.key = keystream.upper()
        self.master = key


    def encryption(self):
        key = self.key
        message = self.message
        encrypted_message = ''
        for i in range(len(message)):
            if message[i] != ' ':
                # aqui pegamos o index de cada letra da mensagem e da keystream e montamos a mensagem criptografada
                index_message = int(alfabeto.index(message[i]))
                index_key = int(alfabeto.index(key[i]))

                encrypted_message += str(alfabeto[(index_message + index_key) % len(alfabeto)])
            else:
                encrypted_message += ' '
        print(f"Mensagem: {message}")
        print(f"Key: {self.master}")
        print(f"Mensagem Criptografada: {encrypted_message} \n")
    
    def decryption(self):
        key = self.key
        message = self.message
        encrypted_message = ''
        for i in range(len(message)):
            if message[i] != ' ':

                index_message = int(alfabeto.index(message[i]))
                index_key = int(alfabeto.index(key[i]))
                # Aqui fazemos o processo contrario * | Engenhraia reversa | *
                encrypted_message += str(alfabeto[(index_message - index_key) % len(alfabeto)])
            else:
                encrypted_message += ' '
        print(f"Mensagem Criptografada: {message}")
        print(f"Key: {self.master}")
        print(f"Mensagem Descriptografada: {encrypted_message} \n")




# Parte visual - start
import PySimpleGUI as sg

class Tela:
    def __init__(self):
        layout = [
            [sg.Text("Digite a mensagem"),sg.Input(key = "message")],
            [sg.Text("Digite a key"), sg.Input(key = "key")],
            [sg.Radio("Criptografar","Vigenere", key = "Criptografar"), sg.Radio("Descriptografar","Vigenere", key = "Descriptografar")],
            [sg.Button("Analizar")],
            [sg.Output(size = (70,20))]
        ]

        self.janela = sg.Window("Semana da Computação").layout(layout)
        
    def start(self):
        while True:
            self.button, self.values = self.janela.Read()
            
            message = self.values["message"]
            key = self.values["key"]
            try:
                int(key)
                sg.popup("A chave não pode ser um número")
            except:
                if len(key) > len(message):
                    sg.popup("A chave não pode ser maior que a mensagem")
                else:
                    vigi = Vigenere(message, key)
                    if self.values["Criptografar"] == True:
                        vigi.encryption()
                    else:
                        vigi.decryption()
# end


tela = Tela()

tela.start()