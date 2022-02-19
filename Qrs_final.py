import qrcode
from cryptography.fernet import Fernet
from PIL import Image

Logo_link = 'rv.png'
 
logo = Image.open(Logo_link)
 
# taking base width
basewidth = 100
 
# adjust image size
wpercent = (basewidth/float(logo.size[0]))
hsize = int((float(logo.size[1])*float(wpercent)))
logo = logo.resize((basewidth, hsize), Image.ANTIALIAS)
QRcode = qrcode.QRCode(
    error_correction=qrcode.constants.ERROR_CORRECT_H
)

str1 = "9586879"
  
message = str1

#key = Fernet.generate_key()
keystring = "08eQiFvoq1FC9uo89bf9U4NDl8YctJjD4HFsdXG1deo="
key = bytes(keystring, 'utf-8')
print("La key es:"+ str(key))
 
fernet = Fernet(key)
 
enctex = fernet.encrypt(message.encode())


print("CADENA ORIGINAL: ", message)
print("CADENA ENCRIPTADA: ", enctex.decode("utf-8"))


QRcode.add_data(enctex)
 
# generating QR code
QRcode.make()
 
# taking color name from user
QRcolor = 'Purple'
 
# adding color to QR code
QRimg = QRcode.make_image(
    fill_color=QRcolor, back_color="white").convert('RGB')
 
# set size of QR code
pos = ((QRimg.size[0] - logo.size[0]) // 2,
       (QRimg.size[1] - logo.size[1]) // 2)
QRimg.paste(logo, pos)
 
# save the QR code generated
QRimg.save('gfg_QR.png')
 
print('QR code generated!')


img = qrcode.make(enctex.decode("utf-8"))
f = open("output.png", "wb")
img.save(f)
f.close()