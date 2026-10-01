from PIL import Image

img = Image.open('d:/project/practo-clone/public/icons-sprite.png')

# Tuned coordinates based on viewing icon_1.png
# icon_1 was shifted left.
# Card width is 146.
# By looking at the image, left margin of the first card is ~36px.
# Card width is actually 124px + gaps.
# Let's crop a bigger box (120x120) from the top of each card so I can see everything and then I'll narrow it down.
# Let's just output the whole card for card 1.

crop1 = img.crop((0, 0, 150, 200))
crop1.save('d:/project/practo-clone/public/icons/test_card1.png')

print("test card saved")
