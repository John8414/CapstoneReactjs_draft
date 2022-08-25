import "./index.scss";
import React, { useEffect, useState } from 'react';
import { fetchMovieListApi } from "../../services/movie";
import { useNavigate } from "react-router-dom";

export default function MovieList() {
  const navigate = useNavigate();
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    fetchMovieList();
  }, []);
  const fetchMovieList = async () => {
    const result = await fetchMovieListApi();
    setMovieList(result.data.content);

  };

  const renderMovieList = () => {
    return movieList.map(ele => {
      return (
        <div
          className="col-lg-3 col-md-4 col-sm-6 col-xs-12 "
          key={ele.maPhim}
        >
          <div className="item__wrapper">
            {/* item */}
            <div className="thumb__item">
              <img
                className="my-2 thumb-img "
                src={ele.hinhAnh}
                alt="movie" />
            </div>
            {/* overlay  */}
            <div className="thumb__overlay">
              <h6 className="thumb__title text-danger">
                {ele.tenPhim}
              </h6>

              <p className="thumb__describe">
                {ele.moTa}
              </p>
              <button
                onClick={() => navigate(`/movie/${ele.maPhim}`)}
                className="btn btn-success">
                See More
              </button>
            </div>
          </div>
        </div >
      );
    });
  };

  return (
    <section className="py-5 thumbnails">
      <div className="container">
        <div className="row">
          {renderMovieList()}
        </div>
      </div>
    </section>
  );
}
