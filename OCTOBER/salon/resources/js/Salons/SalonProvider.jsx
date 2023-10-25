import { createContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


export const SalonContext = createContext();


export const SalonProvider = (props) => {

    const [messages, setMessages] = useState([]);
    const [salons, setSalons] = useState(null);
    const [clearSalonInputs, setSalonClearInputs] = useState(false);
    const [salonStore, setSalonStore] = useState(null);
    const [salonDelete, setSalonDelete] = useState(null);
    const [salonDestroy, setSalonDestroy] = useState(null);
    const [salonEdit, setSalonEdit] = useState(null);
    const [salonUpdate, setSalonUpdate] = useState(null);
    

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
        if (null !== salonDestroy) {
            axios.delete(props.urlSalons + '/' + salonDestroy.id)
                .then(response => {
                    setSalons(s => s.filter(salon => salon.id !== salonDestroy.id));
                    setSalonDestroy(null);
                    setSalonDelete(null);
                    AddMessage('success', response.data.message);
                })
                .catch(_ => {
                    AddMessage('danger', 'Something went wrong. Please try again later.');
                    setSalonDestroy(null);
                    setSalonDelete(null);
                });
        }
    }, [salonDestroy]);


    useEffect(_ => {
        if (null !== salonStore) {
            axios.post(props.urlSalons, salonStore)
                .then(response => {
                    setSalons(s => [{ ...salonStore, id: response.data.id }, ...s]);
                    setSalonStore(null);
                    setSalonClearInputs(true);
                    AddMessage('success', response.data.message);
                })
                .catch(error => {
                    if (error.response && error.response.data && error.response.data.errors) {
                        const errors = error.response.data.errors;
                        Object.keys(errors).forEach(key => {
                            AddMessage('danger', errors[key]);
                        });
                    } else {
                        AddMessage('danger', 'Something went wrong. Please try again later.');
                    }
                    setSalonStore(null);
                });
        }
    }, [salonStore]);

    useEffect(_ => {
        if (null !== salonUpdate) {
            axios.put(props.urlSalons + '/' + salonUpdate.id, salonUpdate)
                .then(response => {
                    setSalons(s => s.map(salon => salon.id === salonUpdate.id ? { ...salonUpdate } : salon));
                    setSalonUpdate(null);
                    setSalonEdit(null);
                    AddMessage('success', response.data.message);
                })
                .catch(error => {
                    if (error.response && error.response.data && error.response.data.errors) {
                        const errors = error.response.data.errors;
                        Object.keys(errors).forEach(key => {
                            AddMessage('danger', errors[key]);
                        });
                    } else {
                        AddMessage('danger', 'Something went wrong. Please try again later.');
                    }
                    setSalonUpdate(null);
                });
        }
    }, [salonUpdate]);

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
            salonStore, setSalonStore,
            salonDelete, setSalonDelete,
            salonDestroy, setSalonDestroy,
            salonEdit, setSalonEdit,
            salonUpdate, setSalonUpdate,
            salons
        }}>
            {props.children}
        </SalonContext.Provider>
    );

}
