import Loading from '@/AppComponets/Loading';
import Create from '@/Salons/Create';
import List from '@/Salons/List';
import { SalonProvider } from '@/Salons/SalonProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../sass/salon.scss';
import Messages from '@/AppComponets/Messages';

export default function Salons({urlSalons}) {


    return (
        <SalonProvider urlSalons={urlSalons}>
          <div className="container">
            <div className="row">
                <div className="col-4">
                    <Create />
                </div>
                <div className="col-8">
                    <List />
                </div>
            </div>
        </div>
        <Loading />
        <Messages />
        </SalonProvider>
        
    );
}
