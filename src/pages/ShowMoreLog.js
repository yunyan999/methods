/**
 * @author ygmao
 * @description :日志阅览组件，只需要传递显示的值和相关方法
 */
import {Button,Modal,List,Col} from 'antd';
import React from 'react';

class ShowMoreLog extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div>
                <Modal
                    title={this.props.title?this.props.title:'查看'}
                    visible={this.props.visible}
                    footer={[
                        <Button type="primary" key="back" onClick={this.props.onCancel}>
                          关闭
                        </Button>]}
                    >
                    <List
                        dataSource={this.props.dataSource}
                        renderItem={item => (
                            <List.Item>
                                <Col span={8}>{item.par1}</Col>
                                <Col span={8}>{item.par2}</Col>
                                <Col span={8}>{item.par3}</Col>
                            </List.Item>
                    )}
                    />
                    <div style={{textAlign:'center'}}>
                    {/**此处需要增加判断是否显示button */}
                    <Button  type="primary" onClick={this.props.showMoreLog}>更多</Button>
                    </div>
                </Modal>
            </div>
        )
    }
}
export default ShowMoreLog;