import { request } from "../configs/axios";

const fetchMovieScheduleApi = (movieId) => {
    return request({
        url: `/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${movieId}        `,
        method: 'GET',
    });
}; export { fetchMovieScheduleApi };