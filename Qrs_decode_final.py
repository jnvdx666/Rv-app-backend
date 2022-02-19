from cv2 import imshow
from pyzbar.pyzbar import decode
from PIL import Image
from cryptography.fernet import Fernet
import cv2
from PIL import Image
from pyzbar.pyzbar import decode
import matplotlib.pyplot as plt    
import math
import numpy as np

keystring = "08eQiFvoq1FC9uo89bf9U4NDl8YctJjD4HFsdXG1deo="
key = bytes(keystring, 'utf-8')
fernet = Fernet(key)

filename = "8.png"

image = cv2.imread(filename)
scale_percent = 50 
width = int(image.shape[1] * scale_percent / 100)
height = int(image.shape[0] * scale_percent / 100)
dim = (width, height)
  

resized = cv2.resize(image, dim, interpolation = cv2.INTER_AREA)
window_name = 'image'
cv2.imshow(window_name, resized)
cv2.waitKey(0)   
cv2.destroyAllWindows() 
detector = cv2.QRCodeDetector()

data = decode(resized)
print(data)

encrypted = data[0][0]

enctex = bytes(encrypted)
  
dectex = fernet.decrypt(enctex).decode()
 
print("CADENA DESENCRIPTADA: ", dectex)









