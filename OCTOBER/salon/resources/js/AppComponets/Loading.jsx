import { useContext } from 'react';
import { SalonContext } from '@/Salons/SalonProvider';

export default function Loading() {

    const { salonStore } = useContext(SalonContext);

    if (null === salonStore) {
        return null;
    }

    return (
        <div className="loder-cover">
            <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div>
    );
}