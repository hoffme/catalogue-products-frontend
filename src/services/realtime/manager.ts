import Event from './events';

import Realtime from "./index";

class EventsManager {

    private static readonly events: { [key:string]: Event<any> } = {}

    private static Register<T>(id: string): Event<T> {
        this.events[id] = new Event<T>({
            onSubscribe: () => {
                if (this.events[id].subs.size !== 1) return;
                Realtime.socket.emit('subscribe', id);

                console.log('sub', id);
            },
            onUnsubscribe: () => {
                if (this.events[id].subs.size === 0) return;
                Realtime.socket.emit('unsubscribe', id);

                console.log('usub', id);
            }
        });

        return this.events[id];
    }

    public static Get<T>(id: string) {
        let event = this.events[id];
        if (!event) event = this.Register<T>(id);
        return event;
    }

    public static Setup() {
        Realtime.socket.on('notify', (id, data) => {
            const event = this.events[id];
            if (!event) return;

            event.notify(data);
        })
    }

}

export default EventsManager;