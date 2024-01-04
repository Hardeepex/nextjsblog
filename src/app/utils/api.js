import fetch from 'node-fetch';

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

export async function getPostDetails(id) {
  const response = await fetch(`/api/blog-post/blog-details?blogID=${id}`);
  return response.json();
}

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

export async function deletePost(id) {
  const response = await fetch(`/api/blog-post/delete-post?id=${id}`, {
    method: 'DELETE',
  });
  return response.json();
}

export async function getAllPosts() {
  const response = await fetch('/api/blog-post/get-all-posts');
  return response.json();
}
