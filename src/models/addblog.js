import { addBlogAPI } from '@/services/blog';
import { notification } from 'antd';

export default {
    namespace: 'addblog',
    state: {
    },
    reducers: {
    },
    effects: {
        * addBlog({ payload }, { call }) {
            let response = yield call(addBlogAPI, payload);
            if (response.code == 35000) {
                notification.success({
                    message: '提交成功'
                });
            } else {
                notification.error({
                    message: response.message
                });
            }
        },
    },
};