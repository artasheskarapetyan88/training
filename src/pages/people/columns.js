import {Dropdown, Tag} from "antd";
import {DeleteOutlined, EllipsisOutlined} from "@ant-design/icons";
import {PeopleType} from "./utils";
import {SwitchStatus} from "./SwichStatus";

export const columnsList = (showModal, data) => {
    const items = (id) => [
        {
            label: <div onClick={() => showModal(id)}>
                < DeleteOutlined/>
                Delete
            </div>,
            key: "0",
            danger: true
        }]
    return [
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
}