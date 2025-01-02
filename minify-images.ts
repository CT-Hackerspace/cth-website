import sharp from "sharp";
import assert from "node:assert/strict";

const files = [
    "./public/uploads/2024/12/462553538_902830898707921_4086071429485925367_n.jpg",
    "./public/uploads/2024/12/462563417_584492304274454_6539569610469621805_n.jpg",
    "./public/uploads/2024/12/462566895_2832909300245681_1619977806122309408_n.jpg",
    "./public/uploads/2024/12/toys-for-tots.jpg",
    "./public/uploads/2024/12/vice.jpeg",
    "./public/uploads/2024/12/vice2.jpeg",
]
const promises = []
for (const fileSrc of files) {
    console.log(`found ${fileSrc}`);
    const sharpFile = sharp(fileSrc)
        .resize({
            fit: sharp.fit.inside,
            height: 640,
        })
        .toBuffer()
        .then(e => [fileSrc, e] as const)

    promises.push(sharpFile);
}

for (const [fileSrc, buffer] of await Promise.all(promises)) {
    console.log(`writing ${fileSrc}`);
    await Bun.write(fileSrc, buffer); 
}