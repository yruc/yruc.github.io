import { Node as GatsbyNode } from "gatsby";

interface Frontmatter {
	title?: string;
	date?: string;
	lang?: string;
	type?: string;
	published?: boolean;
	desc?: string;
	tags?: Array<string>;
	cover?: string;
}

interface SlugTag {
	tag: string;
	slug: string;
}

interface Fields {
	slug?: string;
	slugPlain?: string;
	slugTagList?: Array<SlugTag>;
}

interface Node extends GatsbyNode {
	fields?: Fields;
	frontmatter?: Frontmatter;
}

interface Edge {
	node: Node;
}

export default Edge;
