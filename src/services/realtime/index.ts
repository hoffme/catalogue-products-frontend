import {io, Socket} from "socket.io-client";

import Configs from "../configs";

import Event from './events';

interface Listener<T> {
    subscribed: boolean
    event: Event<T>
}

class EventsManager {

    private static _socket?: Socket = undefined;
    private static readonly listeners: { [key:string]: Listener<any> } = {}

    private static get socket() {
        if (!this._socket) this._socket = io(Configs.host);
        return this._socket;
    }

    private static Register<T>(id: string): Event<T> {
        const onSubscribe = () => {
            if (this.listeners[id].subscribed) return;

            this.socket.emit('subscribe', id);
            this.listeners[id].subscribed = true;
        }

        const onUnsubscribe = () => {
            if (this.listeners[id].event.subs.size > 0) return;

            const t = setTimeout(() => {
                if (
                    this.listeners[id].event.subs.size > 0 ||
                    !this.listeners[id].subscribed
                ) return;

                this.socket.emit('unsubscribe', id);
                this.listeners[id].subscribed = false;

                clearTimeout(t);
            }, 5000)
        }

        this.listeners[id] = {
            event: new Event<T>({ onSubscribe, onUnsubscribe }),
            subscribed: false
        };

        return this.listeners[id].event;
    }

    public static Get<T>(id: string): Event<T> {
        let listener = this.listeners[id];
        return listener ? listener.event : this.Register<T>(id);
    }

    public static Setup() {
        this.socket.on('notify', (id, data) => {
            const listener = this.listeners[id];
            if (!listener) return;

            listener.event.notify(data);
        })
    }

}

export default EventsManager;