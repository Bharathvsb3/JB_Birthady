const CONFIG = {

    name: "Jenifar",
    coupleName: "JB",
    birthDate: "2002-03-12T00:00:00+05:30",
    pin: "1201",
    videoCallLink: "https://call.whatsapp.com/video/nPRKjNrtp9bj97hTt4xMbQ",
    puzzleImage: "puzzil.jpg",
    audioFile: "song1.aac",
    loadingMinTimeMs: 20000, // minimum loading time in ms

    login: {
        title: "Hi Thangam 💙",
        subtitle: "Birthday Journey unlock pannalama? 🎁",
        hint: "Namma secret PIN enter pannu 💙<br><span style='font-size:.78rem;opacity:.55;'>Hint: Namma special date 🗓️</span>",
        success: "Welcome di 💙",
        error: "Idhu namma PIN illa di vennamavalee😜"
    },

    mic: {
        magics: ['i love you', 'love you', 'loveyou', 'thangam', 'i love u', 'love u', 'naan unnai kadhalikkiren'],
        successMsg: "Eee😁 Love you too 🥹 Innum oru surprise iruku 🎁",
        notSupported: "Mic support illa 😔 🎤 10 thadava click panni continue pannu!",
        denied: "Mic permission kudukala 🛑 🎤 10 thadava click pannu.",
        error: "Konjam error vandhuduchi 😅 Innum oru thadava try pannu illa 🎤 10 click pannu.",
        listening: "Kekuren ma… sollu 💙",
        stopped: "Stop aagiduchi. 🎤 10 click panni skip pannalaam."
    },

    final: {
        countdownMsg: ["Ready ah irukiya…", "Konjam wait pannuu…", "Idhu unakkaga…"],
        hbdMsg: "💙 Happy Birthday En Thangam 👑",
        subTitle: "HAPPY BIRTHDAY JENIFARUUUU",
        ageLabel: "YEARS OF CUTENESS",
        message: "<b>En chellam {NAME},</b><br><br>Un life un ishtapadi amaiyanum. Nee enaku romba importent. <br><br>Enna nadandhalum naan un kooda dhaan iruppen. Support panni, protect panni, love pannitu dhaan iruppen.<br><br>Forever un Thangam 💙",
        btnText: "Tap to meet something interesting ✨"
    },

    steps: [

        {
            nav: 'tap',
            icon: '💙',
            title: 'Hi En Thangam 💙',
            txt: "Happy Birthday {NAME}! 🎂\nIdhu just steps illa ma… namma story.\nBayam la start aagi forever vara pona love 💙",
            trick: "Screen ah tap pannu 👆"
        },

        {
            nav: 'shake',
            icon: '🎂',
            head: 'March 12, 2002 🌟',
            txt: "Indha naal la dhaan indha ulagathuku oru azhagana ponnu vandha.\nAparam konjam varushathuku apram… en life la vandha 💙",
            liveAge: 'A',
            img: 'Babyjeni.png',
            trick: "Phone shake pannu di📳"
        },

        {
            nav: 'doubletap',
            icon: '👀',
            head: 'College Days 📖',
            txt: "Same college… same time.\nAana unakku en per kooda theriyadhu.\n Nanum unna pakkala but 2021 la en focus un mela vandhuchi. Naan tholaivula irundhu paathutu irundhen 🙈",
            img: '1.jpg',
            trick: "Double tap pannu ma✌️"
        },

        {
            nav: 'swipeup',
            icon: '😍',
            head: 'Andha First Smile 😍',
            txt: "First time un smile paatha…\nEn heart sema fast ah beat aachu.\nAndha oru smile enaku romba special 🥹",
            img: '2.jpg',
            trick: "Swipe up pannu ⬆️"
        },

        {
            nav: 'longpress',
            icon: '📱',
            head: 'October 24, 2020 – First Hi 💙',
            txt: "October 24, 2020… sema bayathula naan first 'Hi' anupinen.\nKai aadi pochu. Nee enna pathi enna nenaipanu kuda theriyala but msg pannitan.\n\nAana nee reply panna moment… naan romba happy.💙",
            img: 'Firsthi.jpg',
            trick: "2 sec long press pannu 👆"
        },

        {
            nav: 'swipeleft',
            icon: '💘',
            head: 'First I Love You 💘',
            txt: "Konjam naal pesina apram… naan dhaan first love ahh sonnen.\n'❤️‍🔥I love you❤️‍🔥'\nEn heart sema beat.\nNee appo prank pannuranu nenicha nanum samalichan.\nAndha silence enaku bayama irundhudhu di.\nAana naan wait panna unakaga.",
            img: 'iloveyou.jpg',
            trick: "Swipe left pannu ⬅️"
        },

        {
            nav: 'tap3',
            icon: '⏳',
            head: 'Andha Oru Week 💔',
            txt: "First okay sonna.\nAana 1 week apram 'No' sonna.\nAndha week enaku romba kashtama irundhadhu.\nStill… nee dhaan nu nambinen.",
            trick: "3 thadava tap pannu 👆"
        },

        {
            nav: 'doubletap',
            icon: '🎉',
            head: 'Dec 28, 2021 💙',
            txt: "December 28, 2021.\nEn life la marakka mudiyadha naal.\nNee sonna — '❤️Bharath love you too ma.'\n\nAndha moment la en bayam ellam pochu.\nAndha naal la dhaan namma love official aachu Thangam 💙",
            img: 'toomsgj.jpg',
            trick: "Double tap pannu ✌️"
        },

        {
            nav: 'iloveyou',
            icon: '🎤',
            head: 'Ippo Nee Sollu 💙',
            txt: "Ippo phone ah close ah pudichu…\nAndha 3 vaarthai sollu di 😁",
            trick: "Say 'I Love You' "
        },

        {
            nav: 'pinch',
            icon: '🎵',
            head: 'Namma Song 🎶',
            txt: "Indha song ketta udane enaku nee dhaan nyabagam varuva.\n edha play panni kelu unaku pudikum nu namburan. \nEdha play panna 🎵 click pannu play aagum di. 💙",
            music: true,
            trick: "Play panni pinch🤏 pannu 🎵"
        },

        {
            nav: 'spread',
            icon: '✈️',
            head: 'Namma Future ✨',
            txt: "Enga ponaalum parava illa.\nNee kooda irundha podhum.\nEvery place paradise dhaan 🌍. Nee nenaikura mari illadi nanu. \nNee sollura ellam kekkuran but enaku theriyala aadha eppadi project pannuradhuuu.\n Ne venum aadhuku na enna effort pottalum aadhu edhachum problem vandhu mudinjidudhu. \n But onnu ennala mudinjavara vidama effort poduvan.",
            img: '3.jpg',
            trick: "Screen la fingers spread pannu 🤲"
        },

        {
            nav: 'tilt',
            icon: '🤩',
            head: 'Unna Love Panna Reason 💙',
            txt: "Un smile.\nUn heart.\nUn care.\nUn support.\nUn 'Thangam' nu koopdradhu.\nNee nee ah irukaradhu dhaan biggest reason ❤️",
            img: '666.png',
            trick: "Phone left tilt pannu 📱"
        },

        {
            nav: 'rotate',
            icon: '💼',
            head: 'Un Support 💙',
            txt: "College mudinju apram nee dhaan sonna IT job try pannu nu.\nNee nambina.\nAdhanala naan try pannen.\nInniku nalla job, nalla salary la iruken.\nIdhuku nee dhaan reason ma 💙. \nBut nee enna nambu na eppadiyavadhu nee expect pannura mari oru nalla possion ku varuvan. \nNaan en mela confidence illama irukura nerathula nee en mela confidence vechi enaku support ahh erudi.",
            img: 'Picsart_26-01-16_22-59-05-218.jpg',
            trick: "Phone 90 degree rotate pannitu, thirumba straight ah veyyi ↺ illa na 90 degree laye vechipa 😄"
        },
        {
            nav: 'twofingertap',
            icon: '🧩',
            head: 'Namma Memory 🧩',
            txt: "Puzzle maari namma love um piece by piece join aachu 💙",
            puzzle: true,
            trick: "All pieces correct ah place pannu, next step unlock aagum! 🧩"
        },

        {
            nav: 'meter',
            icon: '📊',
            head: 'Love Meter 💙',
            txt: "Evalo love panra nu kaatu.\n100% vara slide pannu 😌",
            trick: "100% ku slide pannu!"
        },

        {
            nav: 'album',
            icon: '📸',
            head: 'Namma Memories 💖',
            txt: "Namma spend panna azhagana moments ah paaru! Scroll panniko. Mudichutu mela iruka Next poga click pannu 👆✨",
            media: [
                { type: 'img', src: 'Babyjeni.png' },
                { type: 'img', src: 'Jwhiteimage.png' },
                { type: 'img', src: '4.jpg' },
                { type: 'img', src: '444.jpg' },
                { type: 'img', src: 'startpropsel.jpg' },
                { type: 'img', src: 'IMG-20221201-WA0044.jpg' },
                { type: 'img', src: 'IMG-20221203-WA0007.jpg' },
                { type: 'img', src: 'IMG-20211019-WA0005.jpg' },
                { type: 'img', src: 'IMG-20220216-WA0006.jpg' },
                { type: 'img', src: 'IMG-20220515-WA0007.jpg' },
                { type: 'img', src: 'IMG-20220610-WA0004.jpg' },
                { type: 'img', src: 'IMG-20220614-WA0001.jpg' },
                { type: 'img', src: 'P-IMG-20221224-WA0002.jpg' },
                { type: 'img', src: 'IMG-20221201-WA0012.jpg' },
                { type: 'img', src: 'IMG20220709112148.jpg' },
                { type: 'img', src: 'IMG20230129154348.jpg' },
                { type: 'img', src: 'IMG_20221010_231141.jpg' },
                { type: 'img', src: 'IMG_20230312_114403.jpg' },
                { type: 'img', src: 'IMG_20230312_122252.jpg' },
                { type: 'img', src: 'IMG20230312122458.jpg' },
                { type: 'img', src: 'Picsart_22-11-25_23-27-43-512.jpg' },
                { type: 'img', src: 'Picsart_23-01-29_23-11-00-462.jpg' },
                { type: 'img', src: 'Snapchat-1970939386.jpg' },
                { type: 'img', src: 'Snapchat-996654878.jpg' },
                { type: 'vid', src: 'Snapchat-1548734568.mp4' },
                { type: 'vid', src: 'VID-20220716-WA0017.mp4' },
                { type: 'vid', src: 'VID-20220717-WA0048.mp4' },
                { type: 'vid', src: 'VID-20220806-WA0022.mp4' },
                { type: 'vid', src: 'VID-20220817-WA0002.mp4' },
                { type: 'vid', src: 'VID-20220916-WA0007.mp4' },
                { type: 'vid', src: 'VID-20221016-WA0013.mp4' },
                { type: 'vid', src: 'VID-20230104-WA0000.mp4' },
                { type: 'vid', src: 'VID-20230108-WA0003.mp4' },
                { type: 'vid', src: 'VID-20230114-WA0016.mp4' },
                { type: 'vid', src: 'VID-20230121-WA0005.mp4' },
                { type: 'vid', src: 'VID-20230121-WA0006.mp4' },
                { type: 'vid', src: 'VID-l0qpeku8.mp4' }
            ]
        },

        {
            nav: 'finish',
            isFinish: true,
            trick: ''
        }

    ]
};
