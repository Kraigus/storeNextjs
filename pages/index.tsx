import { Htag, Button, P, Tag } from "../components";

export default function Home(): JSX.Element {
	return (
		<>
			<Htag tag="h1">Текст</Htag>
			<Htag tag="h2">Текст</Htag>
			<Htag tag="h3">Текст</Htag>
			<Button appearance="primary" arrow="right">KHOIIKA</Button>
			<Button appearance="ghost" arrow="down">KHOIIKA</Button>
			<P size="s">ffdfsdfsdfwerrw</P>
			<P size="m">ffdfsdfsdfwerrw</P>
			<P size="l">ffdfsdfsdfwerrw</P>
			<Tag size="s" color="red">a</Tag>
			<Tag size="m" color="primary">a</Tag>
			<Tag size="s" color="red">a</Tag>
			<Tag size="m" color="green">a</Tag>
			<Tag size="s" color="grey">a</Tag>
			<Tag size="m" color="ghost">a</Tag>
		</>
	);
}
