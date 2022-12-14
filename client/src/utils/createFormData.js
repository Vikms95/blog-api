export const createFormData = data => {
	const { title, text, isPublic, user, image } = data;

	const formData = new FormData();

	formData.append('image', image || '');
	formData.append('title', title);
	formData.append('text', text);
	formData.append('isPublic', isPublic);
	formData.append('user', user);

	return formData;
};
