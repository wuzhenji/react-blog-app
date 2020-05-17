import { getBlogByidAPI } from '@/services/blog';

export default {
    namespace: 'blogdetail',
    state: {
        blogInfo: {}
    },
    reducers: {
        saveBlogInfo(state, { payload }) {
            return { 
                ...state, 
                blogInfo: payload
            }
        },
    },
    effects: {
        * getBlogInfo({ payload }, { call, put }) {
            const response = yield call(getBlogByidAPI, payload);
            yield put({
                type: 'saveBlogInfo',
                payload: response.data
            });
        },
        * clearBlogInfo({}, {put}) {
            yield put({
                type: 'saveBlogInfo',
                payload: {}
            });
        }
    },
};