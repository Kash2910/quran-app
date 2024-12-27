const surahs = [
    {
      "surahNumber": 1,
      "arabicName": "الفاتحة",
      "englishName": "Al-Fatihah",
      "origin": "Makki",
      "englishMeaning": "The Opening",
      "numberOfVerses": 7,
      "description": "Emphasizes Allah’s mercy and guidance; recited in every prayer."
    },
    {
      "surahNumber": 2,
      "arabicName": "البقرة",
      "englishName": "Al-Baqarah",
      "origin": "Madani",
      "englishMeaning": "The Cow",
      "numberOfVerses": 286,
      "description": "Longest surah; covers faith, law, and stories of prophets like Adam and Moses."
    },
    {
      "surahNumber": 3,
      "arabicName": "آل عمران",
      "englishName": "Al-Imran",
      "origin": "Madani",
      "englishMeaning": "The Family of Imran",
      "numberOfVerses": 200,
      "description": "Highlights family of Imran, emphasizes faith, unity, and the story of Jesus and Mary."
    },
    {
      "surahNumber": 4,
      "arabicName": "النساء",
      "englishName": "An-Nisa",
      "origin": "Madani",
      "englishMeaning": "The Women",
      "numberOfVerses": 176,
      "description": "Details social laws, women’s rights, inheritance, and justice in society."
    },
    {
      "surahNumber": 5,
      "arabicName": "المائدة",
      "englishName": "Al-Ma'idah",
      "origin": "Madani",
      "englishMeaning": "The Table Spread",
      "numberOfVerses": 120,
      "description": "Discusses lawful foods, covenants, and mentions the disciples of Jesus."
    },
    {
      "surahNumber": 6,
      "arabicName": "الأنعام",
      "englishName": "Al-An'am",
      "origin": "Makki",
      "englishMeaning": "The Cattle",
      "numberOfVerses": 165,
      "description": "Focuses on monotheism, Allah’s signs in creation, and arguments against idolatry."
    },
    {
      "surahNumber": 7,
      "arabicName": "الأعراف",
      "englishName": "Al-A'raf",
      "origin": "Makki",
      "englishMeaning": "The Heights",
      "numberOfVerses": 206,
      "description": "Narratives of various prophets and the people on the Heights between Heaven and Hell."
    },
    {
      "surahNumber": 8,
      "arabicName": "الأنفال",
      "englishName": "Al-Anfal",
      "origin": "Madani",
      "englishMeaning": "The Spoils of War",
      "numberOfVerses": 75,
      "description": "Guidelines for warfare, distribution of spoils, and discipline among believers."
    },
    {
      "surahNumber": 9,
      "arabicName": "التوبة",
      "englishName": "At-Tawbah",
      "origin": "Madani",
      "englishMeaning": "The Repentance",
      "numberOfVerses": 129,
      "description": "Emphasizes repentance and exposes hypocrisy; sets rules for dealing with non-believers."
    },
    {
      "surahNumber": 10,
      "arabicName": "يونس",
      "englishName": "Yunus",
      "origin": "Makki",
      "englishMeaning": "Jonah",
      "numberOfVerses": 109,
      "description": "Encourages trust in Allah’s plan and highlights stories of past prophets."
    },
    {
      "surahNumber": 11,
      "arabicName": "هود",
      "englishName": "Hud",
      "origin": "Makki",
      "englishMeaning": "Hud",
      "numberOfVerses": 123,
      "description": "Narrates stories of prophets like Hud, Salih, and Ibrahim; emphasizes perseverance."
    },
    {
      "surahNumber": 12,
      "arabicName": "يوسف",
      "englishName": "Yusuf",
      "origin": "Makki",
      "englishMeaning": "Joseph",
      "numberOfVerses": 111,
      "description": "Relates the story of Prophet Yusuf (Joseph) as a lesson in patience and trust."
    },
    {
      "surahNumber": 13,
      "arabicName": "الرعد",
      "englishName": "Ar-Ra'd",
      "origin": "Madani",
      "englishMeaning": "The Thunder",
      "numberOfVerses": 43,
      "description": "Points to Allah’s power in nature; emphasizes the importance of truth and faith."
    },
    {
      "surahNumber": 14,
      "arabicName": "ابراهيم",
      "englishName": "Ibrahim",
      "origin": "Makki",
      "englishMeaning": "Abraham",
      "numberOfVerses": 52,
      "description": "Focuses on gratitude, divine guidance, and Prophet Ibrahim’s supplications."
    },
    {
      "surahNumber": 15,
      "arabicName": "الحجر",
      "englishName": "Al-Hijr",
      "origin": "Makki",
      "englishMeaning": "The Rocky Tract",
      "numberOfVerses": 99,
      "description": "Warns disbelievers; recounts the stories of the people of Hijr and Lot."
    },
    {
      "surahNumber": 16,
      "arabicName": "النحل",
      "englishName": "An-Nahl",
      "origin": "Makki",
      "englishMeaning": "The Bee",
      "numberOfVerses": 128,
      "description": "References Allah’s favors in nature and urges gratitude and righteousness."
    },
    {
      "surahNumber": 17,
      "arabicName": "الإسراء",
      "englishName": "Al-Isra",
      "origin": "Makki",
      "englishMeaning": "The Night Journey",
      "numberOfVerses": 111,
      "description": "Mentions Prophet Muhammad’s Night Journey; includes moral teachings and warnings."
    },
    {
      "surahNumber": 18,
      "arabicName": "الكهف",
      "englishName": "Al-Kahf",
      "origin": "Makki",
      "englishMeaning": "The Cave",
      "numberOfVerses": 110,
      "description": "Tells stories of the Companions of the Cave, Moses and Khidr, and Dhul-Qarnayn."
    },
    {
      "surahNumber": 19,
      "arabicName": "مريم",
      "englishName": "Maryam",
      "origin": "Makki",
      "englishMeaning": "Mary",
      "numberOfVerses": 98,
      "description": "Focuses on Prophet Zakariya, Mary, and Jesus’ miraculous birth."
    },
    {
      "surahNumber": 20,
      "arabicName": "طه",
      "englishName": "Ta-Ha",
      "origin": "Makki",
      "englishMeaning": "Ta-Ha",
      "numberOfVerses": 135,
      "description": "Highlights the story of Moses, emphasizes Allah’s guidance and mercy."
    },
    {
      "surahNumber": 21,
      "arabicName": "الأنبياء",
      "englishName": "Al-Anbiya",
      "origin": "Makki",
      "englishMeaning": "The Prophets",
      "numberOfVerses": 112,
      "description": "Narrates the missions of many prophets; underscores the oneness of Allah."
    },
    {
      "surahNumber": 22,
      "arabicName": "الحج",
      "englishName": "Al-Hajj",
      "origin": "Madani",
      "englishMeaning": "The Pilgrimage",
      "numberOfVerses": 78,
      "description": "Discusses the rites of pilgrimage (Hajj) and the unity of believers."
    },
    {
      "surahNumber": 23,
      "arabicName": "المؤمنون",
      "englishName": "Al-Mu’minun",
      "origin": "Makki",
      "englishMeaning": "The Believers",
      "numberOfVerses": 118,
      "description": "Describes the qualities of true believers; references prophets and accountability."
    },
    {
      "surahNumber": 24,
      "arabicName": "النور",
      "englishName": "An-Nur",
      "origin": "Madani",
      "englishMeaning": "The Light",
      "numberOfVerses": 64,
      "description": "Establishes moral and social laws; includes the famous ‘Light Verse’ (24:35)."
    },
    {
      "surahNumber": 25,
      "arabicName": "الفرقان",
      "englishName": "Al-Furqan",
      "origin": "Makki",
      "englishMeaning": "The Criterion",
      "numberOfVerses": 77,
      "description": "Differentiates truth from falsehood; portrays the righteous versus the disbelievers."
    },
    {
      "surahNumber": 26,
      "arabicName": "الشعراء",
      "englishName": "Ash-Shu'ara",
      "origin": "Makki",
      "englishMeaning": "The Poets",
      "numberOfVerses": 227,
      "description": "Recounts stories of past prophets; contrasts sincere faith with mere poetry/words."
    },
    {
      "surahNumber": 27,
      "arabicName": "النمل",
      "englishName": "An-Naml",
      "origin": "Makki",
      "englishMeaning": "The Ants",
      "numberOfVerses": 93,
      "description": "Focuses on Prophets Musa, Sulaiman, and the Queen of Sheba’s acceptance of faith."
    },
    {
      "surahNumber": 28,
      "arabicName": "القصص",
      "englishName": "Al-Qasas",
      "origin": "Makki",
      "englishMeaning": "The Stories",
      "numberOfVerses": 88,
      "description": "Narrates stories of Moses in detail, and emphasizes divine guidance over worldly power."
    },
    {
      "surahNumber": 29,
      "arabicName": "العنكبوت",
      "englishName": "Al-'Ankabut",
      "origin": "Makki",
      "englishMeaning": "The Spider",
      "numberOfVerses": 69,
      "description": "Addresses trials and perseverance in faith; compares false beliefs to a spider’s web."
    },
    {
      "surahNumber": 30,
      "arabicName": "الروم",
      "englishName": "Ar-Rum",
      "origin": "Makki",
      "englishMeaning": "The Romans",
      "numberOfVerses": 60,
      "description": "Mentions the defeat and future victory of Romans; points to Allah’s signs in creation."
    },
    {
      "surahNumber": 31,
      "arabicName": "لقمان",
      "englishName": "Luqman",
      "origin": "Makki",
      "englishMeaning": "Luqman",
      "numberOfVerses": 34,
      "description": "Highlights wise counsel given by Luqman to his son, stressing monotheism and morality."
    },
    {
      "surahNumber": 32,
      "arabicName": "السجدة",
      "englishName": "As-Sajdah",
      "origin": "Makki",
      "englishMeaning": "The Prostration",
      "numberOfVerses": 30,
      "description": "Encourages reflection on creation; mentions reward for those who prostrate to Allah."
    },
    {
      "surahNumber": 33,
      "arabicName": "الأحزاب",
      "englishName": "Al-Ahzab",
      "origin": "Madani",
      "englishMeaning": "The Combined Forces",
      "numberOfVerses": 73,
      "description": "Discusses the Battle of the Trench, social regulations, and the Prophet’s household."
    },
    {
      "surahNumber": 34,
      "arabicName": "سبإ",
      "englishName": "Saba",
      "origin": "Makki",
      "englishMeaning": "Sheba",
      "numberOfVerses": 54,
      "description": "Warns against ingratitude; recounts the blessings and downfall of the people of Sheba."
    },
    {
      "surahNumber": 35,
      "arabicName": "فاطر",
      "englishName": "Fatir",
      "origin": "Makki",
      "englishMeaning": "The Originator",
      "numberOfVerses": 45,
      "description": "Affirms Allah as the Creator; contrasts believers’ reward with the fate of disbelievers."
    },
    {
      "surahNumber": 36,
      "arabicName": "يس",
      "englishName": "Ya-Sin",
      "origin": "Makki",
      "englishMeaning": "Ya-Sin",
      "numberOfVerses": 83,
      "description": "Often called ‘the heart of the Quran’; emphasizes Allah’s power and the afterlife."
    },
    {
      "surahNumber": 37,
      "arabicName": "الصافات",
      "englishName": "As-Saffat",
      "origin": "Makki",
      "englishMeaning": "Those Ranged in Ranks",
      "numberOfVerses": 182,
      "description": "Praises Allah’s oneness; recounts stories of prophets including Ibrahim’s sacrifice."
    },
    {
      "surahNumber": 38,
      "arabicName": "ص",
      "englishName": "Sad",
      "origin": "Makki",
      "englishMeaning": "Sad",
      "numberOfVerses": 88,
      "description": "Mentions Prophet Dawud and Suleiman; warns against arrogance and denial of truth."
    },
    {
      "surahNumber": 39,
      "arabicName": "الزمر",
      "englishName": "Az-Zumar",
      "origin": "Makki",
      "englishMeaning": "The Groups",
      "numberOfVerses": 75,
      "description": "Stresses sincere worship; depicts the arrival of groups at Heaven or Hell."
    },
    {
      "surahNumber": 40,
      "arabicName": "غافر",
      "englishName": "Ghafir",
      "origin": "Makki",
      "englishMeaning": "The Forgiver",
      "numberOfVerses": 85,
      "description": "Also known as Al-Mu’min; highlights Allah’s forgiveness and warns of Pharaoh’s fate."
    },
    {
      "surahNumber": 41,
      "arabicName": "فصلت",
      "englishName": "Fussilat",
      "origin": "Makki",
      "englishMeaning": "Explained in Detail",
      "numberOfVerses": 54,
      "description": "Urges reflection on Quranic verses; discusses the fate of the disbelievers."
    },
    {
      "surahNumber": 42,
      "arabicName": "الشورى",
      "englishName": "Ash-Shura",
      "origin": "Makki",
      "englishMeaning": "The Consultation",
      "numberOfVerses": 53,
      "description": "Encourages mutual consultation among believers; focuses on divine unity."
    },
    {
      "surahNumber": 43,
      "arabicName": "الزخرف",
      "englishName": "Az-Zukhruf",
      "origin": "Makki",
      "englishMeaning": "The Ornaments of Gold",
      "numberOfVerses": 89,
      "description": "Challenges worldly attachments; stresses that true worth is found in faith."
    },
    {
      "surahNumber": 44,
      "arabicName": "الدخان",
      "englishName": "Ad-Dukhan",
      "origin": "Makki",
      "englishMeaning": "The Smoke",
      "numberOfVerses": 59,
      "description": "Mentions the night of destiny; warns disbelievers of a smoky doom."
    },
    {
      "surahNumber": 45,
      "arabicName": "الجاثية",
      "englishName": "Al-Jathiyah",
      "origin": "Makki",
      "englishMeaning": "Kneeling",
      "numberOfVerses": 37,
      "description": "Depicts nations kneeling on Judgment Day; urges gratitude for Allah’s signs."
    },
    {
      "surahNumber": 46,
      "arabicName": "الأحقاف",
      "englishName": "Al-Ahqaf",
      "origin": "Makki",
      "englishMeaning": "The Wind-Curved Sandhills",
      "numberOfVerses": 35,
      "description": "Refers to the people of ‘Ad; highlights the Quran as guidance and mercy."
    },
    {
      "surahNumber": 47,
      "arabicName": "محمد",
      "englishName": "Muhammad",
      "origin": "Madani",
      "englishMeaning": "Muhammad",
      "numberOfVerses": 38,
      "description": "Contrasts believers and disbelievers; encourages steadfastness in faith and charity."
    },
    {
      "surahNumber": 48,
      "arabicName": "الفتح",
      "englishName": "Al-Fath",
      "origin": "Madani",
      "englishMeaning": "The Victory",
      "numberOfVerses": 29,
      "description": "Celebrates the Treaty of Hudaybiyyah; assures believers of a clear victory."
    },
    {
      "surahNumber": 49,
      "arabicName": "الحجرات",
      "englishName": "Al-Hujurat",
      "origin": "Madani",
      "englishMeaning": "The Rooms",
      "numberOfVerses": 18,
      "description": "Teaches manners, mutual respect, and addresses tribalism among believers."
    },
    {
      "surahNumber": 50,
      "arabicName": "ق",
      "englishName": "Qaf",
      "origin": "Makki",
      "englishMeaning": "Qaf",
      "numberOfVerses": 45,
      "description": "Reminds of resurrection; presents evidence of Allah’s power in nature."
    },
    {
      "surahNumber": 51,
      "arabicName": "الذاريات",
      "englishName": "Adh-Dhariyat",
      "origin": "Makki",
      "englishMeaning": "The Scatterers",
      "numberOfVerses": 60,
      "description": "Points to creation as proof of Allah’s existence; warns of final judgment."
    },
    {
      "surahNumber": 52,
      "arabicName": "الطور",
      "englishName": "At-Tur",
      "origin": "Makki",
      "englishMeaning": "The Mount",
      "numberOfVerses": 49,
      "description": "Oath by Mount Sinai; affirms the Day of Judgment and reward of the righteous."
    },
    {
      "surahNumber": 53,
      "arabicName": "النجم",
      "englishName": "An-Najm",
      "origin": "Makki",
      "englishMeaning": "The Star",
      "numberOfVerses": 62,
      "description": "Cites revelation to the Prophet; condemns idolatry and emphasizes divine authority."
    },
    {
      "surahNumber": 54,
      "arabicName": "القمر",
      "englishName": "Al-Qamar",
      "origin": "Makki",
      "englishMeaning": "The Moon",
      "numberOfVerses": 55,
      "description": "Warns disbelievers with examples of past nations; references the splitting of the moon."
    },
    {
      "surahNumber": 55,
      "arabicName": "الرحمن",
      "englishName": "Ar-Rahman",
      "origin": "Makki",
      "englishMeaning": "The Most Merciful",
      "numberOfVerses": 78,
      "description": "Showcases Allah’s many blessings; often called ‘the beauty of the Quran.’"
    },
    {
      "surahNumber": 56,
      "arabicName": "الواقعة",
      "englishName": "Al-Waqi'ah",
      "origin": "Makki",
      "englishMeaning": "The Event",
      "numberOfVerses": 96,
      "description": "Depicts the events of the Day of Judgment; categorizes people into three groups."
    },
    {
      "surahNumber": 57,
      "arabicName": "الحديد",
      "englishName": "Al-Hadid",
      "origin": "Madani",
      "englishMeaning": "The Iron",
      "numberOfVerses": 29,
      "description": "Urges charity, sacrifice for Allah’s cause, and reliance on divine power."
    },
    {
      "surahNumber": 58,
      "arabicName": "المجادلة",
      "englishName": "Al-Mujadilah",
      "origin": "Madani",
      "englishMeaning": "The Pleading Woman",
      "numberOfVerses": 22,
      "description": "Addresses a woman’s plea to the Prophet; sets rules on oath-taking and loyalty."
    },
    {
      "surahNumber": 59,
      "arabicName": "الحشر",
      "englishName": "Al-Hashr",
      "origin": "Madani",
      "englishMeaning": "The Exile",
      "numberOfVerses": 24,
      "description": "Covers the expulsion of certain Jewish tribes; exalts Allah’s most beautiful names."
    },
    {
      "surahNumber": 60,
      "arabicName": "الممتحنة",
      "englishName": "Al-Mumtahanah",
      "origin": "Madani",
      "englishMeaning": "She That Is To Be Examined",
      "numberOfVerses": 13,
      "description": "Guides on testing faith of emigrant women; commands just relations with non-hostile non-believers."
    },
    {
      "surahNumber": 61,
      "arabicName": "الصف",
      "englishName": "As-Saff",
      "origin": "Madani",
      "englishMeaning": "The Ranks",
      "numberOfVerses": 14,
      "description": "Calls believers to stand in solid ranks; endorses sincerity in striving for Allah’s cause."
    },
    {
      "surahNumber": 62,
      "arabicName": "الجمعة",
      "englishName": "Al-Jumu'ah",
      "origin": "Madani",
      "englishMeaning": "The Friday Congregation",
      "numberOfVerses": 11,
      "description": "Emphasizes the importance of the Friday prayer and remembrance of Allah."
    },
    {
      "surahNumber": 63,
      "arabicName": "المنافقون",
      "englishName": "Al-Munafiqun",
      "origin": "Madani",
      "englishMeaning": "The Hypocrites",
      "numberOfVerses": 11,
      "description": "Unmasks hypocritical behavior; instructs believers to remain sincere."
    },
    {
      "surahNumber": 64,
      "arabicName": "التغابن",
      "englishName": "At-Taghabun",
      "origin": "Madani",
      "englishMeaning": "Mutual Loss and Gain",
      "numberOfVerses": 18,
      "description": "Reminds that true profit is faith; warns that worldly life can be misleading."
    },
    {
      "surahNumber": 65,
      "arabicName": "الطلاق",
      "englishName": "At-Talaq",
      "origin": "Madani",
      "englishMeaning": "Divorce",
      "numberOfVerses": 12,
      "description": "Guides on proper procedures and waiting periods in divorce; trusting Allah’s decree."
    },
    {
      "surahNumber": 66,
      "arabicName": "التحريم",
      "englishName": "At-Tahrim",
      "origin": "Madani",
      "englishMeaning": "The Prohibition",
      "numberOfVerses": 12,
      "description": "Advises the Prophet’s household; encourages repentance and piety."
    },
    {
      "surahNumber": 67,
      "arabicName": "الملك",
      "englishName": "Al-Mulk",
      "origin": "Makki",
      "englishMeaning": "The Sovereignty",
      "numberOfVerses": 30,
      "description": "Affirms Allah’s control over all existence; encourages reflection on the heavens."
    },
    {
      "surahNumber": 68,
      "arabicName": "القلم",
      "englishName": "Al-Qalam",
      "origin": "Makki",
      "englishMeaning": "The Pen",
      "numberOfVerses": 52,
      "description": "Swears by the pen; warns the arrogant; extols noble character (of the Prophet)."
    },
    {
      "surahNumber": 69,
      "arabicName": "الحاقة",
      "englishName": "Al-Haqqah",
      "origin": "Makki",
      "englishMeaning": "The Inevitable",
      "numberOfVerses": 52,
      "description": "Presents scenes of the Day of Judgment; depicts fate of past transgressing nations."
    },
    {
      "surahNumber": 70,
      "arabicName": "المعارج",
      "englishName": "Al-Ma'arij",
      "origin": "Makki",
      "englishMeaning": "The Ascending Stairways",
      "numberOfVerses": 44,
      "description": "Describes the angels ascending to Allah; highlights human impatience and moral guidance."
    },
    {
      "surahNumber": 71,
      "arabicName": "نوح",
      "englishName": "Nuh",
      "origin": "Makki",
      "englishMeaning": "Noah",
      "numberOfVerses": 28,
      "description": "Prophet Nuh’s persistent call to his people; a lesson in patience and warning."
    },
    {
      "surahNumber": 72,
      "arabicName": "الجن",
      "englishName": "Al-Jinn",
      "origin": "Makki",
      "englishMeaning": "The Jinn",
      "numberOfVerses": 28,
      "description": "Reveals how some jinn embraced Islam upon hearing the Quran; affirms monotheism."
    },
    {
      "surahNumber": 73,
      "arabicName": "المزمل",
      "englishName": "Al-Muzzammil",
      "origin": "Makki",
      "englishMeaning": "The Enshrouded One",
      "numberOfVerses": 20,
      "description": "Commands the Prophet to stand in night prayer; provides spiritual guidance."
    },
    {
      "surahNumber": 74,
      "arabicName": "المدثر",
      "englishName": "Al-Muddaththir",
      "origin": "Makki",
      "englishMeaning": "The Cloaked One",
      "numberOfVerses": 56,
      "description": "Calls the Prophet to deliver Allah’s message; warns against heedlessness."
    },
    {
      "surahNumber": 75,
      "arabicName": "القيامة",
      "englishName": "Al-Qiyamah",
      "origin": "Makki",
      "englishMeaning": "The Resurrection",
      "numberOfVerses": 40,
      "description": "Depicts resurrection scenes; stresses certainty of the final Day."
    },
    {
      "surahNumber": 76,
      "arabicName": "الانسان",
      "englishName": "Al-Insan",
      "origin": "Madani",
      "englishMeaning": "Man",
      "numberOfVerses": 31,
      "description": "Describes man’s creation and the rewards for patient believers in Paradise."
    },
    {
      "surahNumber": 77,
      "arabicName": "المرسلات",
      "englishName": "Al-Mursalat",
      "origin": "Makki",
      "englishMeaning": "Those Sent Forth",
      "numberOfVerses": 50,
      "description": "Depicts the Day of Decision; repeatedly questions disbelievers’ denial of truth."
    },
    {
      "surahNumber": 78,
      "arabicName": "النبإ",
      "englishName": "An-Naba",
      "origin": "Makki",
      "englishMeaning": "The Great News",
      "numberOfVerses": 40,
      "description": "Centers on the news of resurrection and the hereafter."
    },
    {
      "surahNumber": 79,
      "arabicName": "النازعات",
      "englishName": "An-Nazi'at",
      "origin": "Makki",
      "englishMeaning": "Those Who Pull Out",
      "numberOfVerses": 46,
      "description": "Describes angels seizing souls; recalls Moses’s warning to Pharaoh."
    },
    {
      "surahNumber": 80,
      "arabicName": "عبس",
      "englishName": "'Abasa",
      "origin": "Makki",
      "englishMeaning": "He Frowned",
      "numberOfVerses": 42,
      "description": "Reproaches the Prophet for ignoring a blind man; teaches humility."
    },
    {
      "surahNumber": 81,
      "arabicName": "التكوير",
      "englishName": "At-Takwir",
      "origin": "Makki",
      "englishMeaning": "The Overthrowing",
      "numberOfVerses": 29,
      "description": "Vividly describes cosmic upheaval on the Day of Judgment."
    },
    {
      "surahNumber": 82,
      "arabicName": "الإنفطار",
      "englishName": "Al-Infitar",
      "origin": "Makki",
      "englishMeaning": "The Cleaving",
      "numberOfVerses": 19,
      "description": "Highlights the splitting of the sky and accountability of each soul."
    },
    {
      "surahNumber": 83,
      "arabicName": "المطففين",
      "englishName": "Al-Mutaffifin",
      "origin": "Makki",
      "englishMeaning": "Those Who Deal in Fraud",
      "numberOfVerses": 36,
      "description": "Condemns dishonest traders; contrasts the fate of righteous vs. wicked."
    },
    {
      "surahNumber": 84,
      "arabicName": "الإنشقاق",
      "englishName": "Al-Inshiqaq",
      "origin": "Makki",
      "englishMeaning": "The Splitting Asunder",
      "numberOfVerses": 25,
      "description": "Describes end-time events; each person will face consequences of deeds."
    },
    {
      "surahNumber": 85,
      "arabicName": "البروج",
      "englishName": "Al-Buruj",
      "origin": "Makki",
      "englishMeaning": "The Mansions of the Stars",
      "numberOfVerses": 22,
      "description": "Recounts persecution of believers; reassures that Allah is witness over all."
    },
    {
      "surahNumber": 86,
      "arabicName": "الطارق",
      "englishName": "At-Tariq",
      "origin": "Makki",
      "englishMeaning": "The Night Comer",
      "numberOfVerses": 17,
      "description": "Swears by the star at night; affirms every soul has a guardian."
    },
    {
      "surahNumber": 87,
      "arabicName": "الأعلى",
      "englishName": "Al-A'la",
      "origin": "Makki",
      "englishMeaning": "The Most High",
      "numberOfVerses": 19,
      "description": "Glorifies Allah’s perfection; reassures the Prophet of ease in delivering the message."
    },
    {
      "surahNumber": 88,
      "arabicName": "الغاشية",
      "englishName": "Al-Ghashiyah",
      "origin": "Makki",
      "englishMeaning": "The Overwhelming",
      "numberOfVerses": 26,
      "description": "Portrays scenes of paradise and hell; calls for reflection on creation."
    },
    {
      "surahNumber": 89,
      "arabicName": "الفجر",
      "englishName": "Al-Fajr",
      "origin": "Makki",
      "englishMeaning": "The Dawn",
      "numberOfVerses": 30,
      "description": "Warnings through examples of past nations; reminds of final accountability."
    },
    {
      "surahNumber": 90,
      "arabicName": "البلد",
      "englishName": "Al-Balad",
      "origin": "Makki",
      "englishMeaning": "The City",
      "numberOfVerses": 20,
      "description": "Focuses on moral struggles; urges charitable deeds and freeing slaves."
    },
    {
      "surahNumber": 91,
      "arabicName": "الشمس",
      "englishName": "Ash-Shams",
      "origin": "Makki",
      "englishMeaning": "The Sun",
      "numberOfVerses": 15,
      "description": "Oaths by cosmic phenomena; mentions the fate of Thamud as a warning."
    },
    {
      "surahNumber": 92,
      "arabicName": "الليل",
      "englishName": "Al-Layl",
      "origin": "Makki",
      "englishMeaning": "The Night",
      "numberOfVerses": 21,
      "description": "Contrasts generosity vs. greed; calls to strive for the hereafter."
    },
    {
      "surahNumber": 93,
      "arabicName": "الضحى",
      "englishName": "Ad-Duha",
      "origin": "Makki",
      "englishMeaning": "The Morning Brightness",
      "numberOfVerses": 11,
      "description": "Consoles the Prophet; reminds of Allah’s care and favors upon him."
    },
    {
      "surahNumber": 94,
      "arabicName": "الشرح",
      "englishName": "Ash-Sharh",
      "origin": "Makki",
      "englishMeaning": "The Relief",
      "numberOfVerses": 8,
      "description": "Emphasizes that ease follows hardship; encourages steadfastness and gratitude."
    },
    {
      "surahNumber": 95,
      "arabicName": "التين",
      "englishName": "At-Tin",
      "origin": "Makki",
      "englishMeaning": "The Fig",
      "numberOfVerses": 8,
      "description": "Oaths by symbolic locations; stresses man’s potential for virtue or downfall."
    },
    {
      "surahNumber": 96,
      "arabicName": "العلق",
      "englishName": "Al-'Alaq",
      "origin": "Makki",
      "englishMeaning": "The Clot",
      "numberOfVerses": 19,
      "description": "First revelation to the Prophet; encourages reading and knowledge."
    },
    {
      "surahNumber": 97,
      "arabicName": "القدر",
      "englishName": "Al-Qadr",
      "origin": "Makki",
      "englishMeaning": "The Night of Decree",
      "numberOfVerses": 5,
      "description": "Highlights the virtue of Laylat al-Qadr, better than a thousand months."
    },
    {
      "surahNumber": 98,
      "arabicName": "البينة",
      "englishName": "Al-Bayyinah",
      "origin": "Madani",
      "englishMeaning": "The Clear Proof",
      "numberOfVerses": 8,
      "description": "Critiques those who reject the clear message of the Quran and earlier scriptures."
    },
    {
      "surahNumber": 99,
      "arabicName": "الزلزلة",
      "englishName": "Az-Zalzalah",
      "origin": "Madani",
      "englishMeaning": "The Earthquake",
      "numberOfVerses": 8,
      "description": "Describes a mighty quake on Judgment Day; every deed will be exposed."
    },
    {
      "surahNumber": 100,
      "arabicName": "العاديات",
      "englishName": "Al-'Adiyat",
      "origin": "Makki",
      "englishMeaning": "The Chargers",
      "numberOfVerses": 11,
      "description": "Oath by warhorses charging into battle; warns of human ingratitude."
    },
    {
      "surahNumber": 101,
      "arabicName": "القارعة",
      "englishName": "Al-Qari'ah",
      "origin": "Makki",
      "englishMeaning": "The Striking Hour",
      "numberOfVerses": 11,
      "description": "Portrays the terror of the Day of Judgment; weighs deeds on a scale."
    },
    {
      "surahNumber": 102,
      "arabicName": "التكاثر",
      "englishName": "At-Takathur",
      "origin": "Makki",
      "englishMeaning": "Rivalry in Worldly Increase",
      "numberOfVerses": 8,
      "description": "Warns against worldly competition; reminds of inevitable questioning in the afterlife."
    },
    {
      "surahNumber": 103,
      "arabicName": "العصر",
      "englishName": "Al-'Asr",
      "origin": "Makki",
      "englishMeaning": "The Declining Day",
      "numberOfVerses": 3,
      "description": "Stresses loss for mankind except those who believe, do good, and counsel truth."
    },
    {
      "surahNumber": 104,
      "arabicName": "الهمزة",
      "englishName": "Al-Humazah",
      "origin": "Makki",
      "englishMeaning": "The Slanderer",
      "numberOfVerses": 9,
      "description": "Condemns backbiting and hoarding of wealth; promises punishment for the arrogant."
    },
    {
      "surahNumber": 105,
      "arabicName": "الفيل",
      "englishName": "Al-Fil",
      "origin": "Makki",
      "englishMeaning": "The Elephant",
      "numberOfVerses": 5,
      "description": "Refers to the failed attack on the Ka’bah by the army of the elephant."
    },
    {
      "surahNumber": 106,
      "arabicName": "قريش",
      "englishName": "Quraysh",
      "origin": "Makki",
      "englishMeaning": "Quraysh",
      "numberOfVerses": 4,
      "description": "Reminds Quraysh of Allah’s provision and urges devotion to Him alone."
    },
    {
      "surahNumber": 107,
      "arabicName": "الماعون",
      "englishName": "Al-Ma'un",
      "origin": "Makki",
      "englishMeaning": "Small Kindnesses",
      "numberOfVerses": 7,
      "description": "Rebukes those who neglect orphans and prayer; emphasizes charity."
    },
    {
      "surahNumber": 108,
      "arabicName": "الكوثر",
      "englishName": "Al-Kawthar",
      "origin": "Makki",
      "englishMeaning": "Abundance",
      "numberOfVerses": 3,
      "description": "Promises the Prophet a river in Paradise; encourages prayer and sacrifice."
    },
    {
      "surahNumber": 109,
      "arabicName": "الكافرون",
      "englishName": "Al-Kafirun",
      "origin": "Makki",
      "englishMeaning": "The Disbelievers",
      "numberOfVerses": 6,
      "description": "Declares separation in worship between believers and disbelievers; affirms religious freedom."
    },
    {
      "surahNumber": 110,
      "arabicName": "النصر",
      "englishName": "An-Nasr",
      "origin": "Madani",
      "englishMeaning": "The Help",
      "numberOfVerses": 3,
      "description": "Announces the triumph of Islam; calls for glorifying and seeking forgiveness of Allah."
    },
    {
      "surahNumber": 111,
      "arabicName": "المسد",
      "englishName": "Al-Masad",
      "origin": "Makki",
      "englishMeaning": "The Palm Fiber",
      "numberOfVerses": 5,
      "description": "Condemns Abu Lahab and his wife for hostility towards the Prophet."
    },
    {
      "surahNumber": 112,
      "arabicName": "الإخلاص",
      "englishName": "Al-Ikhlas",
      "origin": "Makki",
      "englishMeaning": "Sincerity",
      "numberOfVerses": 4,
      "description": "Defines monotheism succinctly; Allah is One, eternal, and without equal."
    },
    {
      "surahNumber": 113,
      "arabicName": "الفلق",
      "englishName": "Al-Falaq",
      "origin": "Makki",
      "englishMeaning": "The Daybreak",
      "numberOfVerses": 5,
      "description": "Seeks protection from evil, darkness, sorcery, and the envious."
    },
    {
      "surahNumber": 114,
      "arabicName": "الناس",
      "englishName": "An-Nas",
      "origin": "Makki",
      "englishMeaning": "Mankind",
      "numberOfVerses": 6,
      "description": "Final surah; seeks refuge in Allah from the whispers of Satan among humans and jinn."
    }
  ]
  
  export default surahs;