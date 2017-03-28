/**
 * @author caowencheng <845982120@qq.com>
 * created on 28.03.2017
 */
import React from 'react';

class SetVisibility extends React.Component {
    render() {
        return (
            <div className = "setVisibility">
                <div className = "type">
                    <span className = "item">显示类型:</span>
                    <div className = "item item_detail add_all">全部</div>
                    <div className = "item item_detail add_waitDo">待完成</div>
                    <div className = "item item_detail add_complated">已完成</div>
                </div>
            </div>
        );
    }
};

export default SetVisibility;