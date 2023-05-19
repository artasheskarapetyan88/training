import React, {useState} from 'react';
import {Table, Radio, Tag, Dropdown, Modal} from 'antd';
import {v4 as uuidv4} from 'uuid';
import {SwitchStatus} from "./SwichStatus";
import {PeopleType} from "./utils";
import {TitileWrapper, DialoguesPageWrapper} from "./styles"
import {DeleteOutlined, EllipsisOutlined} from "@ant-design/icons";
import {DeleteWrapper} from "../trainings/styles";


const initialState = [
    {
        id: uuidv4(),
        name: "sefadc",
        type: "2",
        country: "Armenia",
        city: "Yerevan",
        status: "0",
        lastSeen: "11/07/2023",
        firstSeen: "11/07/2023"
    },
    {
        id: uuidv4(),
        name: "sefadc",
        type: "1",
        country: "Russia",
        city: "Moscow",
        status: "1",
        lastSeen: "11/07/2023",
        firstSeen: "11/07/2023"
    },
    {
        id: uuidv4(),
        name: "sefadc",
        type: "1",
        country: "Armenia",
        city: "Yerevan",
        status: "0",
        lastSeen: "11/07/2023",
        firstSeen: "11/07/2023"
    },
    {
        id: uuidv4(),
        name: "sefadc",
        type: "2",
        country: "Russia",
        city: "Moscow",
        status: "0",
        lastSeen: "11/07/2023",
        firstSeen: "11/07/2023"
    },
    {
        id: uuidv4(),
        name: "sefadc",
        type: "2",
        country: "Georgia",
        city: "Tbilisi",
        status: "1",
        lastSeen: "11/07/2023",
        firstSeen: "11/07/2023"
    },
    {
        id: uuidv4(),
        name: "sefadc",
        type: "1",
        country: "Armenia",
        city: "Yerevan",
        status: "2",
        lastSeen: "11/07/2023",
        firstSeen: "11/07/2023"
    },
    {
        id: uuidv4(),
        name: "sefadc",
        type: "2",
        country: "Russia",
        city: "Moscow",
        status: "1",
        lastSeen: "11/07/2023",
        firstSeen: "11/07/2023"
    },
    {
        id: uuidv4(),
        name: "sefadc",
        type: "2",
        country: "Armenia",
        city: "Yerevan",
        status: "1",
        lastSeen: "11/07/2023",
        firstSeen: "11/07/2023"
    },
    {
        id: uuidv4(),
        name: "sefadc",
        type: "1",
        country: "Georgia",
        city: "Tbilisi",
        status: "0",
        lastSeen: "11/07/2023",
        firstSeen: "11/07/2023"
    },
    {
        id: uuidv4(),
        name: "sefadc",
        type: "2",
        country: "Russia",
        city: "Moscow",
        status: "2",
        lastSeen: "11/07/2023",
        firstSeen: "11/07/2023"
    },
    {
        id: uuidv4(),
        name: "sefadc",
        type: "2",
        country: "Armenia",
        city: "Yerevan",
        status: "1",
        lastSeen: "11/07/2023",
        firstSeen: "11/07/2023"
    },
    {
        id: uuidv4(),
        name: "sefadc",
        type: "1",
        country: "Russia",
        city: "Moscow",
        status: "1",
        lastSeen: "11/07/2023",
        firstSeen: "11/07/2023"
    },
    {
        id: uuidv4(),
        name: "sefadc",
        type: "2",
        country: "Georgia",
        city: "Tbilisi",
        status: "0",
        lastSeen: "11/07/2023",
        firstSeen: "11/07/2023"
    },
    {
        id: uuidv4(),
        name: "sefadc",
        type: "1",
        country: "Armenia",
        city: "Yerevan",
        status: "2",
        lastSeen: "11/07/2023",
        firstSeen: "11/07/2023"
    },
    {
        id: uuidv4(),
        name: "sefadc",
        type: "2",
        country: "Georgia",
        city: "Tbilisi",
        status: "1",
        lastSeen: "11/07/2023",
        firstSeen: "11/07/2023"
    },
    {
        id: uuidv4(),
        name: "sefadc",
        type: "2",
        country: "Russia",
        city: "Moscow",
        status: "1",
        lastSeen: "11/07/2023",
        firstSeen: "11/07/2023"
    },

]

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
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
        },
        {
            title: 'Type',
            dataIndex: 'type',
            render: (_, {type}) => {
                const text = type === PeopleType.USER && "User"
                return (
                    <>
                        {text || "Visitor"}
                    </>
                )

            }

        },
        {
            title: 'Country',
            dataIndex: 'country',
        },
        {
            title: 'City',
            dataIndex: 'city',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            render: (_, {status}) => {
                const {color, text} = SwitchStatus(status);
                return (
                    <Tag color={color}>{text.toUpperCase()}</Tag>
                )

            }
        },
        {
            title: 'Last Seen',
            dataIndex: 'lastSeen',
        },
        {
            title: 'First Seen',
            dataIndex: 'firstSeen',
        },
        {
            title: 'operation',
            dataIndex: 'operation',
            render: (_, record) =>
                data.length >= 1 ? (
                    <Dropdown
                        getPopupContainer={(triggerNode) => triggerNode.parentElement || document.body}
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
    const items = (id) => [
        {
            label: <DeleteWrapper onClick={() => showModal(id)}>
                < DeleteOutlined/>
                Delete
            </DeleteWrapper>,
            key: "0",
            danger: true
        }]
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