import {useState} from 'react';
import {Table, Radio, Modal} from 'antd';
import {columnsList} from "./columns";
import {StatusType, initialState} from "./utils";
import {TitileWrapper, DialoguesPageWrapper, TableHeaderWrapper, InputSearch} from "./styles"

const Trainings = () => {
    const [userId, setUserId] = useState()
    const [data, setData] = useState(initialState)
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleDelete = () => {
        const newData = data.filter(item => item.id.toString() !== userId)
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

    const handleSearch = ({target: {value}}) => {
        const newList = initialState.filter(item => item.title.toLowerCase().includes(value.toLowerCase()))
        setData(newList)
    }

    const handleChangeStatus = ({target: {value}}) => {
        let newData = initialState
        if (value !== StatusType.ALL) {
            newData = initialState.filter(item => item.status === value)
        }
        setData(newData)
    }

    const columns = columnsList(showModal, data);

    return (
        <DialoguesPageWrapper>
            <Modal title="Delete Dialodue" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <p>Do you want to delete</p>
            </Modal>
            <TitileWrapper>Trainings</TitileWrapper>
            <TableHeaderWrapper>
                <Radio.Group defaultValue={StatusType.ALL} onChange={handleChangeStatus}>
                    <Radio.Button value={StatusType.ALL}>All</Radio.Button>
                    <Radio.Button value={StatusType.LIVE}>Live</Radio.Button>
                    <Radio.Button value={StatusType.PENDING}>Pending</Radio.Button>
                    <Radio.Button value={StatusType.DRAFT}>Draft</Radio.Button>
                </Radio.Group>
                <InputSearch type="text" onChange={handleSearch}/>
            </TableHeaderWrapper>
            <Table columns={columns} dataSource={data} rowKey={(record) => record.id}/>
        </DialoguesPageWrapper>
    );
};
export default Trainings;