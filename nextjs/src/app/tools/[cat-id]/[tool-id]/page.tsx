import { getTool } from '@/api/getData';
import styles from './page.module.scss';
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
    console.log(pricelist);


    // const category = await getAllToolsInCat(catId);
    // const tools = category.attributes.tools.data;
    return (
        <main>
            <h2 className={styles.title}>
                {tool.attributes.title}
            </h2>
            {/* <img  class="tool-page__image" src = {{ res$.imgRefenrence }
            } alt = "" >
            <div  class="tool-page__pricelist" >
            <div class="pricelist-wrapper">
                <div class="pricelist__row" *ngFor="let serve of res$.serves; index as i">
                <h4  *ngIf="res$.costs[i] == '<h4>'" class="pricelist__title">{{ serve }}</h4>
                <div *ngIf="res$.costs[i] != '<h4>'" class="pricelist__serve">{{ serve }}</div>
            <div * ngIf="(res$.costs[i] != '<h4>') && (res$.costs[i] != '<none>')" class="pricelist__cost" > {{ res$.costs[i] }}</div >
            </div >
        </div >
    </div >
        <button class="button_ok send-request-btn" onclick="this.blur()" (click) = "sendRequest($event)" > Оставить заявку</button > */}
            <pre>
                {JSON.stringify(tool, null, 4)}
            </pre>
        </main >
    )
}