"""Convert referenced site images to compressed WebP with clean filenames."""
from __future__ import annotations

import re
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
IMAGE_DIR = ROOT / "public" / "image"
SRC_DIR = ROOT / "src"
QUALITY = 82
MAX_WIDTH = 2400

# source filename (as on disk) -> new webp filename
CONVERT_MAP: dict[str, str] = {
    "about-hammam-scene.jpg": "about-hammam-scene.webp",
    "about-open-jar.jpg": "about-open-jar.webp",
    "about-kessa.jpg": "about-kessa.webp",
    "about-argan-jar.jpg": "about-argan-jar.webp",
    "about-range.jpg": "about-range.webp",
    "about-production-fill.jpg": "about-production-fill.webp",
    "about-gift-set.jpg": "about-gift-set.webp",
    "about-bulk-sizes.jpg": "about-bulk-sizes.webp",
    "about-labeling-line.jpg": "about-labeling-line.webp",
    "about-logo.jpg": "about-logo.webp",
    "about-bathroom-retail.jpg": "about-bathroom-retail.webp",
    "product-natural-beldi.jpg": "product-natural-beldi.webp",
    "product-eucalyptus.jpg": "product-eucalyptus.webp",
    "product-argan-oil.jpg": "product-argan-oil.webp",
    "product-rose-orange.jpg": "product-rose-orange.webp",
    "product-rhassoul.jpg": "product-rhassoul.webp",
    "product-custom-formulations.jpg": "product-custom-formulations.webp",
    "home-hammam-treatment.jpg": "home-hammam-treatment.webp",
    "home-soap-hands.jpg": "home-soap-hands.webp",
    "home-kessa-glove.jpg": "home-kessa-glove.webp",
    "home-hammam-arm.jpg": "home-hammam-arm.webp",
    "home-beldi-soap-jar.jpg": "home-beldi-soap-jar.webp",
    "home-olive-ingredients.jpg": "home-olive-ingredients.webp",
    "Moroccan private label organic products where to buy-min.jpeg": "private-label-jars.webp",
    "Moroccan private label organic products where to buy-min (2).jpeg": "private-label-jars-alt.webp",
    "Moroccan organic products-min.jpg": "wholesale-black-soap-display.webp",
    "Moroccan organic cosmetics.jpg": "moroccan-organic-cosmetics.webp",
    "200 L Barrel-1.jpeg": "bulk-soap-barrel-200l.webp",
    "Pallet- 1.jpeg": "export-pallet-bulk-soap.webp",
    "traditional-black-soap.webp": "beldi-black-soap-paste.webp",
    "beldi-soap-olive-oil.webp": "beldi-soap-olive-oil.webp",
    "black-soap-argan-oil.webp": "black-soap-argan-enriched.webp",
    "black-soap-eucalyptus-pumice.webp": "black-soap-eucalyptus.webp",
    "payment.png": "footer-payment-methods.webp",
    "transport-partner.png": "footer-shipping-partners.webp",
    "Moroccan kessa glove.jpg": "kessa-exfoliating-glove.webp",
    "Huile d'argan cosmetique maroc.jpeg": "cosmetic-argan-oil-morocco.webp",
    "argan oil for hair.jpeg": "argan-oil-hair-care.webp",
    "production huile d'argan maroc.jpg": "argan-oil-production-morocco.webp",
}


def convert_file(src: Path, dst: Path) -> None:
    img = Image.open(src)
    if img.mode in ("RGBA", "P"):
        background = Image.new("RGB", img.size, (255, 255, 255))
        if img.mode == "P":
            img = img.convert("RGBA")
        background.paste(img, mask=img.split()[-1] if img.mode == "RGBA" else None)
        img = background
    elif img.mode != "RGB":
        img = img.convert("RGB")

    width, height = img.size
    if width > MAX_WIDTH:
        new_height = int(height * (MAX_WIDTH / width))
        img = img.resize((MAX_WIDTH, new_height), Image.Resampling.LANCZOS)

    dst.parent.mkdir(parents=True, exist_ok=True)
    img.save(dst, "WEBP", quality=QUALITY, method=6)


def main() -> None:
    replace_pairs: list[tuple[str, str]] = []

    for src_name, dst_name in CONVERT_MAP.items():
        src = IMAGE_DIR / src_name
        if not src.exists():
            print(f"SKIP missing: {src_name}")
            continue
        dst = IMAGE_DIR / dst_name
        convert_file(src, dst)
        old_size = src.stat().st_size
        new_size = dst.stat().st_size
        print(f"OK {src_name} -> {dst_name} ({old_size} -> {new_size} bytes)")
        replace_pairs.append((f"/image/{src_name}", f"/image/{dst_name}"))
        # URL-encoded private label (2)
        if "(" in src_name:
            encoded = src_name.replace(" ", "%20").replace("(", "%28").replace(")", "%29")
            replace_pairs.append((f"/image/{encoded}", f"/image/{dst_name}"))

    # Replace references in src
    for path in SRC_DIR.rglob("*"):
        if path.suffix not in {".tsx", ".ts", ".json", ".jsx", ".js"}:
            continue
        text = path.read_text(encoding="utf-8")
        original = text
        for old, new in replace_pairs:
            text = text.replace(old, new)
        if text != original:
            path.write_text(text, encoding="utf-8")
            print(f"UPDATED {path.relative_to(ROOT)}")

    print("Done.")


if __name__ == "__main__":
    main()
