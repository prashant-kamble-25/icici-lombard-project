import Table from 'react-bootstrap/Table';
import './BikeTable.css'
import data from './BikeTable.json'

function BikeTable() {
    
    return (
        <div className="table-wrapper">
            <table className="product-table">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Product Code</th>
                        <th>UIN no.</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.product}</td>
                            <td>{item.code}</td>
                            <td className="uin">{item.uin}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default BikeTable;