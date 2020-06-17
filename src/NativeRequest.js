import { NativeModules } from 'react-native';

class NativeRequest {
    url;
    method;
    header;
    body;

    constructor(url, method, header, body) {
        this.url = url;
        this.method = method;
        this.header = header;
        this.body = body;
    }

    async Send() {
        switch (this.method) {
            case "POST":
                return NativeModules.NativeNetwork.NativPost(this.url, this.header, this.body);
            case "GET":
                return NativeModules.NativeNetwork.NativGet(this.url, this.header);
            case "PUT":
                return NativeModules.NativeNetwork.NativPut(this.url, this.header, this.body);
            default:
                throw new Error(`The given method ${this.method} is not supported!`);
        }
    }
}

export default NativeRequest;