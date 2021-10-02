import qs from "qs";
import { omit } from "lodash";

export class FetchApi {
    static async post(path, data, options = {}) {
        return await FetchApi.request(path, "POST", data, options);
    }

    static async get(path, data, options = {}) {
        return await FetchApi.request(path, "GET", data, options);
    }

    static async put(path, data, options = {}) {
        return await FetchApi.request(path, "PUT", data, options);
    }

    static async patch(path, data, options = {}) {
        return await FetchApi.request(path, "PATCH", data, options);
    }

    static async delete(path, data, options = {}) {
        return await FetchApi.request(path, "DELETE", data, options);
    }

    static async request(path, method, data, options = {}) {
        let headers = new Headers({
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        });

        const myInit = {
            method,
            headers,
        };

        const filteredData = omit(data, "_id");

        if (method === "GET") {
            path = `${path}${qs.stringify(filteredData, {
                addQueryPrefix: true,
                encode: true,
            })}`;
        } else if (method === "DELETE") {
            const ids = {
                ids: filteredData,
            };
            myInit.body = JSON.stringify(ids);
        } else {
            myInit.body = JSON.stringify(filteredData);
        }

        return await fetch(`${path}`, myInit)
            .then((res) => {
                return res
                    .json()
                    .then((json) => {
                        if (res.status === 401) {
                            return window.replace("/");
                        }
                        if (res.status >= 200 && res.status < 300) {
                            return Promise.resolve({data: json});
                        } else {
                            return Promise.reject({data: json});
                        }
                    })
                    .catch((e) => {
                        return Promise.reject(e);
                    });
            })
            .catch((e) => {
                return Promise.reject(e);
            });
    }
}