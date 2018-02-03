import React, {Component} from 'react';
import {
    Row,
    Col,
    Button,
    ButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Card,
    CardHeader,
    CardFooter,
    CardBody,
    Form,
    FormGroup,
    FormText,
    Label,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupButton
} from 'reactstrap';

import {DatePicker} from 'antd';
import EditableTable from '../Tables/EditableTable'

let et = new EditableTable()

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

const columnInfo= [
    {
        title: '客户',
        dataIndex: 'client_name',
        width: '5%',
        render: (text, record) => et.renderColumns(text, record, 'name'),
    },
    {
        title: '任务',
        dataIndex: 'task_name',
        width: '25%',
        render: (text, record) => et.renderColumns(text, record, 'age'),
    },
    {
        title: '数量',
        dataIndex: 'volume',
        width: '5%',
        render: (text, record) => et.renderColumns(text, record, 'age'),
    },
    {
        title: '创建日期',
        dataIndex: 'task_date',
        width: '10%',
        render: (text, record) => et.renderColumns(text, record, 'address'),
    },
    {
        title: '提交日期',
        dataIndex: 'due_date',
        width: '10%',
        render: (text, record) => et.renderColumns(text, record, 'address'),
    },
    {
        title: '备注说明',
        dataIndex: 'desc',
        width: '20%',
        render: (text, record) => et.renderColumns(text, record, 'address'),
    },
    {
        title: '创建人',
        dataIndex: 'maker',
        width: '5%',
        render: (text, record) => et.renderColumns(text, record, 'address'),
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
                                    <a onClick={() => et.save(record.key)}>Save  </a>
                                    <Popconfirm title="Sure to cancel?" onConfirm={() => et.cancel(record.key)}>
                                    <a>Cancel</a>
                                    </Popconfirm>
                                </span>
                            : <a onClick={() => et.edit(record.key)}>Edit</a>
                    }
                </div>
            );
        },
    }
]

class Forms extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dateInput: ''
        };
        // this.handleChange = this.handleChange.bind(this)
    }

    handleChange(date, dateString) {
        console.log(dateString);
        this.setState({dateInput: dateString})
    }


    render() {
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col xs="12">
                        <Card>
                            <CardHeader>
                                <i className="fa fa-edit"></i>Form Elements
                                <div className="card-actions">
                                    <a href="#" className="btn-setting"><i className="icon-settings"></i></a>
                                    <a href="#" className="btn-minimize"><i className="icon-arrow-up"></i></a>
                                    <a href="#" className="btn-close"><i className="icon-close"></i></a>
                                </div>
                            </CardHeader>
                            <CardBody>
                                {/*<Form className="form-horizontal">*/}
                                    {/*<FormGroup>*/}
                                        {/*<Label htmlFor="prependedInput">Prepended text</Label>*/}
                                        {/*<div className="controls">*/}
                                            {/*<InputGroup className="input-prepend">*/}
                                                {/*<InputGroupAddon>@</InputGroupAddon>*/}
                                                {/*<Input id="prependedInput" size="16" type="text"/>*/}
                                            {/*</InputGroup>*/}
                                            {/*<p className="help-block">Here's some help text</p>*/}
                                        {/*</div>*/}
                                    {/*</FormGroup>*/}
                                    {/*<FormGroup>*/}
                                        {/*<Label htmlFor="appendedInput">Appended text</Label>*/}
                                        {/*<div className="controls">*/}
                                            {/*<InputGroup>*/}
                                                {/*<Input id="appendedInput" size="16"*/}
                                                       {/*type="text"/><InputGroupAddon>.00</InputGroupAddon>*/}
                                            {/*</InputGroup>*/}
                                            {/*<span className="help-block">Here's more help text</span>*/}
                                        {/*</div>*/}
                                    {/*</FormGroup>*/}
                                    {/*<FormGroup>*/}
                                        {/*<Label htmlFor="appendedPrependedInput">Append and prepend</Label>*/}
                                        {/*<div className="controls">*/}
                                            {/*<InputGroup className="input-prepend">*/}
                                                {/*<InputGroupAddon>$</InputGroupAddon>*/}
                                                {/*<Input id="appendedPrependedInput" size="16"*/}
                                                       {/*type="text"/><InputGroupAddon>.00</InputGroupAddon>*/}
                                            {/*</InputGroup>*/}
                                        {/*</div>*/}
                                    {/*</FormGroup>*/}
                                    {/*<FormGroup>*/}
                                        {/*<Label htmlFor="appendedInputButton">Append with button</Label>*/}
                                        {/*<div className="controls">*/}
                                            {/*<InputGroup>*/}
                                                {/*<Input id="appendedInputButton" size="16" type="text"/>*/}
                                                {/*<InputGroupButton><Button*/}
                                                    {/*color="secondary">Go!</Button></InputGroupButton>*/}
                                            {/*</InputGroup>*/}
                                        {/*</div>*/}
                                    {/*</FormGroup>*/}
                                    {/*<FormGroup>*/}
                                        {/*<Label htmlFor="appendedInputButtons">Two-button append</Label>*/}
                                        {/*<div className="controls">*/}
                                            {/*<InputGroup>*/}
                                                {/*<Input id="appendedInputButtons" size="16" type="text"/>*/}
                                                {/*<InputGroupButton>*/}
                                                    {/*<Button color="secondary">Search</Button>*/}
                                                    {/*<Button color="secondary">Options</Button>*/}
                                                {/*</InputGroupButton>*/}
                                            {/*</InputGroup>*/}
                                        {/*</div>*/}
                                    {/*</FormGroup>*/}
                                    {/*<div className="form-actions">*/}
                                        {/*<Button type="submit" color="primary">Save changes</Button>*/}
                                        {/*<Button color="secondary">Cancel</Button>*/}
                                    {/*</div>*/}
                                {/*</Form>*/}
                                <EditableTable columnInfo={columnInfo} tableData={data}/>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Forms;
