import { posts } from '@/api/index';
import { PostsData } from '@/types/apiTypes';

// 학습 노트 조작과 관련된 CURD API 함수 파일

// 학습 노트 전체 데이터 조회 API
function fetchPosts() {
  return posts.get('/');
}

// 특정 학습 노트 데이터 조회 API
function fetchPost(id: string) {
  return posts.get(id);
}

// 학습 노트 데이터를 생성하는 API
function createPost(postData: PostsData) {
  return posts.post('/', postData);
}

// 학습 노트 데이터를 삭제하는 API
function deletePost(postId: string) {
  return posts.delete(postId);
}

// 학습 노트 데이터를 수정하는 API
function editPost(postId: string, postData: PostsData) {
  return posts.put(postId, postData);
}

export { fetchPosts, createPost, deletePost, fetchPost, editPost };
