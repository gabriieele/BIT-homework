import { useContext } from 'react';
import { SalonContext } from '@/Salons/SalonProvider';

export default function Loading() {

    const { salonCreate } = useContext(SalonContext);

    if (null === salonCreate) {
        return null;
    }

    return (
        <div className="modal">
            <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div>
    );
}