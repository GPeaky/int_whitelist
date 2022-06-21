const GetIdentifiers = async(src) => {
    try {
        let identifiers = { license: 'none', steam: 'none', live: 'none', xbl: 'none', discord: 'none', tokens: [] } 
        let count = GetNumPlayerIdentifiers(src);

        for (let i = 0; i < count; i++) {
            let id = GetPlayerIdentifier(src, i);
            identifiers[id.split(':')[0]] = id.split(':')[1]
        }

        let tokens = GetNumPlayerTokens(src)
        if (tokens) {
            for (let i = 0; i < tokens; i++) {
                let token = GetPlayerToken(src, i)
                identifiers.tokens.push(token)
            }
        }

        return identifiers
    } catch (e) {
        console.log(`[FiveEye]: Error on GetIdentifiers: ${e}`)
    }
}