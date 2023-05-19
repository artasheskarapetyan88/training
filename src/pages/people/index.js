import React, {useState} from 'react';
import {Table, Radio, Modal} from 'antd';
import {columnsList} from "./columns";
import {PeopleType,initialState} from "./utils";
import {TitileWrapper, DialoguesPageWrapper} from "./styles"

const People = () => {
    const [data, setData] = useState(initialState)
    const [userId, setUserId] = useState()

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleChange = ({target: {value}}) => {
        let newData = initialState
        if (value !== PeopleType.ALL) {
            newData = initialState.filter(item => item.type === value)
        }
        setData(newData)
    }
    const handleDelete = () => {
        const newData = data.filter(item => item.id !== userId)
        console.log(newData)
        setData(newData)
    }
    const showModal = (id) => {
        setUserId(id)
        setIsModalOpen(true);
    };
    const handleOk = () => {
        handleDelete()
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const columns = columnsList(showModal, data)

    return (
        <DialoguesPageWrapper>
            <Modal title="Delete Dialodue" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <p>Do you want to delete</p>

            </Modal>
            <TitileWrapper>People</TitileWrapper>
            <div
                style={{
                    marginBottom: 16,
                }}
            >
                <Radio.Group defaultValue={PeopleType.ALL} onChange={handleChange}>
                    <Radio.Button value={PeopleType.ALL}>All</Radio.Button>
                    <Radio.Button value={PeopleType.USER}>Users</Radio.Button>
                    <Radio.Button value={PeopleType.VISITOR}>Visitors</Radio.Button>
                </Radio.Group>
            </div>
            <Table columns={columns} dataSource={data} rowKey={(record) => record.id}/>
        </DialoguesPageWrapper>
    );
};
export default People;