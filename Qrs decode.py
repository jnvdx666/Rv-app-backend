import qrcode
import rsa
from pyzbar.pyzbar import decode
from PIL import Image
from cryptography.fernet import Fernet

keystring = "08eQiFvoq1FC9uo89bf9U4NDl8YctJjD4HFsdXG1deo="
key = bytes(keystring, 'utf-8')
fernet = Fernet(key)

img = Image.open('output.png')

result = decode(img)

for i in result:
    print("LECTURA DEL QR: " + i.data.decode("utf-8"))

enctex = i.data.decode("utf-8")

enctex = bytes(enctex, 'utf-8')
  
dectex = fernet.decrypt(enctex).decode()
 
print("CADENA DESENCRIPTADA: ", dectex)
