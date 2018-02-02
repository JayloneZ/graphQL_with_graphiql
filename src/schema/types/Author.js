import { GraphQLObjectType, GraphQLString, GraphQLList } from 'graphql';
import { Post } from "./Post";
import { fakeDatabase } from "../../fakeDatabase";

export const Author = new GraphQLObjectType ({
	name: "Author",
	description: "Author details",
	fields: () => ({
		id: { type: GraphQLString },
		name: { type: GraphQLString },
		email: { type: GraphQLString },
		posts: {
			type: new GraphQLList(Post),
			resolve: (author) => {
				return fakeDatabase.getPostsOfAuthor(author.id)
			}
		}
	})
})
