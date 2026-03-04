const CONFIG = {

    name: "Jenifar",
    coupleName: "JB",
    birthDate: "2002-03-12T00:00:00+05:30",
    pin: "1201",
    videoCallLink: "https://meet.google.com/xxx-xxxx-xxx",
    puzzleImage: "puzzil.jpg",
    audioFile: "song1.mp3",

    login: {
        title: "Hi Thangam 💙",
        subtitle: "Un 15-step Birthday Journey unlock pannalama? 🎁",
        hint: "Namma secret PIN enter pannu 💙<br><span style='font-size:.78rem;opacity:.55;'>Hint: Namma special date 🗓️</span>",
        success: "Welcome ma 💙",
        error: "Idhu namma PIN illa di 😜"
    },

    mic: {
        magics: ['i love you', 'love you', 'loveyou', 'ily', 'thangam', 'hi', 'hai', 'hello', 'hey', 'i love u', 'love u', 'naan unnai kadhalikkiren', 'jenifar', 'jenny', 'chellam', 'babe', 'baby'],
        successMsg: "Nee sonna andha vaarthai enaku romba mukkiyam 🥹 Naanum unna romba love panren Thangam 💙 Innum oru surprise iruku 🎁",
        notSupported: "Mic support illa 😔 🎤 10 thadava click panni continue pannu!",
        denied: "Mic permission kudukala 🛑 🎤 10 thadava click pannu.",
        error: "Konjam error vandhuduchi 😅 Innum oru thadava try pannu illa 🎤 10 click pannu.",
        listening: "Kekuren ma… sollu 💙",
        stopped: "Stop aagiduchi. 🎤 10 click panni skip pannalaam."
    },

    final: {
        countdownMsg: ["Ready ah irukiya…", "Konjam wait pannuu…", "Idhu unakkaga…"],
        hbdMsg: "💙 Happy Birthday En Thangam 👑",
        subTitle: "HAPPY BIRTHDAY MA",
        ageLabel: "YEARS OF CUTENESS",
        message: "<b>En Uyir {NAME},</b><br><br>Un life un ishtapadi amaiyanum nu naan manasukulla daily pray panren. Nee enaku love mattum illa… nee enaku strength, peace, motivation ellam dhaan.<br><br>Enna nadandhalum naan un kooda dhaan iruppen. Support pannuren. Protect pannuren. Love pannitu dhaan iruppen.<br><br>Indha Bharath oda life la nee dhaan biggest blessing. Forever un Thangam 💙",
        btnText: "Click to meet something interesting ✨"
    },

    steps: [

        {
            nav: 'tap',
            icon: '💙',
            title: 'Hi En Thangam 💙',
            txt: "Happy Birthday {NAME}! 🎂\nIdhu just steps illa ma… namma story.\nBayam la start aagi forever varai pona love 💙",
            trick: "Screen ah tap pannu 👆"
        },

        {
            nav: 'shake',
            icon: '🎂',
            head: 'March 12, 2002 🌟',
            txt: "Indha naal la dhaan indha ulagathuku oru azhagana ponnu vandha.\nAparam konjam varushathuku apram… en life la vandha 💙",
            liveAge: 'A',
            img: 'IMG20230312122458.jpg',
            trick: "Phone shake pannu 📳"
        },

        {
            nav: 'doubletap',
            icon: '👀',
            head: 'College Days 📖',
            txt: "Same college… same time.\nAana unakku en per kooda theriyadhu.\nNaan tholaivula irundhu paathutu irundhen 🙈",
            img: '1.jpg',
            trick: "Double tap pannu ✌️"
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
            head: 'August 2021 – First Hi 💙',
            txt: "August 2021… sema bayathula naan first 'Hi' anupinen.\nKai aadi pochu ma.\nReply pannuva nu kooda theriyala.\n\nAana nee reply panna moment… naan romba happy.\nAndha small message en life la periya change 💙",
            img: 'IMG20230129154348.jpg',
            trick: "2 sec long press pannu 👆"
        },

        {
            nav: 'swipeleft',
            icon: '💘',
            head: 'First I Love You 💘',
            txt: "Konjam naal pesina apram… naan dhaan first love sonnen.\n'I love you.'\nEn heart sema beat.\nNee appo edhum sollala.\nAndha silence enaku bayama irundhudhu di.\nAana naan wait panna ready ah irundhen.",
            img: '4.jpg',
            trick: "Swipe left pannu ⬅️"
        },

        {
            nav: 'tap3',
            icon: '⏳',
            head: 'Andha Oru Week 💔',
            txt: "First okay sonna.\nAana 1 week apram 'No' sonna.\nAndha week enaku romba kashtam.\nVelila kaamikala… aana ullae romba hurt aayiten.\nStill… nee dhaan nu nambinen.",
            trick: "3 thadava tap pannu 👆"
        },

        {
            nav: 'doubletap',
            icon: '🎉',
            head: 'Dec 28, 2021 💙',
            txt: "December 28, 2021.\nEn life la marakka mudiyadha naal.\nNee sonna — 'I love you Bharath.'\n\nAndha moment la en bayam ellam pochu.\nAndha naal la dhaan namma love official aachu Thangam 💙",
            img: '444.jpg',
            trick: "Double tap pannu ✌️"
        },

        {
            nav: 'iloveyou',
            icon: '🎤',
            head: 'Ippo Nee Sollu 💙',
            txt: "Ippo phone ah close ah pudichu…\nAndha 3 vaarthai sollu ma 🥹",
            trick: "Say 'I Love You' illa 🎤 10 click pannu!"
        },

        {
            nav: 'pinch',
            icon: '🎵',
            head: 'Namma Song 🎶',
            txt: "Indha song ketta udane enaku nee dhaan nyabagam varuva.\nIdhu namma feel 💙",
            music: true,
            trick: "Play panni pinch pannu 🎵"
        },

        {
            nav: 'spread',
            icon: '✈️',
            head: 'Namma Future ✨',
            txt: "Enga ponaalum parava illa.\nNee kooda irundha podhum.\nEvery place paradise dhaan 🌍",
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
            txt: "College mudinju apram nee dhaan sonna IT job try pannu nu.\nNee nambina.\nAdhanala naan try pannen.\nInniku nalla job, nalla salary la iruken.\nIdhuku nee dhaan reason ma 💙",
            img: 'Picsart_26-01-16_22-59-05-218.jpg',
            trick: "Phone rotate pannu ↺"
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
            nav: 'finish',
            isFinish: true,
            trick: ''
        }

    ]
};
