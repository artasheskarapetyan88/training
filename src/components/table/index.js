import {Table, Radio,Tag} from 'antd';
import {useState} from 'react';

const columns= [
    {
        title: 'Title',
        dataIndex: 'title',
    },
    {
        title: 'Last edited',
        dataIndex: 'lastEdit',
    },
    {
        title: 'Status',
        key: "status",
        dataIndex: "status",
        render: (_, data) => <Tag color='geekblue' >{data.status}</Tag>
    }
];
const initialState = [
    {title:"sefadc",lastEdit : "4-14-2023",status : "Live",key : 1},
    {title:"sefadc",lastEdit : "4-15-2023",status : "Draft",key : 2},
    {title:"sefadc",lastEdit : "4-14-2023",status : "Live",key : 3},
    {title:"sefadc",lastEdit : "4-15-2023",status : "Pending",key : 4},
    {title:"sefadc",lastEdit : "4-15-2023",status : "Pending",key : 5},
    {title:"sefadc",lastEdit : "4-08-2023",status : "Pending",key : 6},
    {title:"sefadc",lastEdit : "3-09-2023",status : "Live",key : 7},
    {title:"sefadc",lastEdit : "4-09-2023",status : "Pending",key : 8},
    {title:"sefadc",lastEdit : "3-10-2023",status : "Draft",key : 9},
    {title:"sefadc",lastEdit : "3-11-2023",status : "Draft",key : 10},
    {title:"sefadc",lastEdit : "3-12-2023",status : "Draft",key : 11},
    {title:"sefadc",lastEdit : "2-13-2023",status : "Draft",key : 12},
    {title:"sefadc",lastEdit : "2-14-2023",status : "Draft",key : 13},
    {title:"sefadc",lastEdit : "4-12-2023",status : "Live",key : 14},
    {title:"sefadc",lastEdit : "2-8-2023",status : "Live",key : 15},
    {title:"sefadc",lastEdit : "1-7-2023",status : "Live",key : 16},
    {title:"sefadc",lastEdit : "2-4-2023",status : "Pending",key : 17},
]
initialState.sort(function (a,b){
    return new Date(b.lastEdit) - new Date(a.lastEdit)
})
const date = Date.now();
initialState.forEach(item => {
    let postDate = new Date(item.lastEdit).getTime();
    let dayCount = Math.floor((date - postDate)/(1000 * 3600 *24));
    if(dayCount <= 5){
        item.lastEdit = dayCount + " days ago"
    }

})

// const data = [];
// for (let i = 0; i < 46; i++) {
//     data.push({
//         key: i,
//         name: `Edward King ${i}`,
//         age: 32,
//         address: `London, Park Lane no. ${i}`,
//     });
// }
const MyTable = () => {
    const [data,setData] = useState(initialState)
    const [size, setSize] = useState('large');
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [loading, setLoading] = useState(false);
    const start = () => {
        setLoading(true);
        // ajax request after empty completing
        setTimeout(() => {
            setSelectedRowKeys([]);
            setLoading(false);
        }, 1000);
    };
    const onSelectChange = (newSelectedRowKeys) => {
        console.log('selectedRowKeys changed: ', newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };
    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;
    const handleClickBtnAll = () =>{
        setData(initialState)
    }
    const handleClickLiveBtn = () => {
        let newData = initialState.filter(item => item.status === "Live")
        setData(newData)
    }
    const handleClickPandingBtn = () => {
        let newData = initialState.filter(item =>item.status === "Pending")
        setData(newData)
    }
    const handleClickDraftBtn = () => {
        let newData = initialState.filter(item =>item.status === "Draft")
        setData(newData)
    }
    return (
        <div>
            <div
                style={{
                    marginBottom: 16,
                }}
            >
                <Radio.Group value={size} onChange={(e) => setSize(e.target.value)}>
                    <Radio.Button onClick={handleClickBtnAll} value="all">All</Radio.Button>
                    <Radio.Button onClick={handleClickLiveBtn} value="live">Live</Radio.Button>
                    <Radio.Button onClick={handleClickPandingBtn} value="panding">Pending</Radio.Button>
                    <Radio.Button onClick={handleClickDraftBtn} value="draft">Draft</Radio.Button>
                </Radio.Group>
                <span
                    style={{
                        marginLeft: 8,
                    }}
                >
          {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
        </span>
            </div>
            <Table columns={columns} dataSource={data}/>
        </div>
    );
};
export default MyTable;