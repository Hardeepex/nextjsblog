import fetch from 'node-fetch';

/**
 * Sends a POST request to add a new blog post.
 *
 * @param {Object} post - The blog post to add.
 * @return {Promise} A promise that resolves to the response from the server.
 */
export async function addPost(post) {
  const response = await fetch('/api/blog-post/add-post', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(post),
  });
  return response.json();
}

/**
 * Sends a GET request to retrieve the details of a specific blog post.
 *
 * @param {string} id - The id of the blog post.
 * @return {Promise} A promise that resolves to the response from the server.
 */
export async function getPostDetails(id) {
  const response = await fetch(`/api/blog-post/blog-details?blogID=${id}`);
  return response.json();
}

/**
 * Sends a PUT request to update a blog post.
 *
 * @param {Object} post - The object representing the updated blog post.
 * @return {Promise} A promise that resolves to the response from the server.
 */
export async function updatePost(post) {
  const response = await fetch('/api/blog-post/update-post', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(post),
  });
  return response.json();
}

/**
 * Sends a DELETE request to remove a blog post.
 *
 * @param {string} id - The id of the blog post to be removed.
 * @return {Promise} A promise that resolves to the response from the server.
 */
export async function deletePost(id) {
  const response = await fetch(`/api/blog-post/delete-post?id=${id}`, {
    method: 'DELETE',
  });
  return response.json();
}

/**
 * Sends a GET request to retrieve all blog posts.
 *
 * @return {Promise} A promise that resolves to the response from the server.
 */
export async function getAllPosts() {
  const response = await fetch('/api/blog-post/get-all-posts');
  return response.json();
}
