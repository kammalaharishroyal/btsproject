import '../btproject.css';
import { Link, useParams } from 'react-router-dom';
function BusesDetail() {
    const params = useParams();
    return (
        <div className="bus-detail-body">
        

            <div class="beautiful-div">
                <div class="title">
                    {params.busid}
                </div>
                <div class="content">
                    This is a beautiful Bus. Feel free to customize it to your liking.
                </div>
            </div>
        </div>
    )
}
export default BusesDetail;