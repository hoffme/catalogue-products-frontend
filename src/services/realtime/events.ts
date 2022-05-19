type CallBack<P> = (p: P) => Promise<void> | void

class Subscription<V> {

    private readonly event: Event<V>;
    public callback: CallBack<V>;
    public order: number;

    constructor(event: Event<V>, callback: CallBack<V>, order: number) {
        this.event = event;
        this.order = order;
        this.callback = callback;
    }

    public unsubscribe() {
        this.event.unsubscribe(this);
    }
}

interface Options<V> {
    onSubscribe?: (s: Subscription<V>) => void
    onUnsubscribe?: (s: Subscription<V>) => void
}

class Event<V> {

    public readonly options: Options<V>;
    public readonly subs = new Set<Subscription<V>>();

    constructor(options: Options<V> = {}) { this.options = options }

    public notify(value: V) {
        const subscriptions = Array.from(this.subs.values());
        const ordersListeners = subscriptions.sort((a, b) => {
            return a.order - b.order;
        });

        Promise.all(ordersListeners.map(l => l.callback(value)))
            .catch(console.error)
    }

    public subscribe(callback: CallBack<V>, order: number = 0): Subscription<V> {
        const subscription = new Subscription(this, callback, order);
        this.subs.add(subscription);
        this.options.onSubscribe?.(subscription);
        return subscription;
    }

    public unsubscribe(subscription: Subscription<V>) {
        this.subs.delete(subscription);
        this.options.onUnsubscribe?.(subscription);
    }
}

export default Event;
export type {
    Subscription
}