import { getTool } from '@/api/getData';
import styles from './page.module.scss';
<<<<<<< HEAD
import { ITool } from '@/helpers/api.interfaces';
import router from 'next/router';

export default async function Tool({ params }: { params: { 'tool-id': string } }) {
    const toolId = parseInt(params['tool-id']);
    let tool: ITool;
    // try {
    tool = await getTool(toolId);
    // } catch (error) {
    //     router.push("/")
    // }
    console.log(tool);

    const pricelist = tool.attributes.pricelist.split('\n').map(line => line.split(':'));
=======
import Image from 'next/image';

export default async function Tool({ params }: { params: { 'tool-id': string } }) {
    const toolId = parseInt(params['tool-id']);
    const tool = await getTool(toolId);
    const image = tool.attributes.image.data.attributes;
    let imageWidth = image.width;
    let imageHeigth = image.height;
    const imageRatio = imageHeigth / imageWidth;
    if (imageHeigth > 200) {
        imageHeigth = 200;
        imageWidth = Math.floor(200 / imageRatio);
    }
    const pricelist = tool.attributes.pricelist.split('\n').map(line => line.split(':').map(item => item.trim()));
>>>>>>> 707500dcb79d9a922682e554bc23b7c0dbc86043
    console.log(pricelist);


    // const category = await getAllToolsInCat(catId);
    // const tools = category.attributes.tools.data;
    return (
        <main className={styles.wrapper}>
            <h2 className={styles.title}>
                {tool.attributes.title}
            </h2>
            <div
                className={styles.image}
            >
                <Image
                    src={process.env.NEXT_PUBLIC_BACK_DOMAIN + image.url}
                    alt={image.alternativeText || ''}
                    width={imageWidth}
                    height={imageHeigth}
                // fill
                // fill={true}
                // objectFit={'contain'}
                />
            </div>
            <div className={styles.pricelist}>
                <div
                    className={styles.pricelist_row}
                >
                    <div className={styles.pricelist_serve}>
                        Вид работ
                    </div>
                    <div className={styles.pricelist_cost}>
                        Стоимость, руб
                    </div>
                </div>
                {pricelist.map((row, i) => {
                    return (
                        <div
                            key={`row-${i}`}
                            className={styles.pricelist_row}
                        >
                            <div className={styles.pricelist_serve}>
                                {row[0]}
                            </div>
                            <div className={styles.pricelist_cost}>
                                {row[1]}
                            </div>
                        </div>
                    )
                })}
            </div>
            {/* <img  className="tool-page__image" src = {{ res$.imgRefenrence }
            } alt = "" >
            <div  className="tool-page__pricelist" >
            <div className="pricelist-wrapper">
                <div className="pricelist__row" *ngFor="let serve of res$.serves; index as i">
                <h4  *ngIf="res$.costs[i] == '<h4>'" className="pricelist__title">{{ serve }}</h4>
                <div *ngIf="res$.costs[i] != '<h4>'" className="pricelist__serve">{{ serve }}</div>
            <div * ngIf="(res$.costs[i] != '<h4>') && (res$.costs[i] != '<none>')" className="pricelist__cost" > {{ res$.costs[i] }}</div >
            </div >
        </div >
    </div >
        <button className="button_ok send-request-btn" onclick="this.blur()" (click) = "sendRequest($event)" > Оставить заявку</button > */}
            <div>
                {JSON.stringify(tool, null, 4)}

            </div>
        </main >
    )
}