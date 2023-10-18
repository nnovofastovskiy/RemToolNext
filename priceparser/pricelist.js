const fs = require('fs');

const regex1 = /<div.*?class="pricelist__serve".*?>(.*?)<\/div>/g;
const regex2 = /<div.*?class="pricelist__cost".*?>(.*?)<\/div>/g;
const regex3 = /<h2.*?class="tool-page__title".*?>(.*?)<\/h2>/g;

fs.readdir('./src', (err, files) => {
    if (err) throw err;
    files.forEach(file => {
        let data = fs.readFileSync('./src/' + file, { encoding: 'utf8', flag: 'r' });
        const services = Array.from(new Set([...data.matchAll(regex1)].map(item => item[1]))).slice(1);
        const costs = Array.from(new Set([...data.matchAll(regex2)].map(item => item[1]))).slice(1);
        const result = '{\n' + services.reduce((acc, item, i) => {
            return acc += `"${item}": "${costs[i]}"${(i < services.length - 1) ? ',' : ''}\n`
        }, '') + '}';
        const title = [...data.matchAll(regex3)][0][1];
        fs.writeFileSync(`./dist/${title}.json`, result);
    })
});

