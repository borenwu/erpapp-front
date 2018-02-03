import React, {Component} from 'react';
import {Table, Input, Popconfirm, Button} from 'antd';

const data = [];
for (let i = 0; i < 100; i++) {
    data.push({
        key: i.toString(),
        client_name: `Edrward ${i}`,
        task_name:`Task ${i}`,
        volume: 32,
        task_date: `2018-2-3`,
        due_date:`2018-2-4`,
        desc:`test desc ${i}`,
        maker:`Tom`
    });
}

const EditableCell = ({editable, value, onChange}) => (
    <div>
        {editable
            ? <Input style={{margin: '-5px 0'}} value={value} onChange={e => onChange(e.target.value)}/>
            : value
        }
    </div>
);

class EditableTable extends Component {
    constructor(props) {
        super(props);
        // let data = this.props.tableData
        this.state = {
            data: data
        };
        this.cacheData = data.map(item => ({...item}));
        this.columns = [
            {
                title: '客户',
                dataIndex: 'client_name',
                width: '7%',
                render: (text, record) => this.renderColumns(text, record, 'name'),
            },
            {
                title: '任务',
                dataIndex: 'task_name',
                width: '25%',
                render: (text, record) => this.renderColumns(text, record, 'age'),
            },
            {
                title: '数量',
                dataIndex: 'volume',
                width: '5%',
                render: (text, record) => this.renderColumns(text, record, 'age'),
            },
            {
                title: '创建日期',
                dataIndex: 'task_date',
                width: '10%',
                render: (text, record) => this.renderColumns(text, record, 'address'),
            },
            {
                title: '提交日期',
                dataIndex: 'due_date',
                width: '10%',
                render: (text, record) => this.renderColumns(text, record, 'address'),
            },
            {
                title: '备注说明',
                dataIndex: 'desc',
                width: '20%',
                render: (text, record) => this.renderColumns(text, record, 'address'),
            },
            {
                title: '创建人',
                dataIndex: 'maker',
                width: '5%',
                render: (text, record) => this.renderColumns(text, record, 'address'),
            },
            {
                title: '操作',
                dataIndex: 'operation',
                render: (text, record) => {
                    const {editable} = record;
                    return (
                        <div className="editable-row-operations">
                            {
                                editable ?
                                    <span>
                                    <a onClick={() => this.save(record.key)}>Save  </a>
                                    <Popconfirm title="Sure to cancel?" onConfirm={() => this.cancel(record.key)}>
                                    <a>Cancel</a>
                                    </Popconfirm>
                                </span>
                                    : <a onClick={() => this.edit(record.key)}>Edit</a>
                            }
                        </div>
                    );
                },
            }
        ]
    }

    renderColumns(text, record, column) {
        return (
            <EditableCell
                editable={record.editable}
                value={text}
                onChange={value => this.handleChange(value, record.key, column)}
            />
        );
    }

    handleChange(value, key, column) {
        const newData = [...this.state.data];
        const target = newData.filter(item => key === item.key)[0];
        if (target) {
            target[column] = value;
            this.setState({data: newData});
        }
    }

    edit(key) {
        const newData = [...this.state.data];
        const target = newData.filter(item => key === item.key)[0];
        if (target) {
            target.editable = true;
            this.setState({data: newData});
        }
    }

    save(key) {
        const newData = [...this.state.data];
        const target = newData.filter(item => key === item.key)[0];
        if (target) {
            delete target.editable;
            this.setState({data: newData});
            this.cacheData = newData.map(item => ({...item}));
        }
    }

    cancel(key) {
        const newData = [...this.state.data];
        const target = newData.filter(item => key === item.key)[0];
        if (target) {
            Object.assign(target, this.cacheData.filter(item => key === item.key)[0]);
            delete target.editable;
            this.setState({data: newData});
        }
    }

    render() {
        return (
            <div>
                <Button className="editable-add-btn" style={{marginBottom: 20}} onClick={this.handleAdd}>Add</Button>
                <Table bordered dataSource={this.state.data} columns={this.columns}/>
            </div>
        );
    }
}

export default EditableTable;