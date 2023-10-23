import { useContext } from 'react';
import { SalonContext } from '@/Salons/SalonProvider';

export default function List() {

    const { salons } = useContext(SalonContext);

    return (
        <div className="card mt-5">
            <div className="card-header">
                List of Salons
            </div>
            <div className="card-body">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Salon Name</th>
                            <th>Salon Address</th>
                            <th>Salon Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {salons?.map(salon => (
                            <tr key={salon.id}>
                                <td>{salon.name}</td>
                                <td>{salon.address}</td>
                                <td>{salon.phone}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}