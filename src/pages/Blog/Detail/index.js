import React from 'react';
import { connect } from 'umi';
import './index.less';
import { Skeleton } from 'antd';

class BlogDetail extends React.Component {
    componentDidMount() {
        const { dispatch } = this.props;
        if (dispatch) {
            dispatch({
                type: 'blogdetail/clearBlogInfo'
            })
        }
        setTimeout(() => {
            this.getBlogInfo()
        }, 500);
    }

    getBlogInfo = () => {
        const { dispatch } = this.props;
        if (dispatch) {
            dispatch({
                type: 'blogdetail/getBlogInfo',
                payload: {
                    id: this.props.location.query.blogid
                },
            })
        }
    }

    render() {
        const { blogInfo } = this.props
        return (
            <div className="blogdetail">
                {!Object.keys(blogInfo).length ?
                    <Skeleton /> :
                    <div>
                        <h1>{blogInfo.title}</h1>
                        <p className="time">{blogInfo.createdAt.split("T")[0].replace(/-/g, '.')}</p>
                        <div dangerouslySetInnerHTML={{ __html: `${blogInfo.html}` }}></div>
                    </div>
                }
            </div>
        )
    }
}

export default connect(({ blogdetail }) => {
    return {
        blogInfo: blogdetail.blogInfo
    }
})(BlogDetail);