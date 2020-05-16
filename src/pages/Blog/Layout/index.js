import React from 'react';
import './index.less';

class BlogLayout extends React.Component {
    render() {
        const { children } = this.props;
        return (
            <div className="blog">
                <div className="blog-inner">
                    <div className="head">
                        <div className="logo">吴振吉</div>
                        <a href={'https://github.com/wuzhenji?tab=repositories'} target="_blank" className="github">Github</a>
                    </div>
                    <div className="content">
                        {children}
                    </div>
                    <div className="foot">
                        <div className="logo">©2020 wuzhenji 苏公网安备 37050202370827号</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BlogLayout;