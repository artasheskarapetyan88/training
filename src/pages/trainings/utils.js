import {v4 as uuidv4} from "uuid";

export const StatusType = {
    ALL: "0",
    LIVE: '1',
    PENDING: '2',
    DRAFT: '3',
};

export const initialState = [
    {
        id: uuidv4(),
        title: "sefadc sefadc sefadc sefadc sefadcsefadcsefadc",
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