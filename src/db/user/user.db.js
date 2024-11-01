// 유저 쿼리 실행

import { toCamelCase } from "../../utils/transformCase.js";
import pools from "../database.js"
import { SQL_QUERIES } from "./user.queris.js"
import { v4 as uuidv4 } from 'uuid';
// 유저 찾기
export const findUserByDeviceId = async (deviceId) => {
    const [rows] = await pools.USER_DB.query(SQL_QUERIES.FIND_USER_BY_DEVICE_ID, [deviceId]);
    return toCamelCase(rows[0]);
};
// 유저 생성
export const createUser = async (deviceId) => {
    const id = uuidv4();
    await pools.USER_DB.query(SQL_QUERIES.CREATE_USER, [id, deviceId]);
    return { id, deviceId };
};
// 유저 접속 업데이트
export const updateUserLogin = async (deviceId) => {
    await pools.USER_DB.query(SQL_QUERIES.UPDATE_USER_LOGIN, [deviceId]);
};
// 유저 위치 업데이트
export const updateUserLocation = async (x, y, deviceId) => {
    await pools.USER_DB.query(SQL_QUERIES.UPDATE_USER_LOCATION, [x, y, deviceId]);
};