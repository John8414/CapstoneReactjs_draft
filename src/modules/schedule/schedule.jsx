import "./index.scss";
import React, { useState } from 'react';
import { fetchMovieScheduleApi } from "../../services/cinema";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import moment from "moment";

export default function Schedule() {
    const [schedule, setSchedule] = useState({});

    const params = useParams();
    useEffect(() => {
        fetchMovieSchedule();
    }, []);
    const fetchMovieSchedule = async () => {
        const result = await fetchMovieScheduleApi(params.movieId);
        setSchedule(result.data.content);
    };

    const renderTab = () => {
        return schedule?.heThongRapChieu?.map((ele, idx) => {
            return (
                <a
                    key={ele.maHeThongRap}
                    className={`nav-link cinema__nav ${idx === 0 && 'active'} `}
                    data-toggle="pill"
                    href={`#${ele.maHeThongRap}`}
                >
                    {ele.tenHeThongRap}
                </a>
            );
        });
    };

    const renderContents = () => {
        return schedule?.heThongRapChieu?.map((ele, idx) => {
            return (
                <div
                    key={ele.maHeThongRap}
                    id={ele.maHeThongRap}
                    className={`container m-auto tab-pane ${idx === 0 && 'active'}`}
                >
                    {
                        ele.cumRapChieu.map((ele) => {
                            return (
                                <div
                                    key={ele.maCumRap}
                                    className="row mb-5">
                                    {/* <div className="col-1">
                                        <img className="img-fluid rounded"
                                            src={ele.hinhAnh} />
                                    </div> */}
                                    <div className="col-12 pl-0">
                                        <h5>{ele.tenCumRap}</h5>
                                        <span className="text-muted">{ele.diaChi}</span>
                                    </div>
                                    <div className="col-12">
                                        <div className="row">
                                            {ele.lichChieuPhim.map((ele) => {
                                                return (
                                                    <div
                                                        key={ele.maLichChieu}
                                                        className="col-3">
                                                        <Link to={`/booking/${ele.maLichChieu}`}>
                                                            {moment(ele.ngayChieuGioChieu).format('LLL')}
                                                        </Link>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>

                            );
                        })
                    }
                </div >);
        });
    };



    return (
        <section className="py-5 schedule">
            <div className="container">
                <h1 className="text-center">Schedule</h1>
                <div className="row">
                    {/* Nav pills */}
                    <div className="col-lg-4">
                        <ul className="nav nav-pills cinema__pills flex-column " role="tablist">
                            <li className="nav-item">
                                {renderTab()}
                            </li>

                        </ul>
                    </div>
                    {/* Tab panes */}
                    <div className="col-lg-8">
                        <div className="tab-content">
                            {renderContents()}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
