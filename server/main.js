sequelize.sync()

on('playerConnecting', async (name, setKickReason, deferrals) => {
    const src = source
    const playerIp = GetPlayerEndpoint(src)
    const identifiers = await GetIdentifiers(src)

    deferrals.defer()
    setInterval(() => deferrals.presentCard( presentCard(name) ), 500)

    setTimeout(async () => {
        const whitelist = await Whitelist.findOne({
            where: {
                identifier: identifiers.steam
            }
        })

        if ( !whitelist ) return deferrals.done('You are not whitelisted.')

        if ( !whitelist.dataValues.ip ) {
            await whitelist.update({
                ip: playerIp
            })
            deferrals.done()
        }

        if ( whitelist.dataValues.ip !== playerIp ) return deferrals.done('You changed your ip.')

        deferrals.done()
    }, 2000)
})