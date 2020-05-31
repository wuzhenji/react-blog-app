import request from '@/utils/request';

export async function getBlogListAPI(data) { // 获得博客列表
    return request('/blog', {
        method: 'GET',
        params: data
    });
}

export async function addBlogAPI(data) { // 添加blog
    return request('/blog', {
        method: 'POST',
        data: data
    })
}

export async function getBlogTagAPI() { // 获得标签列表
    return request('/blogtag', {
        method: 'GET',
    })
}

export async function getBlogByidAPI(data) { // 根据id获得博客
    return request('/blog/byid', {
        method: 'GET',
        params: data
    })
}

