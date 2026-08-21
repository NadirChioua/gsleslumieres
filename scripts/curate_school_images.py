from __future__ import annotations

import json
import math
from pathlib import Path
from typing import Iterable

from PIL import Image, ImageDraw, ImageFont, ImageOps


PROJECT_ROOT = Path(__file__).resolve().parents[1]
SOURCE_ROOT = PROJECT_ROOT / "Image for site web"
REVIEW_ROOT = PROJECT_ROOT / ".tmp-image-review"
SUPPORTED = {".jpg", ".jpeg", ".png", ".webp"}

EXPORTS = [
    ("root", 38, "general/hero-campus.webp"),
    ("root", 47, "general/contact-campus.webp"),
    ("root", 87, "general/about-life.webp"),
    ("root", 96, "general/why-science.webp"),
    ("root", 114, "general/school-group.webp"),
    ("lycee", 1, "general/location-campus.webp"),
    ("lycee", 31, "general/team-hero.webp"),
    ("lycee", 32, "general/director-message.webp"),
    ("lycee", 48, "general/results.webp"),
    ("primaire", 25, "general/uniform.webp"),
    ("maternelle", 39, "services/cantine.webp"),
    ("lycee", 36, "services/transport.webp"),
    ("maternelle", 55, "activities/theatre.webp"),
    ("primaire", 128, "activities/chorale.webp"),
    ("root", 41, "activities/sport.webp"),
    ("root", 58, "activities/arts.webp"),
    ("root", 19, "activities/sortie.webp"),
    ("primaire", 144, "activities/event-1.webp"),
    ("lycee", 48, "activities/event-2.webp"),
    ("root", 87, "activities/event-3.webp"),
    ("root", 23, "activities/trip-1.webp"),
    ("root", 31, "activities/trip-2.webp"),
    ("root", 45, "activities/trip-3.webp"),
    ("maternelle", 36, "cycles/maternelle/card.webp"),
    ("maternelle", 55, "cycles/maternelle/hero.webp"),
    ("maternelle", 32, "cycles/maternelle/gallery-01.webp"),
    ("maternelle", 36, "cycles/maternelle/gallery-02.webp"),
    ("maternelle", 39, "cycles/maternelle/gallery-03.webp"),
    ("maternelle", 41, "cycles/maternelle/gallery-04.webp"),
    ("maternelle", 55, "cycles/maternelle/gallery-05.webp"),
    ("maternelle", 61, "cycles/maternelle/gallery-06.webp"),
    ("maternelle", 67, "cycles/maternelle/gallery-07.webp"),
    ("maternelle", 70, "cycles/maternelle/gallery-08.webp"),
    ("maternelle", 72, "cycles/maternelle/gallery-09.webp"),
    ("maternelle", 86, "cycles/maternelle/gallery-10.webp"),
    ("maternelle", 99, "cycles/maternelle/gallery-11.webp"),
    ("maternelle", 101, "cycles/maternelle/gallery-12.webp"),
    ("primaire", 5, "cycles/primaire/card.webp"),
    ("primaire", 71, "cycles/primaire/hero.webp"),
    ("primaire", 5, "cycles/primaire/gallery-01.webp"),
    ("primaire", 25, "cycles/primaire/gallery-02.webp"),
    ("primaire", 27, "cycles/primaire/gallery-03.webp"),
    ("primaire", 31, "cycles/primaire/gallery-04.webp"),
    ("primaire", 35, "cycles/primaire/gallery-05.webp"),
    ("primaire", 38, "cycles/primaire/gallery-06.webp"),
    ("primaire", 47, "cycles/primaire/gallery-07.webp"),
    ("primaire", 52, "cycles/primaire/gallery-08.webp"),
    ("primaire", 63, "cycles/primaire/gallery-09.webp"),
    ("primaire", 69, "cycles/primaire/gallery-10.webp"),
    ("primaire", 71, "cycles/primaire/gallery-11.webp"),
    ("primaire", 98, "cycles/primaire/gallery-12.webp"),
    ("root", 87, "cycles/college/card.webp"),
    ("root", 107, "cycles/college/hero.webp"),
    ("root", 38, "cycles/college/gallery-01.webp"),
    ("root", 41, "cycles/college/gallery-02.webp"),
    ("root", 50, "cycles/college/gallery-03.webp"),
    ("root", 62, "cycles/college/gallery-04.webp"),
    ("root", 87, "cycles/college/gallery-05.webp"),
    ("root", 96, "cycles/college/gallery-06.webp"),
    ("root", 98, "cycles/college/gallery-07.webp"),
    ("root", 107, "cycles/college/gallery-08.webp"),
    ("root", 108, "cycles/college/gallery-09.webp"),
    ("root", 111, "cycles/college/gallery-10.webp"),
    ("root", 114, "cycles/college/gallery-11.webp"),
    ("root", 2, "cycles/college/gallery-12.webp"),
    ("lycee", 43, "cycles/lycee/card.webp"),
    ("lycee", 9, "cycles/lycee/hero.webp"),
    ("lycee", 1, "cycles/lycee/gallery-01.webp"),
    ("lycee", 3, "cycles/lycee/gallery-02.webp"),
    ("lycee", 9, "cycles/lycee/gallery-03.webp"),
    ("lycee", 30, "cycles/lycee/gallery-04.webp"),
    ("lycee", 31, "cycles/lycee/gallery-05.webp"),
    ("lycee", 32, "cycles/lycee/gallery-06.webp"),
    ("lycee", 36, "cycles/lycee/gallery-07.webp"),
    ("lycee", 42, "cycles/lycee/gallery-08.webp"),
    ("lycee", 43, "cycles/lycee/gallery-09.webp"),
    ("lycee", 45, "cycles/lycee/gallery-10.webp"),
    ("lycee", 48, "cycles/lycee/gallery-11.webp"),
    ("lycee", 49, "cycles/lycee/gallery-12.webp"),
]


