import { createContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


export const SalonContext = createContext();


export const SalonProvider = (props) => {

    const [salons, setSalons] = useState(null);
    const [clearSalonInputs, setSalonClearInputs] = useState(false);
    const [salonCreate, setSalonCreate] = useState(null);
    const [messages, setMessages] = useState([]);

    useEffect(_ => {
        axios.get(props.urlSalons + '/list')
            .then(response => {
                setSalons(response.data.salons);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);


    useEffect(_ => {
        if (null !== salonCreate) {
            axios.post(props.urlSalons, salonCreate)
                .then(response => {
                    setSalons(s => [{ ...salonCreate, id: response.data.id }, ...s]);
                    setSalonCreate(null);
                    setSalonClearInputs(true);
                    AddMessage('success', response.data.message);
                })
                .catch(error => {

                    console.log(error);
                    if (error.response && error.response.data && error.response.data.errors) {
                        const errors = error.response.data.errors;
                        Object.keys(errors).forEach(key => {
                            AddMessage('danger', errors[key]);
                        });
                    } else {
                        AddMessage('danger', 'Something went wrong. Please try again later.');
                    }
                    setSalonCreate(null);
                });
        }
    }, [salonCreate]);

    const AddMessage = (type, text) => {
        const message = {
            id: uuidv4(),
            type,
            text
        };

        setMessages(m => [message, ...m]);
        if ('danger' !== type) {
            setTimeout(_ => {
                setMessages(m => m.filter(msg => msg.id !== message.id));
            }, 5000);
        }

    }

    const removeMessage = id => {
        setMessages(m => m.filter(msg => msg.id !== id));
    }


    return (
        <SalonContext.Provider value={{
            messages, removeMessage,
            clearSalonInputs, setSalonClearInputs,
            salonCreate, setSalonCreate,
            salons
        }}>
            {props.children}
        </SalonContext.Provider>
    );

}
