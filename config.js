const CONFIG = {

    name: "Jenifar",
    coupleName: "JB",
    birthDate: "2002-03-12T00:00:00+05:30",
    pin: "1201",
    videoCallLink: "https://meet.google.com/xxx-xxxx-xxx",
    puzzleImage: "puzzil.jpg",
    audioFile: "song1.mp3",

    login: {
        title: "Hi Thangam ðŸ’™",
        subtitle: "Un 15-step Birthday Journey unlock pannalama? ðŸŽ",
        hint: "Namma secret PIN enter pannu ðŸ’™<br><span style='font-size:.78rem;opacity:.55;'>Hint: Namma special date ðŸ—“ï¸</span>",
        success: "Welcome ma ðŸ’™",
        error: "Idhu namma PIN illa di ðŸ˜œ"
    },

    mic: {
        magics: ['i love you', 'love you', 'loveyou', 'ily', 'thangam', 'hi', 'hai', 'hello', 'hey', 'i love u', 'love u', 'naan unnai kadhalikkiren', 'jenifar', 'jenny', 'chellam', 'babe', 'baby'],
        successMsg: "Nee sonna andha vaarthai enaku romba mukkiyam ðŸ¥¹ Naanum unna romba love panren Thangam ðŸ’™ Innum oru surprise iruku ðŸŽ",
        notSupported: "Mic support illa ðŸ˜” ðŸŽ¤ 10 thadava click panni continue pannu!",
        denied: "Mic permission kudukala ðŸ›‘ ðŸŽ¤ 10 thadava click pannu.",
        error: "Konjam error vandhuduchi ðŸ˜… Innum oru thadava try pannu illa ðŸŽ¤ 10 click pannu.",
        listening: "Kekuren maâ€¦ sollu ðŸ’™",
        stopped: "Stop aagiduchi. ðŸŽ¤ 10 click panni skip pannalaam."
    },

    final: {
        countdownMsg: ["Ready ah irukiyaâ€¦", "Konjam wait pannuuâ€¦", "Idhu unakkagaâ€¦"],
        hbdMsg: "ðŸ’™ Happy Birthday En Thangam ðŸ‘‘",
        subTitle: "HAPPY BIRTHDAY MA",
        ageLabel: "YEARS OF CUTENESS",
        message: "<b>En Uyir {NAME},</b><br><br>Un life un ishtapadi amaiyanum nu naan manasukulla daily pray panren. Nee enaku love mattum illaâ€¦ nee enaku strength, peace, motivation ellam dhaan.<br><br>Enna nadandhalum naan un kooda dhaan iruppen. Support pannuren. Protect pannuren. Love pannitu dhaan iruppen.<br><br>Indha Bharath oda life la nee dhaan biggest blessing. Forever un Thangam ðŸ’™",
        btnText: "Click to meet something interesting âœ¨"
    },

    steps: [

        {
            nav: 'tap',
            icon: 'ðŸ’™',
            title: 'Hi En Thangam ðŸ’™',
            txt: "Happy Birthday {NAME}! ðŸŽ‚\nIdhu just steps illa maâ€¦ namma story.\nBayam la start aagi forever varai pona love ðŸ’™",
            trick: "Screen ah tap pannu ðŸ‘†"
        },

        {
            nav: 'shake',
            icon: 'ðŸŽ‚',
            head: 'March 12, 2002 ðŸŒŸ',
            txt: "Indha naal la dhaan indha ulagathuku oru azhagana ponnu vandha.\nAparam konjam varushathuku apramâ€¦ en life la vandha ðŸ’™",
            liveAge: 'A',
            img: 'IMG20230312122458.jpg',
            trick: "Phone shake pannu ðŸ“³"
        },

        {
            nav: 'doubletap',
            icon: 'ðŸ‘€',
            head: 'College Days ðŸ“–',
            txt: "Same collegeâ€¦ same time.\nAana unakku en per kooda theriyadhu.\nNaan tholaivula irundhu paathutu irundhen ðŸ™ˆ",
            img: '1.jpg',
            trick: "Double tap pannu âœŒï¸"
        },

        {
            nav: 'swipeup',
            icon: 'ðŸ˜',
            head: 'Andha First Smile ðŸ˜',
            txt: "First time un smile paathaâ€¦\nEn heart sema fast ah beat aachu.\nAndha oru smile enaku romba special ðŸ¥¹",
            img: '2.jpg',
            trick: "Swipe up pannu â¬†ï¸"
        },

        {
            nav: 'longpress',
            icon: 'ðŸ“±',
            head: 'August 2021 â€“ First Hi ðŸ’™',
            txt: "August 2021â€¦ sema bayathula naan first 'Hi' anupinen.\nKai aadi pochu ma.\nReply pannuva nu kooda theriyala.\n\nAana nee reply panna momentâ€¦ naan romba happy.\nAndha small message en life la periya change ðŸ’™",
            img: 'IMG20230129154348.jpg',
            trick: "2 sec long press pannu ðŸ‘†"
        },

        {
            nav: 'swipeleft',
            icon: 'ðŸ’˜',
            head: 'First I Love You ðŸ’˜',
            txt: "Konjam naal pesina apramâ€¦ naan dhaan first love sonnen.\n'I love you.'\nEn heart sema beat.\nNee appo edhum sollala.\nAndha silence enaku bayama irundhudhu di.\nAana naan wait panna ready ah irundhen.",
            img: '4.jpg',
            trick: "Swipe left pannu â¬…ï¸"
        },

        {
            nav: 'tap3',
            icon: 'â³',
            head: 'Andha Oru Week ðŸ’”',
            txt: "First okay sonna.\nAana 1 week apram 'No' sonna.\nAndha week enaku romba kashtam.\nVelila kaamikalaâ€¦ aana ullae romba hurt aayiten.\nStillâ€¦ nee dhaan nu nambinen.",
            trick: "3 thadava tap pannu ðŸ‘†"
        },

        {
            nav: 'doubletap',
            icon: 'ðŸŽ‰',
            head: 'Dec 28, 2021 ðŸ’™',
            txt: "December 28, 2021.\nEn life la marakka mudiyadha naal.\nNee sonna â€” 'I love you Bharath.'\n\nAndha moment la en bayam ellam pochu.\nAndha naal la dhaan namma love official aachu Thangam ðŸ’™",
            img: '444.jpg',
            trick: "Double tap pannu âœŒï¸"
        },

        {
            nav: 'iloveyou',
            icon: 'ðŸŽ¤',
            head: 'Ippo Nee Sollu ðŸ’™',
            txt: "Ippo phone ah close ah pudichuâ€¦\nAndha 3 vaarthai sollu ma ðŸ¥¹",
            trick: "Say 'I Love You' illa ðŸŽ¤ 10 click pannu!"
        },

        {
            nav: 'pinch',
            icon: 'ðŸŽµ',
            head: 'Namma Song ðŸŽ¶',
            txt: "Indha song ketta udane enaku nee dhaan nyabagam varuva.\nIdhu namma feel ðŸ’™",
            music: true,
            trick: "Play panni pinch pannu ðŸŽµ"
        },

        {
            nav: 'spread',
            icon: 'âœˆï¸',
            head: 'Namma Future âœ¨',
            txt: "Enga ponaalum parava illa.\nNee kooda irundha podhum.\nEvery place paradise dhaan ðŸŒ",
            img: '3.jpg',
            trick: "Screen la fingers spread pannu ðŸ¤²"
        },

        {
            nav: 'tilt',
            icon: 'ðŸ¤©',
            head: 'Unna Love Panna Reason ðŸ’™',
            txt: "Un smile.\nUn heart.\nUn care.\nUn support.\nUn 'Thangam' nu koopdradhu.\nNee nee ah irukaradhu dhaan biggest reason â¤ï¸",
            img: '666.png',
            trick: "Phone left tilt pannu ðŸ“±"
        },

        {
            nav: 'rotate',
            icon: 'ðŸ’¼',
            head: 'Un Support ðŸ’™',
            txt: "College mudinju apram nee dhaan sonna IT job try pannu nu.\nNee nambina.\nAdhanala naan try pannen.\nInniku nalla job, nalla salary la iruken.\nIdhuku nee dhaan reason ma ðŸ’™",
            img: 'Picsart_26-01-16_22-59-05-218.jpg',
            trick: "Phone rotate pannu â†º"
        },

        {
            nav: 'twofingertap',
            icon: 'ðŸ§©',
            head: 'Namma Memory ðŸ§©',
            txt: "Puzzle maari namma love um piece by piece join aachu ðŸ’™",
            puzzle: true,
            trick: "All pieces correct ah place pannu — next step unlock aagum! 🧩"
        },

        {
            nav: 'meter',
            icon: 'ðŸ“Š',
            head: 'Love Meter ðŸ’™',
            txt: "Evalo love panra nu kaatu.\n100% vara slide pannu ðŸ˜Œ",
            trick: "100% ku slide pannu!"
        },

        {
            nav: 'finish',
            isFinish: true,
            trick: ''
        }

    ]
};
