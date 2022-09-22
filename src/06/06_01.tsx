import React, {ChangeEvent} from "react";
import {MouseEvent} from "react";

export const User = () => {
    const deleteUserd = (event: MouseEvent<HTMLButtonElement>) => {
        alert(event.currentTarget.name)
    }
    const deleteUser = () => {
        alert('user delete')
    }
    const saveUser = () => {
        alert('user save')
    }

    const onNameChsnged = () => {
        console.log('name changed')
    }
    const focusLostHandler = () => {
        console.log('focus lost')
    }
    const ageChanged = (event: ChangeEvent<HTMLInputElement>) => {
        console.log('age changed' + event.currentTarget.value)
    }
    return <div>
        <textarea onBlur={focusLostHandler} onChange={onNameChsnged}>
            Marry</textarea>
        <input onChange={ageChanged} type={'number'}/>

        <button tabIndex={1} onClick={deleteUser}>delete</button>
        <button tabIndex={0} onClick={saveUser}>save</button>
        <button name={'button'} onClick={deleteUserd}>00</button>
        <button name={'shmatton'} onClick={deleteUserd}>00</button>
    </div>
}