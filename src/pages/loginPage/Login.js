import React from 'react';
import {Button,Space,Divider,Form,Input} from "antd"
import axios from "axios";
import Cookies from "js-cookie"
import "./login.css"
import {Navigate, useNavigate} from "react-router-dom";
function Login  ()  {
    const navigate = useNavigate()
    const onFinish = async (values) =>{
       const {data} = await axios.post("https://reqres.in/api/login", values)
            Cookies.set("Token",data.token)
        navigate("dialogues")
    }
    return (
        <div className="lodinWrapper">
            <div className="loginLogoNameWrapper">
                <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxEQEBASEhAQEBIQEBEQFRAWEBAVEBASFRIWFhgRFhYYHSggGBolGxUVIT0jJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0lICUtLTYtLy0wLS0tKy0tLS0tLSsrLS0tLS0tKy0tLS0tLy0uLSstLy0tLS0tLTIrLS0tLv/AABEIAMoA+gMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABwIDBAUGAQj/xABCEAABAwICBgcFBgQFBQEAAAABAAIDBBESIQUGMUFRYQcTIlJxgZEjMkKhsRRicoKSwaLC0fBDZLLD4TNTc4OTJP/EABoBAQACAwEAAAAAAAAAAAAAAAABAgQFBgP/xAAyEQACAQIEAgkDBQADAAAAAAAAAQIDEQQFITFBgRIiUWFxobHB8DKR0RMUQuHxBiNi/9oADAMBAAIRAxEAPwCcUREAREQBERAEREAREQBEXhKA9RUlypMiAuIrXWJi8UBdRWsXivRIgLiK2HqoOQFSIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIqXOVDnID1z14CTsWNW1cUDDJNI2NjdpcbC/DmeQXAaf6SnG7KSPCNnXSDM82M2DxdfwWVhsJVxDtTXPguYJEne2NpdI9rGja5zg1o8SVz1fr1o+G460zEbo2l9/Bxs35qIdIaRmqHY5pXyu3FziQPwjY3yssVbqjkcFrVk33LReevoWsSdVdKUY/wCnSyO/HK1n+kOWE7pSl3UjB/7HH+VR8izVlWEX8PN/kmxIbOlR++jYfCZw/kK2FL0n07rdbTzM5tMbwPUtPyUWIollWEf8LeDfu2RYnLR+tdDUWDKiNrjlhfeNxPAY7X8rrd4TuN185LbaG1jqqQjqpnYR/hO7UR5YTs8rFYNbI1vSnyl+UvYWJ3DlWHLiNXukOCezKhogecusveBx8Tmzzy5rsHODRixDDa97i1uN1o8RQqUHaqren32KmSi1MOlGmVzS4BthhOwE78/P5LaNcDsWHSr06qbg72bX2dv87i86cofUipFrK/STY8IBDjjFwMyGjas2GZrhdrgRyP14JDEU5zdOLTa31+cxKnKMVJrRl5ERexQIiIAiIgCIiAIiIAiIgCpc5ekqy43yCA9vc2C0OtGtENAyx9pM4XZEDmR3nd1v13Xztb1x1mZQRWFnzyA4GHYBs6x/3Rw3nLiRDdVUvle6SR7nPccTnk5uP97ty2+XZb+v/wBlT6eH/r8Lv47LulIy9NaZnrJOsmfiOeFoyjjHBjd3jtO8la5EXURiopRirJFgiIrAIiIAiIgCIiALotWdbJqS0bh11OT2oTnhHGMn3TvtsPLaudRedWjCtBwqK6fAE36GbBU3niLXxOtYb2P+JjmnYRwPeW8jNstlsrcOSgrVzT01DMJIzdpsJIiexI3geBG47vAkGatF6Riq4WTwuu1w2fE0jaxw3OC43E5THAN/prqyb173rZ+3C21tlNScpW6TKa7RrZMJADTjFyMiWnafFZ0MLWizWho5D68V6xyuArXQw9OE3Uild24dgdSTiot6I9REXseYREQBERAEREAREQBEVDygKJHLX6a0lHR08k8meHY3e9x91g5k+m3cs9gueQzUSdJWnPtFT1LD7KnJbydNsefL3fJ3FZuBwv7msoPZavw/vbz4Eo5rSekJKmZ80rsT5Dc8Gjc1o3ADJYiIuzSSVkrIsERFICK5BC6RzWMa573GzWNBLnHgAFIGgOjVxAfVyFl8+pjILvBz8wPBt/FY+IxVKgr1Hbs7X4L4gR4Sqo4y73QXeAJ+injR2rlHT26umiBHxluOT9brn5rbrUyz2F+pTfN28lf1IufNzhY2OR4HIrxfR0sTXizmtcOBAI9Cue0rqRQzg+xELu/F2LflHZPmFanntNvrwa8Hf8C5CSLqtZNR6ikBkZ7eIZlzWkPYOL2cOYvzsuVW3pVqdWPTpu6+b9nMkIiL1AXSakaxmins4kwSkNkb3eEoHEb+IvwC5tF51aUasHCaumD6KyycCCHZ3Gw33hXI3Lh+jDTnXQOpnm74BdnF0JNgPymw8C1dow2y4LicRQlQqunLh5rgyhkIqWlVLwAREQBERAEREAREQFuWQNaXE2DQSTyCtudcX45rT6W0iXAxhhbe1y7IkX4LzR9eSGsLXG1gCM7jdcLWRzSi8R+lfTts/q4rbstrtvrsZTws1DpfLF3WPSf2Sjmm+INsz/yO7LPEXIPgCoKvxJJ4nMnmVJHS9X5U9OPvTuHh2GfWT0UbLv8AJ6PQw/T4yfktF87zHRUB53ytvJ4LutXejmSVokqnuhacxE23XEfeJuGeFifBZPRdq6116yVt8LiyEHZce9L5HsjhZ3JSasXMszlCbpUXZrd+y936WDZy0OoOjmixgLzxdNNc+jgPkuE1s0RS/ao6ShieZr4X+0e5jXEXwDETsGZN7D1tI+uGmvsdJJKLdYfZxA75HXsbbwAC78q0nRroLqoTVyAmapGJpObmxE3vfi89q/DDzWNhcTWp0pYmrNtbRTbs5d+uy9SEbXVTVaKhj2B8zvfltn+Fndb9d/Lo0RampUnUk5zd2yAiIqAIiIAo2181LFn1VMyxF3SQtGThvkYNx4t37RntklFkYbE1MPNTg/FcH3MEbakaD0bWQYjC500dmytdLJtOx4DSBhdY7srEbrrc1vR3QPHYbLCe82VzvUSYsvRc/puA6I0lHUxAimqC7GwbACR1jAOWTwOVtgUmxvDgCCCCAQRsIOwrPxletCUatKpLoT1Wr07VyZLIS1n1RqKHtG0sJNhM0EWJ2B7fhPmRszvkudX0ZPC2RrmPaHNeC1zSLtcCLEEKDtcNB/Yap8QuY3ASRE5nqyT2SeIII8gd62eWZi8ReFT6l5/2vlrEpljVvShpKqGa/ZY6zxxjdk8c8jfxAU7S7QRsO/8AdfOqm3Uqu+0aOgcTd0beqPG8fZBPMtAPmsfPKPVjVXg/Ve4Z0EZV1Y8ZV8LnSp6iIgCIiAIiIAiIgMHSlP1kbgBntHiN3nsVNDDgDG8Bc8zbM+qy5Fap/e8j9QvNUoqo6v8AK1uV7lum+j0eF7kQdJVT1mkZRuiZHEP0h5+byuWW31tlxV9Wf8xI39LsP7LULv8ADR6FKEe5eiuSifdWKcRUVKwboIyebi0OcfMklbVabVGrE1DSvBv7FjD+NgwO+bStyuIrJqrNS3u/UoRtr4TWaSo6IE4Rhc+x75u/zEbLj8RUjRsDQAAAAAABsAG5R3oL22sFW859U2UjkWdXD9CVI6zcf1I0qXBQT5y1ZIVD3hoJJAA2kmwCrUE63aekrKh7sRMLHubFHfsNaDYPt3jtvztsC88DgpYqbSdkt3v4fNAkTjDM14u1zXDiHAj5K6vnfRmkJaaRssLyx7TtGxw7rh8TeRU96IrRUU8MwFhLGx+Huki5b5G48lfH5e8LZ3unxtbXz9Q0ZqsuqWB2EvYHd0uaHei5PpI06+lp2RxOLJKhzm4xk5kbQMRadx7TRfdc71D7s7km5JuScySd54r2wWVPEU/1JSsuGl/x8uEj6SRRt0Waee9z6WRznhsfWRFxuWBpAdHc7u0CBuseSklYOKw8sPVdOX+og5zXzRoqKCcWu6IGdnHFGCSBzLcQ81Y6N9I9fQRgm7oHGAnk2xZ/A5o8l072ggg5gggjiCo96JXFjq6En3HxnzvI1x/hasil18DUi/4uLXPqv25kkiqPul+lBhppd7ZXx35PZi/21IKjnperBhpod5c+YjgAMA9cTv0lMrv+7hbv9GERmpQ6IZ7wVUXdkZJ/9GYf9tReu+6IZLVFS3vQtd+l9v5l0OaR6WEn3WfmiXsSTEVksWM3afE/VZEa44qVoiIAiIgCIiAIiIC1IrUHvHw/cK7IrMB7fiCpBBms7bV1YP8AMzn1kcf3WrXQa/QYNI1I3Ocx454o2n6krn13dCXSpQl2peiLnb9HGszad5p5nYYZXYmPJyjkyFjwa6wz3EcyRLa+bV1Gr2vFTSNDDaoibkGPJDmDg1+ZA5EEDdZanMcrdaTq0vqe62v3rs56cW7kNHR6pjDp2vB+JtSR5zxOHyUjqH9E6fZJpmOoa10bZ3NjewkGxewR7RuxBpUwLWZpCSqQclvCP3WjRDC+c6yldDI+Jws6N7mHxabX+S+jFy+smplNWu6wl0MtgDIy3bsLDG05Gw35HZnkpyzHQw0pKe0rfdf6wiFrqedU6Z0VFSseCHCFpLTtaXdotPMXstHofo7poJGySPfUFhBa1wa2MEbCWjb5m3JdovTNMfTxCjCnstb7f2GyOel+lcWUkoHZY6WM8i4Nc3/Q5RmvobSNFHUROilYHxvFi0/IgjMEGxuNllxknRhAXXbUTNbf3S1hd4YrD6LIy7M6NKiqVTS17abpu/DjdslM0HRTTOdWveB2Y4HYjuBe5oa3zs4/lKl5avQehYKKLq4WkAnE5xN3vd3nH+wtotXjsSsRWc4rTRLlx5lWFHPRccVTpF42F7D+qSUj6LtdPV4p6Web/txPcObrWaPNxA81E2qmtg0fDK1sHWyyvBxF+FjWtbYXsCSbl2WW3asnA0J1cLWUFdvopfe79iUS9pOvjp4nyyuDGMFyTv4NA3k7LKDNYtLvramSZwtis1jO7GPdb9SeZK905p6orXh0z7ge7GBaJn4W8eZuea1a3GXZd+2TlJ3k/sl2LtvxftvKQXd9ETf/ANU54QAer2/0XCKR+h6DOrk3WhYDz7ZP8q9szlbCT5eqDO/b7zvxH6rIjWLEb+ay2LjWVK0RFACIiAIiIAiIgLUixSbOB5rMeFhzNUoEb9LdFhqYZt0sJZ+Zjtvo9vouEUx9Iej/ALTo9zwLvpyJvytBD/LCS78oUOLrspq/qYZLjHT3XkyyCIi2RJ7fgSDxG0HiFO+qemRWUkctxjAwSjuytAxZbgcnDk4KB10GpusbqGfEbuhks2Vg22GyRo7wufEEjhbXZnhHiKXV+parv7Vz9UGTkisUtQyVjZI3B7HgOa4G4cDvCvrjygREQBERAERaPWfWCOhhL3Wc91xHFfOR37NG8/uQDaEJVJKEVdsHK9K+mhhjo2HNxEkvJo9xh8T2vyt4qM1frat80j5ZHYnyOLnO4k8OAGQtuACsLtsJh1h6Kprn4vf8FwiIskBS/wBGlJ1WjsZyM0j5PIWjb5di/mompqd0r2RsF3Pe1jR95xsPmVPUdM2CKGBnuxsawcbMaACVpc7q2pRprdvyX5exDLkIWWxWIgslq5llT1ERQAiIgCIiAIiIDwhY8rVkq1I1AY0BBxMcAQ4HI7DlmPRQhrPoc0VVLEb4b4oz3one6edsx4tKmyUWNxtGa0GvegPt1OJI23ngu5oG17fii8crjmOZW0yzFKhWtL6ZaPufB/OF2SmQ6iIutLBERAdFqrrbNQOwj2sDjd0RNrE7XMPwn5H5iWNB6xU1Y28MgLrXMTuzK3xbw5i45qBVUxxBBBIINwQSCDxBGxa3GZZSxD6S6su3t8V7ix9IIoR0brzpCEAdd1rR8MrQ/wDiycfVbiPpQqQO1TwOPEGRo9CStPPJcQn1bPn+StiVkUST9JtWfcip28y2Rx8u0B8lz2lNZKyqBE1Q9zT/AIYsyMjgWtsHed1NLJa8n12l5vy08xYk3WXXmnpQ5kRFRNswtPs2H77xl5DPw2qKNK6SlqpXSzPL3uy4NaNzGjc0cP3uVhot5hMDSwy6ur4t7/0u5c2yyVgiIs0BEWXoygkqZo4Yxdz3YRwHFx5AXPkobSV2DseivQvWTOqnDsQXYzgZXDM/laf4xwUjOdicTu2DwWPQUDKSnjp49jW2J3uJzc88ybrKhYuLxmJ/cVnPhsvBfLlC/GFfVtgVxYYCIiAIiIAiIgCIiAKl4VSIDFlarEUmB3I7f6rMe1Y0salAjvpE1TwF1XA27HdqZg+AnbMPunfwOewm0fr6Bgmw9l2bT8v+FHuumoxZiqKNuKM9p0Dc3M+9GN7fu7RuyyHRZbmSsqNZ+D9n7Pj62TOARegrxb4kIiIAiIgCIiAIiIAiK7TU75XtjjY5znGzWNF3OP8AfogKY2FxDWguc4hoaAS5xJsAANpupY1O0G3R4aZGh1TO0lxBB6lu3qh4kZniN4AVGq+qP2Jgmf1b6o7L3LIQRm1nF/3vEDK5OXO6R0l3Zvvls8rWXDf8jz5wSpUYtxurytpLVNxT7+Gmr14HvQoqpe7Xv4+BvW3cSTtKy42rDoGS29ph5d7ztktgwLFhPpxUrNdzVnzRjyj0Xa9/AqAXqIrFQiIgCIiAIiIAiIgCIiA8IVt7FdXhCAwZY1bhmLObeH9FnPYsaSNWBzOsupVPWYpYSIJzmSB7OQ/faNh+8PO6jPTGhKijdhmic25sH7Y3/heMj4beSmssINxcHiqnThzSyVjXtcLEFoLXDgWnIrZ4XNK1BdGXWj37rwfsyUyAEUuaS6P6Gou6Jzqdx3NOKO/ON2zwBC5ev6N6yO/VuimG6zsDz+V2Q/Ut5RzTDVP5WfY9PPbzJucWi29RqxXM20c5/DGZB6susR2jJxtp5x4wyD9lmxqQkrxkn4NMkw0WczRFU73aaod4QSn6NWdS6n6QlthpJADvfhjt4h5BUSq04q8pJeLQNGvSu80d0YzOsZ544x3WB0jrcLmwB9V1eitVKCk7Qj614+OSz3A8QPdaeYAKwK2bYan9L6T7vz+LkXI61d1Nqqyzg3qYT/ivBAI4sbtf8hzUm6F0HTaPaRE3HK4WdK6xkdyJ+FvIf8rYy1TnZDsj5+qojiWixeYVsT1XpHsXv2+ncRcEl5uf+AvfsYL2P7gOXHh6ZrFqtINaWhpBs7tWzGHfmtpTSskF2uDh9PEblpVXoV5Ommm0091utdO2z37Nmejp1ILpWtcusariIsk8giIgCIiAIiIAiIgCIiAIiIAiIgCtuYriIDGdGrD4lnkK25im4Nc6Fetke3Y4+ef1WaY1QYlNwWRWP4NPkVV9ud3R6lemJedSlgeGud3R6lUmqkPAeA/qq+pVQiQGM4udtcT9PReshWWIlcbGlwY7IlfbGqwxVgKLg11Zo4SFhs0WcC7LNzd4y3rOjjDRZoAHAWAVxF4xowjKU4rV78tCznJpJ7IIiL1KhERAEREAREQBERAEREAREQBERAEREAREQHhC8LVUiAowJgVaICjAmBVogPLL1EQBERAEREAREQBERAEREAREQH//2Q==" alt="img" className="loginLogo"/>
                <h1 className="loginLogoName">Hoory</h1>
            </div>
            <div className="loginButtom">
                <div className="registerWrapper">
                    <h4 className="singtext">
                        Sign in to your account
                    </h4>
                    <h5 className="singtext">
                        New to Hoory <br/>
                        Start by
                        <a href="" className="createAccHref" >Create Your Account</a>

                    </h5>
                    <Space wrap direction="vertical" style={{width:"100%"}}>
                        <Button block className="signGoogleButton">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKoBxdc41cpqz-7ipwR7smTudicsd8J0MBKL0yyup1qA&s" alt="img" className="googleImg"/>
                            <h7 className="googleText">Sign in With Google</h7>
                        </Button>
                    </Space>
                    <Divider>or</Divider>
                    <Form
                        className="loginFormWrapper"
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        style={{ maxWidth: "100%" }}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        // onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            className="forAll"
                            style={{width:"100%"}}
                            label=""
                            name="email"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input rootClassName="forAll" />
                        </Form.Item>

                        <Form.Item
                            className="forAll"
                            label=""
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password />
                        </Form.Item>
                        <Form.Item wrapperCol={{ span: 24 }}>
                            <Button type="primary" htmlType="submit" block>
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Login;