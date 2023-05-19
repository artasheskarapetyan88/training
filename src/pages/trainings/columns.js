import {Dropdown, Tag} from "antd";
import {DeleteOutlined, EllipsisOutlined} from "@ant-design/icons";
import {SwitchStatus} from "./SwitchStatus";
import {DeleteWrapper} from "./styles";


export const columnsList = (showModal, data) => {
    const items = (id) => [
        {
            label: <DeleteWrapper onClick={() => showModal(id)}>
                < DeleteOutlined/>
                Delete
            </DeleteWrapper>,
            key: "0",
            danger: true
        }]

    return [
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

}
