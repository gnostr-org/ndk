import "websocket-polyfill";
import NDK from "@nostr-dev-kit/ndk";

const ndk = new NDK({
    explicitRelayUrls: [
        "wss://relay.damus.io",
        "wss://nos.lol",
    ],
    enableOutboxModel: false,
});

await ndk.connect(6000);

setInterval(async () =>  {

    const a = await ndk.subscribe(

        { kinds:[1], authors:["a34b99f22c790c4e36b2b3c2c35a36db06226e41c692fc82b8b56ac1c540c5bd"]},
        { closeOnEose: true }

    );

    a.on("event", (event) => console.log(``, event.id, event.content));
    a.on("eose", () => console.log(`received eose on a`));

},10000);
