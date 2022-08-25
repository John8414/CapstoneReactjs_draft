import { request } from "../configs/axios";

const fetchRoomListApi = (maLichChieu) => {
    return request({
        url: `/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,
        method: 'GET',
    });
};

export { fetchRoomListApi };