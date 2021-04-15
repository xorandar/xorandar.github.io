var State = [
    {
        state: "main",
        tl: "inv",
        tr: "adv",
        bl: "adv", //supposed to be shop
        br: "quit"
    },
    {
        state: "adv",
        tl: "bat",
        tr: "adv",
        bl: "inv_adv",
        br: "main"
    },
    {
        state: "bat",
        tl: "attack",
        tr: "examineEn",
        bl: "inv_bat",
        br: "adv"
    },
    {
        state: "attack",
        tl: player.attack(),
        tr: "inv",
        bl: "inv",
        br: "main"
    },
    {
        state: "inv",
        tl: "inv",
        tr: "inv",
        bl: "inv",
        br: "main"
    },
    {
        state: "inv_adv",
        tl: "inv",
        tr: "inv",
        bl: "inv",
        br: "adv"
    },
    {
        state: "inv_bat",
        tl: "inv",
        tr: "inv",
        bl: "inv",
        br: "bat"
    },
    {
        state: "quit",
        tl: "exit",
        tr: "main"
    },
    {
        state: "start",
        tl: "inv",
        tr: "adv",
        bl: "adv",
        br: "quit"
    }
];


var dialogue = [
    {   
        label: "main", //obj id
        t: "Home", //text above game window
        m: "The choice in what to do next is yours:", //text in dialog box
        tl: "Inventory", //top left button text
        tr: "Adventure", //top right
        bl: "Shop", // bottom left
        br: "Quit", //bottom right
        col: "#336D39" //canvas color
    },
    {
        label: "adv", //obj id
        t: "Adventure", //text above game window
        m: "Will you seek out a battle?", //text in dialog box
        tl: "Accept", //top left button text
        tr: "Reject", //top right
        bl: "Inventory", // bottom left
        br: "Back to camp", //bottom right
        col: "#7F4200" //canvas color
    },
    {
        label: "bat", //obj id
        t: "Battle", //text above game window
        m: "Choose your course of action:", //text in dialog box
        tl: "Attack", //top left button text
        tr: "Examine", //top right
        bl: "Use Item", // bottom left
        br: "Flee", //bottom right
        col: "#B70011" //canvas color
    },
    {
        label: "inv", //obj id
        t: "Inventory", //text above game window
        m: "Use arrows to select items.", //text in dialog box
        tl: "Use", //top left button text
        tr: "Examine", //top right
        bl: "Destroy", // bottom left
        br: "Exit inventory", //bottom right
        col: "#D2C75B" //canvas color
    },
    {
        label: "inv_adv",
        t: "Inventory",
        m: "Use arrows to select items.", //text in dialog box
        tl: "Use", //top left button text
        tr: "Examine", //top right
        bl: "Destroy", // bottom left
        br: "Exit inventory", //bottom right
        col: "#D2C75B" //canvas color
    },
    {
        label: "inv_bat",
        t: "Inventory",
        m: "Use arrows to select items.", //text in dialog box
        tl: "Use", //top left button text
        tr: "Examine", //top right
        bl: "Destroy", // bottom left
        br: "Exit inventory", //bottom right
        col: "#D2C75B" //canvas color
    },
    {
        label: "quit", //obj id
        t: "Quit?", //text above game window
        m: "Do you really want to quit?", //text in dialog box
        tl: "Yes", //top left button text
        tr: "No", //top right
        bl: " --- ", // bottom left
        br: " --- ", //bottom right
        col: "#111111" //canvas color
    },
    {
        label: "start",
        t: "Home", //text above game window
        m: "The choice in what to do next is yours:", //text in dialog box
        tl: "Inventory", //top left button text
        tr: "Adventure", //top right
        bl: "Shop", // bottom left
        br: "Quit", //bottom right
        col: "#336D39" //canvas color
    }
];