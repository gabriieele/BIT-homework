import { useContext } from 'react';
import { SalonContext } from '@/Salons/SalonProvider';

export default function List() {

    const { salons, setSalonDelete, setSalonEdit } = useContext(SalonContext);

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
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {salons?.map(salon => (
                            <tr key={salon.id}>
                                <td>{salon.name}</td>
                                <td>{salon.address}</td>
                                <td><a href={`tel:+${salon.phone}`}>{salon.phone}</a></td>
                                <td><button
                                    type="button"
                                    className="btn btn-outline-success"
                                    onClick={_ => setSalonEdit(salon)}
                                >Edit</button></td>
                                <td><button
                                    type="button"
                                    className="btn btn-outline-danger"
                                    onClick={_ => setSalonDelete(salon)}
                                >X</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}