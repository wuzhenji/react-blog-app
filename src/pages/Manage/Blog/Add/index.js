import React from 'react'
import { Card, Form, Input, Button, Select } from 'antd';
import { connect } from 'umi';
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/index.css'
const { Option } = Select;
import './index.less'
import { FormInstance } from 'antd/lib/form';

@connect(({ bloghome, addblog }) => ({
    blogTagList: bloghome.blogTagList
}))
class AddBlog extends React.Component {

    formRef = React.createRef();
    state = {
        html: '',
    }
    
    componentDidMount() {
        this.getBlogTag()
    }

    submit = (val) => {
        let form = {
            title: val.title,
            tagid: val.tagid,
            content: '',
            html: this.state.html
        }
        const { dispatch } = this.props
        if (dispatch) {
            dispatch({
                type: 'addblog/addBlog',
                payload: form
            }).then(() => {
                this.resetForm()
            })
        }
    }

    resetForm = () => {
        this.formRef.current.resetFields();
        this.setState({
            html: ''
        })
    }

    getBlogTag = () => {
        const { dispatch } = this.props
        if (dispatch) {
            dispatch({
                type: 'bloghome/getBlogTag'
            })
        }
    }

    handleEditorChange = (editorState) => {
        this.setState({
            html: editorState.toHTML()
        })
    }

    render() {
        const { blogTagList } = this.props
        const layout = {
            labelCol: {
                span: 2,
            },
            wrapperCol: {
                span: 16,
            },
        };
        const tailLayout = {
            wrapperCol: { offset: 2, span: 8 },
        };
        return (
            <div className="addblog">
                <Form {...layout} ref={this.formRef} name="control-ref" onFinish={this.submit}>
                    <Form.Item name="title" label="标题" rules={[{ required: true }]}>
                        <Input placeholder="请输入标题" />
                    </Form.Item>
                    <Form.Item name="tagid" label="标签" rules={[{ required: true }]}>
                        <Select
                            placeholder="请选择标签"
                            onChange={this.onChangeTag}
                            allowClear
                        >
                            {blogTagList.map(v => {
                                return (
                                    <Option key={v.id} value={v.id}>{v.name}</Option>
                                )
                            })}
                        </Select>
                    </Form.Item>
                    <Form.Item name="content" label="内容" className="markdownedit">
                        <BraftEditor
                            style={{ border: '1px solid #d9d9d9', borderRadius: '2px' }}
                            onChange={this.handleEditorChange}
                        />
                    </Form.Item>
                    <Form.Item {...tailLayout}>
                        <Button style={{ width: "100%" }} type="primary" htmlType="submit">
                            提交
                            </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}

export default AddBlog