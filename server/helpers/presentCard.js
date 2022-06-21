const presentCard = (name) => ({
    "type": "AdaptiveCard",
    "body": [
        {
            "type": "Container",
            "items": [
                {
                    "type": "TextBlock",
                    "text": "Whitelist",
                    "wrap": true,
                    "size": "ExtraLarge",
                    "fontType": "Default",
                    "horizontalAlignment": "Center",
                    "separator": true,
                    "weight": "Bolder"
                },
                {
                    "type": "TextBlock",
                    "text": `Welcome to the server: ${ name }`,
                    "wrap": true,
                    "horizontalAlignment": "Center"
                },
                {
                    "type": "TextBlock",
                    "text": `Checking Your Whitelist.`,
                    "wrap": true,
                    "horizontalAlignment": "Center",
                    "fontType": "Default",
                    "size": "Medium"
                }
            ]
        },
        {
            "type": "Image",
            "url": config.server.logo,
            "horizontalAlignment": "Center",
            "selectAction": {
                "url": config.server.url,
                "type": "Action.OpenUrl",
                "title": config.server.name,
            }
        }
    ],

    "version": "1.0.0",
    "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
    "backgroundImage": {
        "horizontalAlignment": "Center",
        "url": config.backgroud
    },

    "selectAction": {
        "type": "Action.OpenUrl",
        "title": config.server.name,
        "url": config.server.url
    }
})