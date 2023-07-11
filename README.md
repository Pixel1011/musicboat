# Music boat  

### What is this bot?

- This bot is being made in response to google being a nice company and shutting down popular music bots (such as Groovy and Rythm. o7)
- Google will probably be going after more popular bots so i have decided to take this approach to allow people to setup their own bots with no need for me to run servers (because i assume google wont send a cease and desist to every person who runs this)
- Still haven't decided on a good name for it but it will be a open source bot with easy instructions and some sort of installer/program to setup and run the bot quickly and easily. Along with this, the bot will be highly customizable but will come with a default setup
- Should be able to run on Windows and Linux (I don't own a Mac so i'm sorry and the installer program wont work on linux)

### Setup:
- will come soon.
- (note if you attempt to build this and find it doesnt work, its due to added values to index.d.ts from lavaclient to the player class)
    ```ts
    import { Queue } from '../../../utils/queue';
    import { InactiveStriker } from '../../../Structures/Song';
       loop?: boolean;
       queueLoop?: boolean;
       queue?: Queue;
       skips?: Array<string>;
       eventsCreated?: boolean;
       striker?: InactiveStriker;
    ```