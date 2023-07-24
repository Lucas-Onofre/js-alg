const fs = require('fs');

const getWordCount = (file) => {
    const text = fs.readFileSync(file, 'utf-8');
    const words = text.split(/\s+|'\n'/);
    const wordCount = words.length;

    return wordCount;
}

console.log(getWordCount('word-count-text.txt'));