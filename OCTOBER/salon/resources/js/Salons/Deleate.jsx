import { useContext } from 'react';
import { SalonContext } from '@/Salons/SalonProvider';

export default function Delete() {

    const { salonDelete, setSalonDelete, setSalonDestroy } = useContext(SalonContext);

    if (null === salonDelete) {
        return null;
    }

    return (
        <div className="modal">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Confirm delete</h5>
                        <button type="button" className="btn-close" onClick={_ => setSalonDelete(null)}></button>
                    </div>
                    <div className="modal-body">
                        <p>Are you sure you want to delete this nice place?</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-success" onClick={_ => setSalonDestroy(salonDelete)}>YES</button>
                        <button type="button" className="btn btn-danger" onClick={_ => setSalonDelete(null)}>NO</button>
                    </div>
                </div>
            </div>
        </div>
    );
}