import React, {useState} from 'react';
import {MyDiv} from "./styles";

const Test = () => {
    const [val, setVal] = useState("");
    const [color,setColor] = useState("yellow")
    const handleChangeColor = ({target: {value,validity}}) => {
        setVal((v) => (validity.valid ? value : v))
        if (isFinite(value)) {
            if (value % 2 === 0) {
                setColor("green")
            } else {
                setColor("yellow")
            }
        }
    }

    return (
        <div>
            <MyDiv $color={color}/>
            <input pattern="[0-9]*"
                   value={val} onChange={handleChangeColor}/>

        </div>
    );
};

export default Test;