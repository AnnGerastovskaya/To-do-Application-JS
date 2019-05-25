let getStorage = () =>{
    let toDoBoard = [
        {
            idList: 999,
            title: 'Title list',
            tasks: [
                {
                    id:4,
                    selected: false,
                    name:'clear the room'
                },
                {
                    id:14,
                    selected: false,
                    name:'wash the dishes'
                },
                {
                    id:74,
                    selected: false,
                    name:'play tennis'
                },
                {
                    id:194,
                    selected: false,
                    name:'read a book'
                }
            ]
        }
    ];
    JSON.parse(localStorage.getItem("toDoData"))===null?localStorage.setItem("toDoData", JSON.stringify(toDoBoard)):-1;
    return JSON.parse(localStorage.getItem("toDoData"));
};
const saveUpdatingStorege = (toDoBoard) =>localStorage.setItem('toDoData',JSON.stringify(toDoBoard));