import React, {useEffect, useState} from 'react';
import './App.css';
import Button from './Components/Button';

type ShowType = {
    userId: number
    id: number
    title: string
    completed: boolean
}

function App() {
    /* useEffect(() => {
         fetch('https://jsonplaceholder.typicode.com/todos')
             .then(response => response.json())
             .then(json => setShow(json))
     }, [])*/

    const [show, setShow] = useState<ShowType[]>([])

    const Show = () => {
        /*useEffect(() => {/!**!/*/
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setShow(json))
        /* }, [])*/
    }
    const clean = () => {
        setShow([])
    }

    const onlyUndone = () => {
        return (
            setShow(show.filter(i=>i.completed))
        )
    }

    const onlyDone = () => {
        return (
            setShow(show.filter(i=>!i.completed))
        )
    }

    return (
        <div className="App">
            <Button name={"Show me"} callBack={Show}/>
            <Button name={"Clean"} callBack={clean}/>
            <Button name={"Undone"} callBack={onlyUndone}/>
            <Button name={"Done"} callBack={onlyDone}/>
            {show.map(i => {

                return (
                    <ul>
                        <li key={i.id}>{i.title} <input type={'checkbox'} checked={i.completed}/></li>
                    </ul>
                )
            })}
        </div>
    );
}

export default App;


//useEffect - 3 настройки
//1ая - молотит без остановки
//2ая - 1 раз при загрузке