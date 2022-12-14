/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { usePost } from '../../hooks/usePost';
import { getPosts } from '../../services/post';
import { useHtmlAsText } from '../../hooks/useHtmlAsText';
import { usePostsContext } from '../../context/PostsContext';
import { useFetch } from '../../hooks/useFetch';
import { Text, CommentsTitle } from './_styles';
import { PostHero } from './PostHero';
import { useCommentsContext } from '../../context/CommentsContext';

export function PostBody({ children }) {
	// console.log('postbody is rendered');

	const { postid } = useParams();
	const { posts, setPosts } = usePostsContext();

	const post = usePost(postid, posts);
	const { title, image, text } = post;

	const textRef = useHtmlAsText(text);
	const { comments } = useCommentsContext();
	const [{ data: fetchedPosts }] = useFetch(getPosts, [], [posts]);

	useEffect(() => {
		if (!posts) {
			setPosts(fetchedPosts);
		}
	}, []);
	return (
		<>
			<PostHero image={image} post={post} title={title} />
			<Text ref={textRef}></Text>

			{children}

			<CommentsTitle>
				{comments?.length > 0 ? 'Comments' : 'There are no comments...'}
			</CommentsTitle>
		</>
	);
}
