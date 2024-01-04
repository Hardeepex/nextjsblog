import fetchMock from 'fetch-mock';
import { addPost, getPostDetails, updatePost, deletePost, getAllPosts } from './api';

describe('addPost', () => {
  it('adds a post and returns the expected response', async () => {
    const mockPost = { title: 'Test Post', content: 'This is a test post.' };
    const mockResponse = { message: 'Post added successfully.' };

    fetchMock.post('/api/blog-post/add-post', mockResponse);

    const response = await addPost(mockPost);

    expect(response).toEqual(mockResponse);
    fetchMock.restore();
  });
});

describe('getPostDetails', () => {
  it('fetches the details of a specific post', async () => {
    const mockId = '123';
    const mockResponse = { title: 'Test Post', content: 'This is a test post.' };

    fetchMock.get(`/api/blog-post/blog-details?blogID=${mockId}`, mockResponse);

    const response = await getPostDetails(mockId);

    expect(response).toEqual(mockResponse);
    fetchMock.restore();
  });
});

describe('updatePost', () => {
  it('updates a post and returns the expected response', async () => {
    const mockPost = { id: '123', title: 'Updated Test Post', content: 'This is an updated test post.' };
    const mockResponse = { message: 'Post updated successfully.' };

    fetchMock.put('/api/blog-post/update-post', mockResponse);

    const response = await updatePost(mockPost);

    expect(response).toEqual(mockResponse);
    fetchMock.restore();
  });
});

describe('deletePost', () => {
  it('deletes a post and returns the expected response', async () => {
    const mockId = '123';
    const mockResponse = { message: 'Post deleted successfully.' };

    fetchMock.delete(`/api/blog-post/delete-post?id=${mockId}`, mockResponse);

    const response = await deletePost(mockId);

    expect(response).toEqual(mockResponse);
    fetchMock.restore();
  });
});

describe('getAllPosts', () => {
  it('fetches all posts and returns the expected response', async () => {
    const mockResponse = [
      { id: '123', title: 'Test Post 1', content: 'This is a test post.' },
      { id: '456', title: 'Test Post 2', content: 'This is another test post.' },
    ];

    fetchMock.get('/api/blog-post/get-all-posts', mockResponse);

    const response = await getAllPosts();

    expect(response).toEqual(mockResponse);
    fetchMock.restore();
  });
});
