export interface LandingHeader {
    linkId: string;
    linkAction: string;
    context: string;
  }

export const landingHeaderType: { [key: string]: LandingHeader[] } = {
main: [
    {
        linkId: 'main_link',
        linkAction: 'aboutChurch',
        context: 'aboutChurch'
    },
    {
        linkId: 'events_link',
        linkAction: 'eventsCalandar',
        context: 'eventsCalandar',
    },
    {
        linkId: 'broadcasts_link',
        linkAction: 'broadcasts',
        context: 'broadcasts',
    },
    {
        linkId: 'ministries_link',
        linkAction: 'ministries',
        context: 'ministries',
    },
    {
        linkId: 'donation_link',
        linkAction: 'donation',
        context: 'donation',
    },
    {
        linkId: 'contacts_link',
        linkAction: 'contacts',
        context: 'contacts',
    },
],
camp: [
    {
        linkId: 'main_link',
        linkAction: 'main',
        context: 'mainPage'
    },
    {
        linkId: 'aboutUs_link',
        linkAction: 'cap',
        context: 'aboutUs'
    },
    {
        linkId: 'history_link',
        linkAction: 'history',
        context: 'campPlace'
    },
    {
        linkId: 'projects_link',
        linkAction: 'projects',
        context: 'projects'
    },
]
};
