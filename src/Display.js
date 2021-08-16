import React, { useState, useEffect } from 'react';
import Form from "./Form";
import firebaseDb from "./firebase";

const Display = () => {

	var [currentId, setCurrentId] = useState('');
    var [contactObjects, setContactObjects] = useState({})



    useEffect(() => {
        firebaseDb.child('Kind').on('value', snapshot => {
            if (snapshot.val() != null) {
                setContactObjects({
                    ...snapshot.val()
                });
            }
        })
    }, [])

    const addOrEdit = (obj) => {
        if (currentId == '')
            firebaseDb.child('Kind').push(
                obj,
                err => {
                    if (!err)
                    setCurrentId('')
    
                })
        else
            firebaseDb.child(`Kind/${currentId}`).set(
                obj,setCurrentId(''))
    }

    const onDelete = (id) => {
    if (window.confirm('Are you sure to delete this record?')) {
        firebaseDb.child(`Kind/${id}`).remove(
            err => {
                if (err)
                    console.log(err)
                else
                 setCurrentId('')
                 window.location.reload()
            })
    }
    


}


  return (
        <>
            <div className="myDiv">
                <div >
                    <h1 align="center">Library System</h1>
                </div>
            </div>
            <div>
                <div>
                    <Form {...({ currentId, contactObjects, addOrEdit, onDelete})} ></Form>
                </div>
                <div>
                    <table>
                       
                            <tr>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Author</th>
                                <th>ISBN</th>
                                <th>Actions</th>
                            </tr>
                        
                        <tbody>
                            {
                                Object.keys(contactObjects).map((key) => (
                                    <tr key={key}>
                                        <td>{contactObjects[key].id}</td>
                                        <td>{contactObjects[key].title}</td>
                                        <td>{contactObjects[key].author}</td>
                                        <td>{contactObjects[key].isbn}</td>
                                        <td className="">
                                            <a className="" onClick={() => { setCurrentId(key) }}>
                                            <button type="button" className="contact-button">Edit</button>
                                            </a>
                                            <a className="" onClick={() => { onDelete(key) }}>
                                            <button type="button" className="contact-button">Delete</button>
                                            </a>
                                        
                                        </td>
                                    </tr>
                                ))
                            } 
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Display;