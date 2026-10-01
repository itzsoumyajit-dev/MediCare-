from PIL import Image

img = Image.open('d:/project/practo-clone/public/icons-sprite.png')

# Based on test_card1.png (which was x=0 to 150):
# Icon box seems to be: x = 32, y = 14, w = 92, h = 92
# Wait, looking closer at test_card1.png:
# Left edge of card is at ~26px.
# Inside card, padding is ~12px.
# Left edge of icon is ~ 38px.
# Top edge is ~ 14px.
# Width of icon: right edge is ~ 134px. 134 - 38 = 96px.

x_start = 38
y_start = 14
icon_size = 96
card_w = 1024 / 7.0

for i in range(7):
    # calculate the x offset for each card
    # Actually the gap between cards might not be perfectly card_w.
    # Let's see... 1024 width. 7 cards. 1024/7 = 146.28.
    # If the first card starts at 26, the icon starts at 38.
    # Center of first card icon: 38 + 48 = 86.
    # Let's just try cropping based on an exact pitch.
    # What if we just use a computer vision method? 
    pass

import cv2
import numpy as np

# Load image
img_cv = cv2.imread('d:/project/practo-clone/public/icons-sprite.png')
gray = cv2.cvtColor(img_cv, cv2.COLOR_BGR2GRAY)

# The icons have a pastel background which is darker than the white card background.
# Actually, the cards are white. The icons are pastel.
# Let's just crop using the fixed pitch and see if it drifts.
# First icon: 37 to 37+94.
# Pitch = 1024/7 = 146.28
# Second icon: 37 + 146.28 = 183.28.

pitch = 146.28
x_offset = 36
y_offset = 12
size = 96

for i in range(7):
    left = int(x_offset + i * pitch)
    right = left + size
    top = y_offset
    bottom = top + size
    crop = img.crop((left, top, right, bottom))
    crop.save(f'd:/project/practo-clone/public/icons/icon_{i+1}.png')
    
print("Cropped with fixed pitch!")
