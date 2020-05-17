import React from 'react';
import { connect } from 'umi';
import './index.less';

class Home extends React.Component {
    state = {
        page: {
            pagesize: 20,
            pagenum: 1
        }
    }

    componentDidMount() {
        this.getBlogList()
        this.getBlogTag()
    }

    handleChangeCategory = (info) => { // 切换分类
        if (info.id) {
            this.getBlogList(info.id)
        } else {
            this.getBlogList()
        }
        const { dispatch } = this.props;
        if (dispatch) {
            dispatch({
                type: 'blog/getCurBlogTag',
                payload: info
            })
        }
    }

    handleGoBlogDetail = (id) => { // 跳转至blog详情
        this.props.history.push({
            pathname: '/blog/detail',
            query: {
                blogid: id
            }
        })
    }

    getBlogList = (tagid) => { // 获得博客列表
        const { dispatch } = this.props;
        let payload = {}
        tagid && (payload.tagid = tagid)
        if (dispatch) {
            dispatch({
                type: 'bloghome/getBlogList',
                payload: {
                    ...this.state.page,
                    ...payload
                },
            })
        }
    }

    getBlogTag = () => { // 获得博客列表
        const { dispatch } = this.props;
        if (dispatch) {
            dispatch({
                type: 'bloghome/getBlogTag'
            })
        }
    }

    render() {
        const { blogList, blogTagList, curBlogTag } = this.props
        return (
            <div className="bloghome">
                <ul className="leftbar">
                    <li className="leftbar-item intro">
                        <p onClick={this.handleChangeCategory.bind(this, {})} className="intro-name">吴振吉</p>
                        <p className="intro-buss">前端攻城师</p>
                    </li>
                    <li className="leftbar-item category">
                        <p className="category-name">分类目录</p>
                        <div className="category-list">
                            {blogTagList.map(v => {
                                return (
                                    <li className="category-list-item" key={v.id}>
                                        <span onClick={this.handleChangeCategory.bind(this, v)}>{v.name}</span>
                                    </li>
                                )
                            })}
                        </div>
                    </li>
                    <li className="leftbar-item link">
                        <span>友情链接</span>
                    </li>
                </ul>
                <ul className="rightcontent">
                    {curBlogTag.id && <li className="cats-info"><span>{curBlogTag.name}</span>下的文章:</li>}
                    {blogList.map(v => {
                        return (
                            <li className="rightcontent-list" key={v.id}>
                                <span onClick={this.handleGoBlogDetail.bind(this, v.id)} className="title">{v.title}</span>
                                <span className="time">{v.createdAt.split("T")[0].replace(/-/g, '.')}</span>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default connect(({ bloghome }) => {
    return {
        blogList: bloghome.blogList,
        blogTagList: bloghome.blogTagList,
        curBlogTag: bloghome.curBlogTag
    }
})(Home);