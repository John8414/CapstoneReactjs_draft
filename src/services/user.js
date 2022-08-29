import { request } from "../configs/axios";

const logInApi = (data) => {
    return request({
        data,
        url: `/QuanLyNguoiDung/DangNhap`,
        method: "POST",
    });
};

export { logInApi };