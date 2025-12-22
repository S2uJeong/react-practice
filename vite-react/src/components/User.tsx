interface UserProps { // 인터페이스로 props 타입 분리
    userObj: { name: string; age: number; };
    clickHandler: () => void;
}
export default function User(props: UserProps) {
    const {
        userObj: {name, age},
        clickHandler,
    } = props;
    return (
        <>
            <p>name: {name}</p>
            <p>age: {age}</p>
            <button onClick={clickHandler}>클릭</button>
        </>
    );
}


/*
export default function User({ userObj: {name, age}, clickHandler }: {
    userObj: {name: string; age:number; }; 
    clickHandler: () => void;
}) {
    return (
        <>
            <p>name: {name}</p>
            <p>age: {age}</p>
            <button onClick={clickHandler}>클릭</button>
        </>
    );
}
*/