import {useState} from 'react';
import {Table, Radio, Tag,  Dropdown, Modal} from 'antd';
import {v4 as uuidv4} from 'uuid';
import {StatusType} from "./utils";
import {SwitchStatus} from "./SwitchStatus";
import {TitileWrapper, DialoguesPageWrapper, TableHeaderWrapper, InputSearch,DeleteWrapper} from "./styles"
import {DeleteOutlined, EllipsisOutlined} from "@ant-design/icons";

const initialState = [
    {
        id: uuidv4(),
        title: "sefadc sefadc sefadc sefadc sefadcsefadcsefadc sefadcsefadc sefadc sefadc sefadc sefadc sefadc sefadc sefadc sefadc sefadcsefadc ",
        lastEdit: "4-14-2023",
        status: "1"
    },
    {id: uuidv4(), title: "sefadc", lastEdit: "4-15-2023", status: "3"},
    {id: uuidv4(), title: "sefadc", lastEdit: "4-14-2023", status: "1"},
    {id: uuidv4(), title: "sefadc", lastEdit: "4-15-2023", status: "2"},
    {id: uuidv4(), title: "sefadc", lastEdit: "4-15-2023", status: "2"},
    {id: uuidv4(), title: "sefadc", lastEdit: "4-08-2023", status: "2"},
    {id: uuidv4(), title: "sefadc", lastEdit: "3-09-2023", status: "1"},
    {id: uuidv4(), title: "sefadc", lastEdit: "4-09-2023", status: "2"},
    {id: uuidv4(), title: "sefadc", lastEdit: "3-10-2023", status: "3"},
    {id: uuidv4(), title: "sefadc", lastEdit: "3-11-2023", status: "3"},
    {id: uuidv4(), title: "sefadc", lastEdit: "3-12-2023", status: "3"},
    {id: uuidv4(), title: "sefadc", lastEdit: "2-13-2023", status: "1"},
    {id: uuidv4(), title: "sefadc", lastEdit: "2-14-2023", status: "2"},
    {id: uuidv4(), title: "sefadc", lastEdit: "4-12-2023", status: "1"},
    {id: uuidv4(), title: "sefadc", lastEdit: "2-8-2023", status: "3"},
    {id: uuidv4(), title: "sefadc", lastEdit: "1-7-2023", status: "1"},
    {id: uuidv4(), title: "sefadc", lastEdit: "2-4-2023", status: "2"},
]
initialState.sort(function (a, b) {
    return new Date(b.lastEdit) - new Date(a.lastEdit)
})
const date = Date.now();
initialState.forEach(item => {
    let postDate = new Date(item.lastEdit).getTime();
    let dayCount = Math.floor((date - postDate) / (1000 * 3600 * 24));
    if (dayCount <= 5) {
        item.lastEdit = dayCount + " days ago"
    }

})

const Dialogues = () => {
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
    const items = (id) => [
        {
            label: <DeleteWrapper onClick={() => showModal(id)}>
                < DeleteOutlined/>
                Delete
            </DeleteWrapper>,
            key: "0",
            danger: true
        }]
    const columns = [
        {
            title: 'Title',
            dataIndex: 'title',
            width: "50%"
        },
        {
            title: 'Last edited',
            dataIndex: 'lastEdit',
            width: "40%"
        },
        {
            title: 'Status',
            dataIndex: 'status',
            width: "10%",
            render: (_, {status}) => {
                const {color, text} = SwitchStatus(status);
                return (
                    <Tag color={color}>{text.toUpperCase()}</Tag>
                )

            }
        },
        {
            title: 'operation',
            dataIndex: 'operation',
            render: (_, record) =>
                data.length >= 1 ? (
                    <Dropdown
                        getPopupContainer={(triggerNode) =>  triggerNode.parentElement || document.body}
                        menu={{
                            items: items(record.id)
                        }}
                        trigger={['click']}
                    >
                        <EllipsisOutlined/>

                    </Dropdown>
                ) : null,
        },
    ];

    const handleSearch = ({target:{value}}) => {
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

    return (
        <DialoguesPageWrapper>
            <Modal title="Delete Dialodue" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <p>Do you want to delete</p>

            </Modal>
            <TitileWrapper>Dialogues</TitileWrapper>
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
export default Dialogues;