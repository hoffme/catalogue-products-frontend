import {io, Socket} from "socket.io-client";

class Realtime {

    public static readonly host: string = 'http://localhost:4000';

    private static _socket?: Socket = undefined;

    public static get socket() {
        if (!this._socket) this._socket = io(this.host);
        return this._socket;
    }

}

export default Realtime;