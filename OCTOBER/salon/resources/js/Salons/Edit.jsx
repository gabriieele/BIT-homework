import { useContext, useEffect, useState } from 'react';
import { SalonContext } from '@/Salons/SalonProvider';

export default function Edit() {

    const { salonEdit, setSalonEdit, setSalonUpdate } = useContext(SalonContext);

    const [inputs, setInputs] = useState({
        name: '',
        address: '',
        phone: ''
    });

    useEffect(_ => {
        if (null !== salonEdit) {
            setInputs(salonEdit);
        }
    }, [salonEdit]);


    const handleChange = e => {
        setInputs(inputs => ({ ...inputs, [e.target.name]: e.target.value }));
    }


    if (null === salonEdit) {
        return null;
    }


    return (
        <div className="modal">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Edit salon</h5>
                        <button type="button" className="btn-close" onClick={_ => setSalonEdit(null)}></button>
                    </div>
                    <div className="modal-body">
                        <div className="mb-3">
                            <label className="form-label">Salon Name</label>
                            <input type="text" className="form-control" name="name" value={inputs.name} onChange={e => handleChange(e)} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Salon Address</label>
                            <input type="text" className="form-control" name="address" value={inputs.address} onChange={e => handleChange(e)} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Salon Phone</label>
                            <input type="text" className="form-control" name="phone" value={inputs.phone} onChange={e => handleChange(e)} />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-success" onClick={_ => setSalonUpdate(inputs)}>Save</button>
                        <button type="button" className="btn btn-danger" onClick={_ => setSalonEdit(null)}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
}