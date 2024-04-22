function init_intercity() {
    intercity_config = {
        intercity_goods: console._storage.get(console._halo_intercity_id('intercity-goods')),
        crosscity_goods: console._storage.get(console._halo_intercity_id('crosscity-goods')),

        refresh_on : Number(console._storage.get(console._halo_intercity_id('refresh-on'))),
        refresh_off : Number(console._storage.get(console._halo_intercity_id('refresh-off'))),

        today : console._storage.get(console._halo_intercity_id('today')),
        tomorrow : console._storage.get(console._halo_intercity_id('tomorrow')),
        after_tomorrow : console._storage.get(console._halo_intercity_id('after-tomorrow')),

        time_on: console._storage.get(console._halo_intercity_id('time-on')),
        time_off: console._storage.get(console._halo_intercity_id('time-off')),

        money_min : Number(console._storage.get(console._halo_intercity_id('money-min'))),
        money_max : Number(console._storage.get(console._halo_intercity_id('money-max'))),

        starting_point : Number(console._storage.get(console._halo_intercity_id('starting-point'))),

        exclusive : {
            state: console._storage.get(console._halo_intercity_id('exclusive')),
            people_min: Number(console._storage.get(console._halo_intercity_id('people-exclusive-min'))),
            people_max: Number(console._storage.get(console._halo_intercity_id('people-exclusive-max')))
        },
        carpooling: {
            state: console._storage.get(console._halo_intercity_id('carpooling')),
            people_min: Number(console._storage.get(console._halo_intercity_id('people-carpooling-min'))),
            people_max: Number(console._storage.get(console._halo_intercity_id('people-carpooling-max')))
        },
        // on_theway_percentage : Number(console._storage.get(console._halo_intercity_id('on-theway-percentage'))),
        // end_point : Number(console._storage.get(console._halo_intercity_id('end-point'))),

    }
    console.log(intercity_config)
}