import { GetStaticProps } from 'next';
import { useState } from 'react';
import { Htag, Button, P, Tag, Rating, Input, Textarea } from '../components';
import { withLayout } from '../layout/Layout';
import axios from 'axios';
import { MenuItem } from '../interfaces/menu.interface';

function Home({ menu }: HomeProps): JSX.Element {
    const [rating, setRating] = useState<number>(4);

    return (
        <>
            <Htag tag="h1">Текст</Htag>
            <Htag tag="h2">Текст</Htag>
            <Htag tag="h3">Текст</Htag>
            <Button appearance="primary" arrow="right">
                KHOIIKA
            </Button>
            <Button appearance="ghost" arrow="down">
                KHOIIKA
            </Button>
            <P size="s">ffdfsdfsdfwerrw</P>
            <P size="m">ffdfsdfsdfwerrw</P>
            <P size="l">ffdfsdfsdfwerrw</P>
            <Tag size="s" color="red">
                a
            </Tag>
            <Tag size="m" color="primary">
                a
            </Tag>
            <Tag size="s" color="red">
                a
            </Tag>
            <Tag size="m" color="green">
                a
            </Tag>
            <Tag size="s" color="grey">
                a
            </Tag>
            <Tag size="m" color="ghost">
                a
            </Tag>
            <Rating rating={rating} isEditable setRating={setRating} />
            <Input placeholder="Тест" />
            <Textarea placeholder="Тест" />
        </>
    );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    const firstCategory = 0;
    const { data: menu } = await axios.post<MenuItem[]>(
        process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
        { firstCategory }
    );
    return {
        props: {
            menu,
            firstCategory,
        },
    };
};

interface HomeProps extends Record<string, unknown> {
    menu: MenuItem[];
    firstCategory: number;
}
