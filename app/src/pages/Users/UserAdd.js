import React, {useState} from 'react';
import "./users.css"

const UserAdd = ({users, setUsers}) => {

    const onChange = (e) => {
        const field = e.target.id;
        setValues({...values,[field]: e.target.value})
    }

    const addUser = () => {
        setUsers([...users, values])
        console.log(values.id)
        setValues({
            id: Date.now(),
            name:'',
            age: '',
            country:'',
        })
    }

    const [values, setValues] = useState({
        id: Date.now(),
        name:'',
        age: '',
        country:'',
    });

    return (
        <>
            {Object.keys(values).map((value,index) => {

                if(value === 'id'){
                    return false
                }
                if(value === 'age'){
                    return <input
                        className="m-2"
                        id={value}
                        key={index}
                        value={values[value]}
                        type = "number"
                        placeholder={`Input user ${value}`}
                        onChange={onChange}
                    />
                }
                return <input
                    id={value}
                    key={index}
                    value={values[value]}
                    type ="text"
                    placeholder={`Input user ${value}`}
                    onChange={onChange}
                />
            })
            }
            <button class="m-2 btn btn-primary" onClick={addUser}>Add new user</button>
        </>
    );
};

export default UserAdd;