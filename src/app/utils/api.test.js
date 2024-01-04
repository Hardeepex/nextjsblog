import { addPost, getPostDetails, updatePost, deletePost, getAllPosts } from './api';

describe('addPost', () => {
  it('should add a post with valid data', async () => {
    const post = { title: 'Test Post', content: 'This is a test post.' };
    const response = await addPost(post);
    expect(response.success).toBe(true);
  });

  it('should fail to add a post with missing data', async () => {
    const post = { title: 'Test Post' };
    const response = await addPost(post);
    expect(response.success).toBe(false);
  });
});

describe('getPostDetails', () => {
  it('should get post details with valid id', async () => {
    const id = 1;
    const response = await getPostDetails(id);
    expect(response.success).toBe(true);
  });

  it('should fail to get post details with invalid id', async () => {
    const id = 9999;
    const response = await getPostDetails(id);
    expect(response.success).toBe(false);
  });
});

describe('updatePost', () => {
  it('should update a post with valid data', async () => {
    const post = { id: 1, title: 'Updated Test Post', content: 'This is an updated test post.' };
    const response = await updatePost(post);
    expect(response.success).toBe(true);
  });

  it('should fail to update a post with missing data', async () => {
    const post = { id: 1, title: 'Updated Test Post' };
    const response = await updatePost(post);
    expect(response.success).toBe(false);
  });
});

describe('deletePost', () => {
  it('should delete a post with valid id', async () => {
    const id = 1;
    const response = await deletePost(id);
    expect(response.success).toBe(true);
  });

  it('should fail to delete a post with invalid id', async () => {
    const id = 9999;
    const response = await deletePost(id);
    expect(response.success).toBe(false);
  });
});

describe('getAllPosts', () => {
  it('should get all posts', async () => {
    const response = await getAllPosts();
    expect(response.success).toBe(true);
  });
});
