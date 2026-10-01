from PIL import Image

# Load the image
img = Image.open('d:/project/practo-clone/public/icons-sprite.png')
width, height = img.size

# The icons are in a single row. The row seems to start around y=20 and ends around y=120.
# The 7 cards are spread across the width (1024).
# Card width is roughly 146px.
# Let's crop 7 regions.
card_w = width / 7

for i in range(7):
    left = i * card_w
    right = (i + 1) * card_w
    # Just crop the top part where the icons are likely to be
    top = 10
    bottom = 120
    
    icon_crop = img.crop((left, top, right, bottom))
    # We want to crop to the bounding box of the non-transparent/non-white pixels?
    # The image has a white/light background, so finding the exact icon might need some logic,
    # or I can just use the crops and CSS to center them!
    icon_crop.save(f'd:/project/practo-clone/public/icons/icon_{i+1}.png')
    
print("Crops saved!")
