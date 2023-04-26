const Profile=props=>{
    return(<>
            <h1>Hello World {props.name} {props.surname}</h1></>)
}
const Hello=(props)=>{
    return(<>
    <h1>Hello World
        <Profile {...props}/>
        </h1>
        </>

    );
}
export default Hello;