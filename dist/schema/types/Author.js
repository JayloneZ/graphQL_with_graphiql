"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Author = undefined;

var _graphql = require("graphql");

var _Post = require("./Post");

var _fakeDatabase = require("../../fakeDatabase");

var Author = exports.Author = new _graphql.GraphQLObjectType({
	name: "Author",
	description: "Author details",
	fields: function fields() {
		return {
			id: { type: _graphql.GraphQLString },
			name: { type: _graphql.GraphQLString },
			email: { type: _graphql.GraphQLString },
			posts: {
				type: new _graphql.GraphQLList(_Post.Post),
				resolve: function resolve(author) {
					return _fakeDatabase.fakeDatabase.getPostsOfAuthor(author.id);
				}
			}
		};
	}
});