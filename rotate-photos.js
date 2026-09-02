const fs = require('node:fs');
const path = 'src/data/photographyData.js';
let content = fs.readFileSync(path, 'utf8');

const rightGroupRegex = /(layout: 'right',[\s\S]*?photos: \[)([\s\S]*?)(\])/g;

content = content.replace(rightGroupRegex, (match, prefix, photosBlock, suffix) => {
    const objects = [];
    let depth = 0;
    let start = -1;
    for (let i = 0; i < photosBlock.length; i++) {
        const char = photosBlock[i];
        if (char === '{') {
            if (depth === 0) start = i;
            depth++;
        } else if (char === '}') {
            depth--;
            if (depth === 0) {
                objects.push(photosBlock.slice(start, i + 1));
            }
        }
    }
    if (objects.length !== 3) {
        console.warn('Expected 3 photos, found', objects.length);
        return match;
    }
    return `${prefix}\n            ${objects[2]},\n            ${objects[0]},\n            ${objects[1]}\n        ${suffix}`;
});

fs.writeFileSync(path, content);
console.log('Rotated right-layout groups');
