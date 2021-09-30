const products = {
    //app-nivå ting
    app: {
        currentPage: 'Home',
        loggedInUser: 'User'
    },

    //inputfelter til hver side
    login: {

        username: "username",
        password: "password",

    },


    //felles data
    categories: [
        { id: 1, name: ` Møbler ` },
        { id: 2, name: ` Stoler `, parentId: 1 },
        { id: 3, name: ` Bord `, parentId: 1 },
        { id: 4, name: ` Kommoder `, parentId: 1 },
        { id: 5, name: ` Hyller `, parentId: 1 },
        { id: 10, name: ` klær og tilbehør ` },
        { id: 12, name: ` kjoler `, parentId: 10 },
        { id: 13, name: ` bukser `, parentId: 10 },
        { id: 14, name: ` skjørt `, parentId: 10 },
        { id: 15, name: ` jakker `, parentId: 10 },
        { id: 16, name: ` kåper `, parentId: 10 },
        { id: 17, name: ` sko `, parentId: 10 },
        { id: 18, name: ` vesker `, parentId: 10 },
        { id: 19, name: ` smykker `, parentId: 10 },
        { id: 21, name: ` Småting ` },
        { id: 32, name: ` boller `, parentId: 21 },
        { id: 33, name: ` vaser `, parentId: 21 },
        { id: 34, name: ` lamper `, parentId: 21 },
        { id: 35, name: ` servise `, parentId: 21 },
        { id: 36, name: ` krukker `, parentId: 21 },
        { id: 37, name: ` fat `, parentId: 21 }
    ],




    product: [
        {
            name: "Antikk Sofa",
            img: "dj steve 1 (5).jpg",
            tag: "antikksofa",
            price: 15000,
            desc: `Komfortabel sofa`,
            inCart: 0,

        },
        {
            name: "Stol I Stoff",
            img: "dj steve 1 (19).jpeg",
            tag: "stolistoff",
            price: 20000,
            desc: `Fin og komfortabel sofa`,
            inCart: 0,
        },
        {
            name: "Sofa Antikk",
            img: "dj steve 1 (20).png",
            tag: `sofaantikk`,
            price: 4000,
            desc: `Komfortabel lenestol`,
            inCart: 0
        },
        {
            name: "Stol I Sofa",
            img: "dj steve 1 (9).jpg",
            tag: "stolisofa",
            price: 7000,
            desc: `Fin og komfortabel sofa`,
            inCart: 0,
        },


    ],
};

