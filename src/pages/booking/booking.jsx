import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Chairs from '../../modules/chairs/chairs';
import { fetchRoomListApi } from '../../services/booking';
import './index.scss';

export default function Booking() {
    const [roomList, setRoomList] = useState();

    const params = useParams();
    useEffect(() => {
        fetchRoomList();
    }, []);

    const fetchRoomList = async () => {
        const result = await fetchRoomListApi(params.maLichChieu);
        setRoomList(result.data.content);

    };

    return roomList ? (
        <div className="container">
            <div className="row mx-auto my-5">
                <div className="col-lg-8 seatList">
                    <div className="container">
                        {roomList.danhSachGhe.map((ele, idx) => {
                            return (
                                <>
                                    <Chairs key={ele.tenGhe} item={ele} />
                                    {(idx + 1) % 10 === 0 && <br />}
                                </>
                            );
                        })}
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="container">
                        <h2>{roomList.thongTinPhim.tenPhim}</h2>
                        <img className='rounded pb-5' src={roomList.thongTinPhim.hinhAnh} alt="hinhPhim" />
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Type</th>
                                    <th>Quantity</th>
                                    <th>Amount</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Standard</td>
                                    <td>
                                        P<sub>1</sub>
                                        P<sub>2</sub>
                                    </td>
                                    <td>100</td>
                                    <td className="text-danger">600</td>
                                </tr>
                                <tr>
                                    <td>VIP</td>
                                    <td>P<sub>2</sub></td>
                                    <td>200</td>
                                    <td />
                                </tr>
                                <tr>
                                    <td>Couple</td>
                                    <td>P<sub>3</sub></td>
                                    <td>300</td>
                                    <td />
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    ) : (
        "Loading"
    );
}
