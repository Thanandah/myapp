import { useState } from 'react';

function Item({name,isPacked}){
   return (<li>{name} {isPacked && '✔'}</li>);
}
export default function PackingList(){
    const [search,setSearch]=useState("");
    const item=[
        {id:1,
        name:"Macbook Pro",
        price:30000},
        {id:2,
        name:"Macbook Air",
        price:22000},
        {id:3,
        name:"Mac Mini",
        price:24000} ,
    ];
    const fillterList= item.filter(item=> item.name.includes(search));
    console.log(fillterList);
    const itemList=item.map(item=>
                            <li key={item.id}>
                                id:{item.id+" "}
                                name:{item.name+" "}
                                price:{item.price+" "}
                            </li>);
    const fillterList2=fillterList.map(item=>
        <li key={item.id}>
            id:{item.id+" "}
            name:{item.name+" "}
            price:{item.price+" "}
        </li>);
        const onTextChange=(event)=>{
            setSearch(event.target.value);
        }
    return (<>
        Search:
        <input
            type="text"
            onChange={event=>onTextChange(event)}
            />
        <h1>My Shop</h1>
        <ul>
            {itemList}
            </ul>
            <h1>Search Result</h1>
            <ul>
                {fillterList2}
            </ul>
            </>);
}