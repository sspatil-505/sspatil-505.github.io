import os
import urllib.request

images_dir = "images"
if not os.path.exists(images_dir):
    os.makedirs(images_dir)

opener = urllib.request.build_opener()
opener.addheaders = [('User-Agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36')]
urllib.request.install_opener(opener)

covers = [
    # Death on the Nile (Amazon)
    ("https://m.media-amazon.com/images/I/91eJ3h0CjBL._AC_UF1000,1000_QL80_.jpg", "death_on_the_nile.jpg"),
    # Jaave Tyancha Desha (Goodreads)
    ("https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1594982669i/6157855.jpg", "jaave_tyancha_desha.jpg")
]

for url, filename in covers:
    try:
        print(f"Downloading {filename}...")
        urllib.request.urlretrieve(url, os.path.join(images_dir, filename))
        size = os.path.getsize(os.path.join(images_dir, filename))
        print(f"Successfully downloaded {filename} ({size} bytes)")
    except Exception as e:
        print(f"Failed to download {filename}: {e}")
