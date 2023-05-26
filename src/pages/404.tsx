import * as React from "react";
import { Link, HeadFC, PageProps } from "gatsby";
import Layout from "../components/layout";
import { PageContext } from "../gatsby/types";
import { Language } from "../states";

const NotFoundPage: React.FC<PageProps> = () => {
	const pageContext: PageContext = {
		title: "Error 404",
		desc: "Page Not Found",
		lang: Language.English,
		cover: "",
		slug: "/404",
	};
	return (
		<Layout pageContext={pageContext}>
			<article>
				<p className="m-8 text-primary">
					Sorry 😔, we couldn’t find what you were looking for.
					<br />
					Please <Link to="/">Go home</Link>.
				</p>
			</article>
		</Layout>
	);
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
