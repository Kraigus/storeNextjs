import CoursesIcon from './icons/courses.svg';
import BooksIcon from './icons/books.svg';
import ServicesIcon from './icons/services.svg';
import ProductsIcon from './icons/products.svg';
import { FirstLevelMenuItem } from '../interfaces/menu.interface';
import { TopLevelCategory } from '../interfaces/page.interface';

export const firstLevelMenu: FirstLevelMenuItem[] = [
    {
        route: 'courses',
        name: 'Курсы',
        icon: <CoursesIcon />,
        id: TopLevelCategory.Courses,
    },
    {
        route: 'books',
        name: 'Книги',
        icon: <BooksIcon />,
        id: TopLevelCategory.Books,
    },
    {
        route: 'services',
        name: 'Сервисы',
        icon: <ServicesIcon />,
        id: TopLevelCategory.Services,
    },
    {
        route: 'products',
        name: 'Товары',
        icon: <ProductsIcon />,
        id: TopLevelCategory.Products,
    },
];

export const priceRu = (price: number): string => {
    return price
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
        .concat(' ₽');
};
