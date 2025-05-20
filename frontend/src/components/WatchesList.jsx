import { Link } from 'react-router-dom';
import watches from "../../public/Watches";

export default function WatchesList(watch){
    return(<>
        <section id="view-layout-list">
            <div className="list-container">
                <div key={watch.id} className="list-item">

                    <Link to={`/detail/${watch.id}#heading`}>
                    <img src={'https://img.freepik.com/free-photo/elegant-watch-with-silver-golden-chain-isolated_181624-27080.jpg?uid=R179931391&ga=GA1.1.101214978.1730494257&semt=ais_hybrid&w=740'} 
                        alt={watch.name}
                        />
                    </Link>

                    <div className="description">
                        <h1>{watch.name}</h1>
                        <p className="price">{watch.price}</p>
                        <p>{watch.description}</p>
                            
                        <Link to={`/detail/${watch.id}#heading`} className="btn-list">See Details</Link>
                    </div>
                </div>
            </div>
        </section>
    </>);
};