import { addPost, getPostDetails, updatePost, deletePost, getAllPosts } from './api';
import fetchMock from 'fetch-mock';

describe('addPost', () => {
  beforeEach(() => {
    fetchMock.restore();
  });

  it('should return the expected result on success', async () => {
    const mockPost = { title: 'Test Post', content: 'This is a test post.' };
    fetchMock.post('/api/blog-post/add-post', { status: 200, body: mockPost });

    const result = await addPost(mockPost);
    expect(result).toEqual(mockPost);
  });

  it('should throw an error on failure', async () => {
    const mockPost = { title: 'Test Post', content: 'This is a test post.' };
    fetchMock.post('/api/blog-post/add-post', { status: 500 });

    await expect(addPost(mockPost)).rejects.toThrow();
  });

  it('should handle edge cases', async () => {
    const mockPost = { title: '', content: '' };
    fetchMock.post('/api/blog-post/add-post', { status: 400 });

    await expect(addPost(mockPost)).rejects.toThrow();
  });
});

// Repeat similar tests for getPostDetails, updatePost, deletePost, getAllPosts
