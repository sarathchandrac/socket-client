import { Component } from "@angular/core";
import { WebSocketSubject } from "rxjs/observable/dom/WebSocketSubject";

export class Message {
    constructor(
        public sender: string,
        public content: string,
        public isBroadcast = false
    ) {}
}

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"]
})
export class AppComponent {
    title = "socket-client";
    private socket$: WebSocketSubject<Message>;

    constructor() {
        this.socket$ = new WebSocketSubject("ws://localhost:11500");
        console.log("subscribing the socket ---> ");

        this.socket$.subscribe(
            message => {
                console.log("sending message ---> ", message);
                // this.serverMessages.push(message) && this.scroll();
            },
            err => console.error(err),
            () => console.warn("Completed!")
        );
    }
}
