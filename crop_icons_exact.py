from PIL import Image

img = Image.open('d:/project/practo-clone/public/icons-sprite.png')
w, h = img.size
card_w = w / 7.0

# Initial guess: the icons are centered in each card, roughly near the top.
# Let's say card width is 146.28. Center is 73.14.
# Icon width/height ~ 80px.
# Top offset ~ 15px.

icon_size = 84
top_offset = 12

for i in range(7):
    center_x = (i * card_w) + (card_w / 2.0)
    left = int(center_x - (icon_size / 2.0))
    right = int(center_x + (icon_size / 2.0))
    top = top_offset
    bottom = top_offset + icon_size
    
    crop = img.crop((left, top, right, bottom))
    crop.save(f'd:/project/practo-clone/public/icons/icon_{i+1}.png')

print("Cropped 7 icons!")
