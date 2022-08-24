import React from 'react';
import Detail from '../../modules/detail/detail';
import Schedule from '../../modules/schedule/schedule';

export default function MovieDetail() {
    return (
        <div className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Detail />
                    </div>
                    <Schedule />
                </div>
            </div>
        </div>

    );
}
