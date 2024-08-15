import { SearchProps } from "./Search.props"
import cn from 'classnames';
import styles from './Search.module.scss';
import { getAllCategories } from "@/api/getData";

function searchTool() {

}

export async function Search({ placeholder = '', className, ...props }: SearchProps) {
    // const categories = await getAllCategories();
    // console.log(categories);
    return (
        <form className={styles.search} name="searchForm" onInput={() => searchTool()}>
            <input
                // ref={searchRef}
                // formControlName="data"
                // ngModel="this.searchForm.value.data"
                id="search"
                type="search"
                placeholder={placeholder}
            // onFocus={() => setSearchFocuse(true)}
            // onBlur={() => setSearchFocuse(false)}
            // onChange={e => setSearchValue(e.target.value)}
            />
        </form>
    )
}