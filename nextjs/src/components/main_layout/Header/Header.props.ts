import { ICategory, IContacts } from '@/api/getData';

export interface HeaderProps {
    categories: ICategory[],
    contacts: IContacts
}