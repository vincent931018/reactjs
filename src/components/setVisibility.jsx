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
                    <div className = "nomal">全部</div>
                    <div className = "nomal">待完成</div>
                    <div className = "nomal">已完成</div>
                </div>
            </div>
        );
    }
};

export default SetVisibility;