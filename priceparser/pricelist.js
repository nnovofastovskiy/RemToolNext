import fs from "node:fs";
import { parse } from 'node-html-parser';

const regPTitle = /<h2 _ngcontent-.*?-c34="" class="tool-page__title">(.*?)<\/h2>/g;
const regPrice = /<div _ngcontent-.{3}-c34="" class="tool-page__pricelist">/;
const regBtn = /<button _ngcontent-.{3}-c34="" onclick=/;

fs.readdir('./src', (err, files) => {
    if (err) throw err;
    files.forEach(filename => {
        const file = fs.readFileSync(`./src/${filename}`, { encoding: 'utf8', flag: 'r' });
        // console.log(file);

        const priceStart = file.search(regPrice);
        const btnStart = file.search(regBtn);

        const pageTitle = [...file.matchAll(regPTitle)][0][1];
        console.log(pageTitle);

        const priceStr = file.slice(priceStart, btnStart);

        const cost = parse(priceStr);
        const pricelist = [...cost.querySelectorAll('.pricelist__row')]
            .slice(1)
            .map(item => {
                const title = item.querySelector('.pricelist__title');
                if (title) return '### ' + title.innerText;
                const serve = item.querySelector('.pricelist__serve');
                const cost = item.querySelector('.pricelist__cost');
                let row = '';
                if (serve) {
                    row += serve.innerText;
                }
                if (cost) {
                    row += '; ' + cost.innerText;
                }
                return row;
            })
            .join('\n');

        fs.writeFileSync(`./dist/${pageTitle}.txt`, pricelist);
    })
});


// const serves = [...file.matchAll(regServe)].map(item => item[1]).slice(1);
// const costs = [...file.matchAll(regCost)].map(item => item[1]).slice(1);
// console.log(serves);


