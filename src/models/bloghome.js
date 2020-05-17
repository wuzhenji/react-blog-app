import { getBlogListAPI, getBlogTagAPI } from '@/services/blog';

export default {
    namespace: 'bloghome',
    state: {
        blogList: [],
        blogTagList: [],
        total: 0,
        curBlogTag: {}
    },
    reducers: {
        saveBlogList(state, { payload }) {
            return { 
                ...state, 
                blogList: payload.rows, 
                total: payload.count 
            }
        },
        saveBlogTag(state, { payload }) {
            return { 
                ...state, 
                blogTagList: payload,
            }
        },
        saveCurBlogTag(state, { payload }) {
            return { 
                ...state, 
                curBlogTag: payload,
            }
        },
    },
    effects: {
        * getBlogList({ payload }, { call, put }) {
            const response = yield call(getBlogListAPI, payload);
            yield put({
                type: 'saveBlogList',
                payload: response.data
            });
        },
        * getBlogTag({ payload }, { call, put }) {
            const response = yield call(getBlogTagAPI);
            yield put({
                type: 'saveBlogTag',
                payload: response.data
            });
        },
        * getCurBlogTag({payload}, {put}){
            yield put({
                type: 'saveCurBlogTag',
                payload: payload
            });
        }
    },
};