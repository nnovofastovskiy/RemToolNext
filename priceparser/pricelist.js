const fs = require('fs');

const regServe = /<div.*?class="pricelist__serve".*?>(.*?)<\/div>/g;
const regCost = /<div.*?class="pricelist__cost".*?>(.*?)<\/div>/g;
const regTitle = /<h2.*?class="tool-page__title".*?>(.*?)<\/h2>/g;
const regRow = /<div.*?class="pricelist__row".*?>(.*?)<\/div>/g;
const regPTitle = /<h2.*?class="pricelist__title".*?>(.*?)<\/h2>/g;

fs.readdir('./src', (err, files) => {
    if (err) throw err;
    files.forEach(file => {
        let data = fs.readFileSync('./src/' + file, { encoding: 'utf8', flag: 'r' });
        // const services = Array.from(new Set([...data.matchAll(regex1)].map(item => item[1]))).slice(1);
        // const costs = Array.from(new Set([...data.matchAll(regex2)].map(item => item[1]))).slice(1);
        const rows = [...data.matchAll(regRow)];
        console.log(rows);
        const services = [...data.matchAll(regServe)].map(item => item[1]).slice(1);
        const costs = [...data.matchAll(regCost)].map(item => item[1]).slice(1);
        const result = services.reduce((acc, item, i) => {
            return acc += `${item}: ${costs[i]}\n`
        }, '');
        const title = [...data.matchAll(regTitle)][0][1];
        fs.writeFileSync(`./dist/${title}.txt`, result);
    })
});