def iter_groups() -> Iterable[tuple[str, Path]]:
    yield "root", SOURCE_ROOT
    for folder in sorted(SOURCE_ROOT.iterdir()):
        if folder.is_dir():
            yield folder.name.lower(), folder


def image_info(path: Path) -> dict:
    with Image.open(path) as image:
        image = ImageOps.exif_transpose(image)
        width, height = image.size
    return {
        "file": str(path),
        "name": path.name,
        "width": width,
        "height": height,
        "ratio": round(width / height, 3) if height else 0,
        "size": path.stat().st_size,
    }


def score(info: dict) -> float:
    ratio = info["ratio"]
    area = info["width"] * info["height"]
    landscape_bonus = 1.25 if 1.15 <= ratio <= 2.0 else 1
    portrait_bonus = 1.1 if 0.62 <= ratio < 1 else 1
    return area * landscape_bonus * portrait_bonus


def make_sheet(name: str, entries: list[dict], suffix: str) -> None:
    REVIEW_ROOT.mkdir(parents=True, exist_ok=True)
    font = ImageFont.load_default()
    thumb_w, thumb_h, label_h = 220, 150, 34
    cols, per_sheet = 4, 24

    for sheet_index in range(math.ceil(len(entries) / per_sheet)):
        chunk = entries[sheet_index * per_sheet : (sheet_index + 1) * per_sheet]
        rows = math.ceil(len(chunk) / cols)
        sheet = Image.new("RGB", (cols * thumb_w, rows * (thumb_h + label_h)), "white")
        draw = ImageDraw.Draw(sheet)

        for index, entry in enumerate(chunk):
            path = Path(entry["file"])
            x = (index % cols) * thumb_w
            y = (index // cols) * (thumb_h + label_h)
            try:
                with Image.open(path) as image:
                    image = ImageOps.exif_transpose(image).convert("RGB")
                    image.thumbnail((thumb_w, thumb_h), Image.Resampling.LANCZOS)
                    bg = Image.new("RGB", (thumb_w, thumb_h), (245, 245, 245))
                    bg.paste(image, ((thumb_w - image.width) // 2, (thumb_h - image.height) // 2))
                    sheet.paste(bg, (x, y))
            except Exception:
                draw.rectangle([x, y, x + thumb_w, y + thumb_h], fill=(250, 230, 230))

            label = f"{entry['id']}: {path.stem[:24]}"
            draw.rectangle([x, y + thumb_h, x + thumb_w, y + thumb_h + label_h], fill="white")
            draw.text((x + 4, y + thumb_h + 4), label, fill=(0, 0, 0), font=font)

        sheet.save(REVIEW_ROOT / f"{name}-{suffix}-{sheet_index + 1:02}.jpg", quality=88)


def main() -> None:
    REVIEW_ROOT.mkdir(parents=True, exist_ok=True)
    meta: dict[str, list[dict]] = {}

    for name, folder in iter_groups():
        if not folder.exists():
            continue

        entries: list[dict] = []
        for idx, path in enumerate(sorted(folder.iterdir()), start=1):
            if not path.is_file() or path.suffix.lower() not in SUPPORTED:
                continue
            try:
                info = image_info(path)
            except Exception as exc:
                info = {"file": str(path), "name": path.name, "error": str(exc)}
            info["id"] = idx
            entries.append(info)

        meta[name] = entries
        ranked = sorted((e for e in entries if "error" not in e), key=score, reverse=True)
        make_sheet(name, ranked[:72], "best")
        make_sheet(name, entries[:48], "first")

    (REVIEW_ROOT / "meta.json").write_text(json.dumps(meta, ensure_ascii=False, indent=2), encoding="utf-8")
    export_images(meta)
    print(f"review sheets written to {REVIEW_ROOT}")


def export_images(meta: dict[str, list[dict]]) -> None:
    target_root = PROJECT_ROOT / "public" / "images" / "school-life"
    target_root.mkdir(parents=True, exist_ok=True)

    for group, image_id, relative_target in EXPORTS:
        entry = next((item for item in meta.get(group, []) if item.get("id") == image_id), None)
        if not entry:
            raise RuntimeError(f"Missing image {group}:{image_id}")

        source = Path(entry["file"])
        target = target_root / relative_target
        target.parent.mkdir(parents=True, exist_ok=True)

        with Image.open(source) as image:
            image = ImageOps.exif_transpose(image).convert("RGB")
            image.thumbnail((1800, 1800), Image.Resampling.LANCZOS)
            image.save(target, format="WEBP", quality=78, method=6)


if __name__ == "__main__":
    main()
