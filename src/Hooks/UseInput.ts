import {useState} from 'react';

export default (defualtValue:string) =>{
    const [value, setValue] = useState(defualtValue);

    const onChange= (e:React.ChangeEvent<HTMLInputElement>) =>{
        setValue(e.currentTarget.value);
    };
    return { value, onChange , setValue};
}