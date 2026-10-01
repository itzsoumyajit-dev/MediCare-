from PIL import Image

img = Image.open('d:/project/practo-clone/public/icons-sprite.png')

pitch = 141.333
start_center = 88
icon_size = 80
y_center = 52 # moved up slightly to avoid text

for i in range(7):
    cx = start_center + i * pitch
    left = int(cx - icon_size / 2)
    right = int(cx + icon_size / 2)
    top = int(y_center - icon_size / 2)
    bottom = int(y_center + icon_size / 2)
    
    crop = img.crop((left, top, right, bottom))
    crop.save(f'd:/project/practo-clone/public/icons/icon_{i+1}.png')

