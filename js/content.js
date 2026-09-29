/* ==========================================================================
   DHL – Diaspora Hub for Leaders
   content.js — SITE CONFIGURATION + section content.
   Everything you normally change is in this file or in /data.
   ========================================================================== */

/* --------------------------------------------------------------------------
   1. CONFIGURATION — edit these values
   -------------------------------------------------------------------------- */

/* YouTube Data API v3. Use a BROWSER key restricted to your website
   (see README section 6). Leave empty to use the manual list in
   data/ministry-posts.js. */
const YOUTUBE_API_KEY = "AIzaSyCQle1XP2mPTFcTzDPxPejVKD7a4QWfyx8";
const YOUTUBE_CHANNEL_ID = "UCy-688NReUqpEgWUziM2n8A";             // starts with "UC"

/* Your public Facebook Page address. */
const FACEBOOK_PAGE_URL = "https://www.facebook.com/profile.php?id=61553361180706";

/* AI Ministry Assistant.
   enabled:false  -> demo mode (answers come from DHL content on this site)
   enabled:true   -> questions are sent to YOUR backend at `endpoint`.
   Never put an AI provider's secret key here. See README section 13. */
const AI_CONFIG = {
  enabled: false,
  endpoint: "",                         // e.g. "https://api.your-dhl-backend.org/ai/ask"
  assistantName: "DHL AI Assistant",
  maxQuestionLength: 600
};

const CONFIG = {
  name: "DHL – Diaspora Hub for Leaders",
  shortName: "DHL",
  tagline: "From Connection to Commission",
  description: "Helping foreigners in Korea move from connection to discipleship, leadership, and mission.",
  logo: "assets/logo/dhl-logo.svg",
  location: "Seoul, South Korea",
  /* Bible links open on BibleGateway in this version (e.g. "NIV", "ESV" or "KJV"; Tagalog versions are available there too). */
  bibleVersion: "NIV",
  email: "hello@your-dhl-ministry.org",

  /* Show "Sample" badges on demo posts, events and groups.
     Set to false once all demo content is replaced. */
  showDemoLabels: false,

  youtube: { apiKey: YOUTUBE_API_KEY, channelId: YOUTUBE_CHANNEL_ID, maxResults: 12, cacheMinutes: 60 },
  facebookPageUrl: FACEBOOK_PAGE_URL,

  /* External forms (Google Forms or similar). Empty = button hidden. */
  forms: {
    prayer: "https://forms.gle/your-prayer-form",
    contact: "https://forms.gle/your-contact-form",
    bibleStudy: "https://forms.gle/your-bible-study-form",
    mentor: "https://forms.gle/your-mentor-form",
    community: "https://forms.gle/your-community-form",
    leadership: "https://forms.gle/your-academy-form",
    events: "https://forms.gle/your-event-form"
  },

  /* Social and community links. Empty = hidden. */
  social: {
    facebook: FACEBOOK_PAGE_URL,
    youtube: "https://www.youtube.com/@your-dhl-channel",
    instagram: "https://www.instagram.com/your-dhl",
    tiktok: "https://www.tiktok.com/@your-dhl",
    messenger: "https://m.me/your-dhl-page",
    facebookGroup: "https://www.facebook.com/groups/your-dhl-group",
    whatsapp: "",
    kakaoOpenChat: "https://open.kakao.com/o/your-dhl-chat"
  },

  /* Future backend. While enabled is false, the site uses the local
     files in /data. See README section 13. */
  backend: { enabled: false, baseUrl: "" }
};

/* --------------------------------------------------------------------------
   2. THE MINISTRY JOURNEY (home page route map)
   -------------------------------------------------------------------------- */
const journeySteps = [
  { id: "reach", title: "Reach", text: "Find people through social media and practical help.", href: "korea.html", icon: "signal" },
  { id: "connect", title: "Connect", text: "Build real relationships and community.", href: "community.html", icon: "people" },
  { id: "gospel", title: "Gospel", text: "Understand the good news of Jesus Christ.", href: "gospel.html", icon: "cross" },
  { id: "disciple", title: "Disciple", text: "Grow through Bible study, mentoring and fellowship.", href: "discipleship.html", icon: "book" },
  { id: "train", title: "Train", text: "Develop ministry and leadership skills.", href: "academy.html", icon: "cap" },
  { id: "serve", title: "Serve", text: "Take responsibility in real ministry.", href: "leadership.html", icon: "hands" },
  { id: "multiply", title: "Multiply", text: "Help develop new disciples and leaders.", href: "about.html#multiplication", icon: "branch" }
];

/* --------------------------------------------------------------------------
   3. FIVE MINISTRY AREAS
   -------------------------------------------------------------------------- */
const ministryAreas = [
  { title: "Life in Korea", href: "korea.html", icon: "map", color: "teal",
    text: "Korean language, TOPIK, jobs, housing, visas and daily life. Practical help, first." },
  { title: "Gospel & Bible", href: "gospel.html", icon: "cross", color: "red",
    text: "Who Jesus is, what he did, and what it means for you. Start from the beginning." },
  { title: "Discipleship", href: "discipleship.html", icon: "book", color: "blue",
    text: "Grow step by step: assurance, the Bible, prayer, fellowship and serving others." },
  { title: "Leadership", href: "leadership.html", icon: "compass", color: "mango",
    text: "Servant leadership, mentoring, small groups and cross-cultural ministry." },
  { title: "Digital Ministry", href: "digital-ministry.html", icon: "phone", color: "violet",
    text: "Use video, social media, Zoom and AI tools to reach and teach people online." }
];

/* --------------------------------------------------------------------------
   4. GOSPEL & BIBLE TOPICS
   status "draft" shows a "Draft for review" badge. Change to "approved"
   once DHL leadership has approved the wording.
   -------------------------------------------------------------------------- */
const gospelTopics = [
  { id: "sin", title: "Sin", status: "draft", refs: ["Romans 3:23", "1 John 3:4", "Isaiah 59:2"],
    summary: "The Bible describes sin as breaking God's law and falling short of his standard, which separates people from God.",
    questions: ["How does Isaiah 59:2 describe the effect of sin?", "Why does Romans 3:23 say 'all'?"] },
  { id: "law", title: "The Law", status: "draft", refs: ["Romans 3:20", "Romans 7:7", "Galatians 3:24"],
    summary: "God's law shows his holy standard. According to Paul, it makes us aware of sin and points us to Christ.",
    questions: ["What does Romans 3:20 say the law cannot do?", "What does Galatians 3:24 compare the law to?"] },
  { id: "repentance", title: "Repentance", status: "draft", refs: ["Acts 3:19", "Luke 15:7", "2 Corinthians 7:10"],
    summary: "Repentance means a change of mind and direction: turning away from sin and toward God.",
    questions: ["What promise comes with repentance in Acts 3:19?", "How does heaven respond in Luke 15:7?"] },
  { id: "jesus", title: "Jesus Christ", status: "draft", refs: ["John 1:1–14", "Matthew 16:15–16", "Colossians 1:15–20"],
    summary: "The Bible presents Jesus as the eternal Word who became a man, the Christ and the Son of the living God.",
    questions: ["What does John 1:14 say happened?", "How did Peter answer Jesus' question in Matthew 16?"] },
  { id: "cross", title: "The Cross", status: "draft", refs: ["1 Corinthians 1:18", "1 Peter 2:24", "Philippians 2:8"],
    summary: "Jesus died on the cross. The New Testament teaches that he bore our sins there.",
    questions: ["According to 1 Peter 2:24, whose sins did Jesus bear?", "Why might the cross seem foolish to some people?"] },
  { id: "blood", title: "The Blood of Christ", status: "draft", refs: ["Hebrews 9:22", "Ephesians 1:7", "1 Peter 1:18–19"],
    summary: "Scripture connects forgiveness with the blood of Christ, his life given in death for sinners.",
    questions: ["What does Ephesians 1:7 say we have through his blood?", "What is compared with Christ's blood in 1 Peter 1:18–19?"] },
  { id: "atonement", title: "Atonement", status: "draft", refs: ["Leviticus 17:11", "Romans 3:25", "1 John 2:2"],
    summary: "Atonement is how sinners are reconciled to God. The Bible points to Jesus' sacrifice as the means.",
    questions: ["How does Leviticus 17:11 prepare us to understand the cross?", "Who does 1 John 2:2 say Jesus is?"] },
  { id: "forgiveness", title: "Forgiveness of Sins", status: "draft", refs: ["Acts 10:43", "Colossians 1:14", "1 John 1:9"],
    summary: "The Bible promises forgiveness of sins through Jesus to everyone who believes in him.",
    questions: ["Who receives forgiveness according to Acts 10:43?", "What does 1 John 1:9 say God is?"] },
  { id: "righteousness", title: "Righteousness", status: "draft", refs: ["Romans 3:21–22", "2 Corinthians 5:21", "Philippians 3:9"],
    summary: "Paul teaches that God gives righteousness through faith in Jesus Christ, not through our own works.",
    questions: ["How does 2 Corinthians 5:21 describe an exchange?", "Where does Paul say his righteousness comes from in Philippians 3:9?"] },
  { id: "faith", title: "Faith", status: "draft", refs: ["Hebrews 11:1", "Ephesians 2:8", "Romans 10:17"],
    summary: "Faith is trusting God and his promises. Scripture says it comes by hearing the word of God.",
    questions: ["How does Hebrews 11:1 define faith?", "Where does faith come from in Romans 10:17?"] },
  { id: "salvation", title: "Salvation", status: "draft", refs: ["Ephesians 2:8–9", "Titus 3:5", "Romans 10:9"],
    summary: "The Bible describes salvation as a gift of God's grace received through faith, not earned by works.",
    questions: ["Why can no one boast, according to Ephesians 2:9?", "What does Romans 10:9 ask a person to believe?"] },
  { id: "new-life", title: "New Life", status: "draft", refs: ["2 Corinthians 5:17", "Romans 6:4", "John 3:3"],
    summary: "Those who are in Christ are described as a new creation, called to walk in newness of life.",
    questions: ["What passes away in 2 Corinthians 5:17?", "What did Jesus tell Nicodemus in John 3:3?"] },
  { id: "bible-study", title: "Bible Study", status: "draft", refs: ["2 Timothy 3:16–17", "Psalm 119:105", "Acts 17:11"],
    summary: "Scripture is God-breathed and useful for teaching. The Bereans examined it daily for themselves.",
    questions: ["What four uses of Scripture are listed in 2 Timothy 3:16?", "What did the Bereans do in Acts 17:11?"] }
];

/* --------------------------------------------------------------------------
   5. DISCIPLESHIP
   -------------------------------------------------------------------------- */
const discipleshipPath = [
  { id: "d-foundation", title: "Gospel Foundation", text: "Be clear on the good news.", href: "gospel.html#course" },
  { id: "d-assurance", title: "Assurance", text: "Know you belong to God.", topic: "assurance" },
  { id: "d-bible", title: "Bible", text: "Read and study daily.", topic: "word" },
  { id: "d-prayer", title: "Prayer", text: "Talk with God honestly.", topic: "prayer" },
  { id: "d-fellowship", title: "Fellowship", text: "Belong to a group.", topic: "fellowship" },
  { id: "d-evangelism", title: "Evangelism", text: "Share what you know.", topic: "evangelism" },
  { id: "d-service", title: "Service", text: "Serve others with your gifts.", topic: "serving" }
];

const discipleshipTopics = [
  { id: "assurance", title: "Assurance of Salvation", status: "draft", refs: ["1 John 5:13", "John 10:28", "Romans 8:38–39"],
    summary: "John wrote so that believers may know they have eternal life. Assurance rests on God's promise.",
    questions: ["Why did John write, according to 1 John 5:13?", "What can separate us from God's love?"] },
  { id: "word", title: "The Word of God", status: "draft", refs: ["Psalm 119:105", "Matthew 4:4", "James 1:22"],
    summary: "Disciples read, understand and obey God's word, which guides their lives.",
    questions: ["What does James 1:22 warn against?", "What reading habit could you start this week?"] },
  { id: "prayer", title: "Prayer", status: "draft", refs: ["Matthew 6:9–13", "Philippians 4:6–7", "1 Thessalonians 5:17"],
    summary: "Prayer is talking with God. Jesus gave his disciples a pattern to follow.",
    questions: ["What does Philippians 4:6 say to do with worry?", "Which line of the Lord's Prayer do you need most?"] },
  { id: "fellowship", title: "Fellowship", status: "draft", refs: ["Acts 2:42", "Hebrews 10:24–25", "1 John 1:7"],
    summary: "The first Christians devoted themselves to teaching, fellowship, breaking bread and prayer.",
    questions: ["What four things are listed in Acts 2:42?", "Who could you encourage this week?"] },
  { id: "church", title: "The Church", status: "draft", refs: ["Ephesians 4:11–16", "1 Corinthians 12:12–27", "Matthew 16:18"],
    summary: "The church is described as the body of Christ, with each member needed.",
    questions: ["What picture does 1 Corinthians 12 use?", "What part do you play?"] },
  { id: "grace", title: "Grace", status: "draft", refs: ["Ephesians 2:8", "2 Corinthians 12:9", "Titus 2:11–12"],
    summary: "Grace is God's undeserved favor. It saves us, and it also teaches us how to live.",
    questions: ["What does grace teach us in Titus 2:12?", "Where do you need God's grace today?"] },
  { id: "flesh-spirit", title: "Flesh and Spirit", status: "draft", refs: ["Galatians 5:16–25", "Romans 8:5–6"],
    summary: "Paul contrasts the works of the flesh with the fruit of the Spirit and calls believers to walk by the Spirit.",
    questions: ["List the fruit of the Spirit.", "What does it mean to 'walk by the Spirit'?"] },
  { id: "christian-life", title: "Christian Life", status: "draft", refs: ["Romans 12:1–2", "Colossians 3:12–17"],
    summary: "Disciples offer their whole lives to God and are changed by the renewing of their minds.",
    questions: ["What does Romans 12:2 say to avoid?", "Which quality in Colossians 3:12 do you want to grow in?"] },
  { id: "serving", title: "Serving Others", status: "draft", refs: ["Mark 10:45", "Galatians 5:13", "1 Peter 4:10"],
    summary: "Jesus came to serve. His followers use their gifts to serve one another.",
    questions: ["What did Jesus come to do, according to Mark 10:45?", "What gift could you use to serve?"] },
  { id: "evangelism", title: "Evangelism", status: "draft", refs: ["Matthew 28:19–20", "1 Peter 3:15", "Acts 1:8"],
    summary: "Jesus sent his followers to make disciples of all nations, sharing the hope they have with gentleness.",
    questions: ["How should we answer according to 1 Peter 3:15?", "Who in your life could you share with?"] },
  { id: "growth", title: "Spiritual Growth", status: "draft", refs: ["2 Peter 3:18", "Philippians 1:6", "Hebrews 5:12–14"],
    summary: "Believers are called to grow in grace and knowledge. God finishes the work he starts.",
    questions: ["What does Philippians 1:6 promise?", "What is one sign of growth you've seen?"] }
];

/* --------------------------------------------------------------------------
   6. LEADERSHIP (course cards with a practical assignment)
   -------------------------------------------------------------------------- */
const leadershipTopics = [
  { id: "servant", title: "Servant Leadership", refs: ["Mark 10:42–45", "John 13:1–17"],
    summary: "Jesus defined greatness as serving. Leaders go first in humility.",
    assignment: "Serve someone in your group this week without being asked, then reflect on what you learned." },
  { id: "biblical", title: "Biblical Leadership", refs: ["1 Timothy 3:1–7", "Titus 1:5–9"],
    summary: "Character before skill: what Scripture asks of those who lead God's people.",
    assignment: "Read 1 Timothy 3 with a mentor and choose one area of character to work on." },
  { id: "paul", title: "Paul's Leadership", refs: ["Acts 20:17–35", "2 Timothy 2:2"],
    summary: "How Paul trained others, entrusted responsibility and kept going through hardship.",
    assignment: "Map Paul's 2 Timothy 2:2 chain onto your own life: who taught you, and whom will you teach?" },
  { id: "communication", title: "Communication", refs: ["Colossians 4:6", "James 1:19"],
    summary: "Listening well, speaking clearly and communicating across languages.",
    assignment: "Give a 5-minute talk to your small group and ask for two pieces of feedback." },
  { id: "counseling", title: "Counseling Basics", refs: ["Galatians 6:1–2", "Romans 12:15"],
    summary: "Caring listening, and knowing when to refer someone to a pastor or professional.",
    assignment: "Practice active listening in one conversation. Write down what you heard, not what you said." },
  { id: "mentoring", title: "Mentoring", refs: ["2 Timothy 2:2", "Titus 2:3–5"],
    summary: "Walking with one person over time, the heart of multiplication.",
    assignment: "Meet with one younger believer three times this month." },
  { id: "small-group", title: "Small Group Leadership", refs: ["Acts 2:42–47", "Hebrews 10:24–25"],
    summary: "Planning a meeting, asking good questions and caring for members.",
    assignment: "Co-lead one small group session with an experienced leader." },
  { id: "teaching", title: "Teaching the Bible", refs: ["Nehemiah 8:8", "2 Timothy 4:2"],
    summary: "Reading a passage carefully, explaining it simply and applying it.",
    assignment: "Prepare and teach a 15-minute Bible study on a short passage." },
  { id: "evangelism-l", title: "Leading in Evangelism", refs: ["Acts 8:26–40", "Colossians 4:5–6"],
    summary: "Sharing the gospel personally and training others to do the same.",
    assignment: "Share your story of faith with one person and then train a friend to share theirs." },
  { id: "conflict", title: "Conflict Management", refs: ["Matthew 18:15–17", "Ephesians 4:26–32"],
    summary: "Handling disagreement biblically, quickly and with grace.",
    assignment: "Study Matthew 18:15–17 and role-play a difficult conversation with your mentor." },
  { id: "cross-cultural", title: "Cross-cultural Ministry", refs: ["Acts 17:16–34", "1 Corinthians 9:19–23"],
    summary: "Ministering among Filipinos, Koreans and other nationalities with understanding.",
    assignment: "Interview someone from another culture about how they see faith and community." },
  { id: "digital-l", title: "Digital Ministry Leadership", refs: ["Colossians 4:3", "Philippians 1:18"],
    summary: "Leading online groups and content teams responsibly.",
    assignment: "Plan and host one online Bible study using Zoom or Messenger." }
];

/* --------------------------------------------------------------------------
   7. LIFE IN KOREA
   Links go to official sites. Rules change, so the site always tells
   visitors to check the official source.
   -------------------------------------------------------------------------- */
const koreaResources = [
  { category: "Korean Language", title: "Korea Immigration & Integration Program (KIIP)", url: "https://www.socinet.go.kr",
    text: "Government Korean language and society classes for foreign residents. Registration is through Socinet." },
  { category: "Korean Language", title: "King Sejong Institute", url: "https://www.iksi.or.kr",
    text: "Korean courses online and in person, from beginner level." },
  { category: "TOPIK", title: "TOPIK official site", url: "https://www.topik.go.kr",
    text: "Test dates, registration and past papers for the Test of Proficiency in Korean." },
  { category: "Jobs", title: "Employment Permit System (EPS)", url: "https://www.eps.go.kr",
    text: "Official information for workers on E-9 and H-2 employment permits." },
  { category: "Jobs", title: "Work24 job portal", url: "https://www.work24.go.kr",
    text: "Korea's public employment and job-search service." },
  { category: "Workplace Culture", title: "Korean workplace basics", tips: [
    "Arrive a little early; punctuality matters.",
    "Greet colleagues when you arrive and leave.",
    "Use polite speech (존댓말) with supervisors and older coworkers.",
    "Ask for clarification rather than guessing; say 다시 한 번 말씀해 주세요 (please say it again).",
    "Know your rights: contact the counseling centers listed under Daily Life if you are treated unfairly."],
    text: "Simple habits that help you build trust at work." },
  { category: "Korean Society", title: "Hi Korea (immigration portal)", url: "https://www.hikorea.go.kr",
    text: "Visas, residence cards and appointments. Immigration Contact Center: 1345." },
  { category: "Korean Culture", title: "Visit Korea (official tourism site)", url: "https://english.visitkorea.or.kr",
    text: "Festivals, holidays, food and places to explore." },
  { category: "University Life", title: "Study in Korea", url: "https://www.studyinkorea.go.kr",
    text: "Official information for international students and scholarships." },
  { category: "Housing", title: "Understanding Korean housing", tips: [
    "Know the difference between 월세 (monthly rent with deposit) and 전세 (large lump-sum deposit).",
    "Check that the landlord owns the property before paying a deposit.",
    "Get a written contract and ask a Korean-speaking friend or a DHL mentor to read it with you.",
    "Register your address change with your local community center or online at Hi Korea."],
    text: "What to check before you sign a contract or pay a deposit." },
  { category: "Daily Life", title: "Danuri helpline for multicultural families", url: "https://www.liveinkorea.kr",
    text: "Multilingual help with daily life. Phone: 1577-1366." },
  { category: "Daily Life", title: "Seoul Global Center", url: "https://global.seoul.go.kr",
    text: "Counseling, classes and support for foreign residents of Seoul." },
  { category: "Career Guidance", title: "Talk to a DHL mentor about your career", form: "mentor",
    text: "Planning your next step in Korea or back home? A mentor can listen and help you think it through." },
  { category: "Driving", title: "Korea driver's license information", url: "https://www.safedriving.or.kr",
    text: "Road Traffic Authority information on tests and exchanging a foreign license." },
  { category: "Driving", title: "Philippine Embassy in Seoul", url: "https://seoulpe.dfa.gov.ph",
    text: "Consular services for Filipinos, including document authentication." }
];

const koreanExpressions = [
  { ko: "안녕하세요", rom: "annyeonghaseyo", en: "Hello" },
  { ko: "감사합니다", rom: "gamsahamnida", en: "Thank you" },
  { ko: "죄송합니다", rom: "joesonghamnida", en: "I'm sorry" },
  { ko: "괜찮아요", rom: "gwaenchanayo", en: "It's okay / I'm fine" },
  { ko: "얼마예요?", rom: "eolmayeyo?", en: "How much is it?" },
  { ko: "도와주세요", rom: "dowajuseyo", en: "Please help me" },
  { ko: "화장실이 어디예요?", rom: "hwajangsiri eodiyeyo?", en: "Where is the restroom?" },
  { ko: "천천히 말씀해 주세요", rom: "cheoncheonhi malsseumhae juseyo", en: "Please speak slowly" },
  { ko: "한국어를 조금 해요", rom: "hangugeoreul jogeum haeyo", en: "I speak a little Korean" },
  { ko: "수고하셨습니다", rom: "sugohasyeotseumnida", en: "Thank you for your hard work (after work)" },
  { ko: "잘 부탁드립니다", rom: "jal butakdeurimnida", en: "I look forward to working with you" },
  { ko: "병원에 가야 해요", rom: "byeongwone gaya haeyo", en: "I need to go to the hospital" }
];

/* Emergency numbers shown by the AI assistant and the Life in Korea page. */
const koreaHelpNumbers = [
  { label: "Police", number: "112" },
  { label: "Fire and ambulance", number: "119" },
  { label: "Suicide prevention counseling", number: "109" },
  { label: "Immigration Contact Center (multilingual)", number: "1345" },
  { label: "Danuri multicultural helpline", number: "1577-1366" }
];

/* --------------------------------------------------------------------------
   8. DIGITAL MINISTRY
   -------------------------------------------------------------------------- */
const digitalTopics = [
  { id: "content", title: "Creating Christian content", summary: "Plan posts that serve a real need, point to Jesus and invite a next step.",
    tip: "Every post should answer: what do I want someone to do after seeing this?" },
  { id: "ai-bible", title: "AI for Bible study", summary: "Use AI tools to find cross-references and questions, and always check them against Scripture and a mentor.",
    tip: "Treat AI answers as a starting point for study, never the final word." },
  { id: "short-video", title: "Short-form video", summary: "Reels, Shorts and TikToks of 30–60 seconds with one clear message.",
    tip: "Hook in the first 3 seconds, one idea, one call to action." },
  { id: "online-study", title: "Online Bible study", summary: "Run a simple, repeatable online study that people can join from anywhere in Korea.",
    tip: "Send the passage the day before so people can read ahead." },
  { id: "zoom", title: "Zoom ministry", summary: "Host warm online meetings: welcome people, use breakout rooms and follow up.",
    tip: "Have a co-host who greets newcomers by name in the chat." },
  { id: "social", title: "Social media evangelism", summary: "Move from comments to conversations to invitations, respectfully.",
    tip: "Reply to every sincere comment, and invite people to the community, not just to 'like'." },
  { id: "translation", title: "Translation", summary: "Make content available in English, Tagalog and Korean.",
    tip: "Have a native speaker review translations before publishing." },
  { id: "community-building", title: "Digital community building", summary: "Build group chats that feel safe, friendly and purposeful.",
    tip: "Write simple group rules and appoint two moderators." },
  { id: "website", title: "Website ministry", summary: "Keep a simple website like this one up to date as your ministry's home base.",
    tip: "Add one new post each week; the feed sorts itself." },
  { id: "online-discipleship", title: "Online discipleship", summary: "Walk with someone one-to-one using messages, calls and shared reading plans.",
    tip: "Online is the bridge: plan an in-person meeting as soon as you can." }
];

const digitalDownloads = [
  { title: "Content planning worksheet", file: "assets/downloads/content-planning-worksheet.txt", text: "Plan a month of posts around one theme." },
  { title: "Online Bible study host checklist", file: "assets/downloads/online-bible-study-checklist.txt", text: "Before, during and after your Zoom study." },
  { title: "Group chat guidelines template", file: "assets/downloads/group-chat-guidelines.txt", text: "Simple rules for a safe, welcoming group chat." }
];

/* --------------------------------------------------------------------------
   9. PATHWAYS (drawn as metro lines on pathways.html)
   -------------------------------------------------------------------------- */
const pathways = [
  { id: "visitor", name: "New Visitor", line: "teal", who: "New to Korea or new to DHL",
    stations: [
      { id: "v1", title: "Welcome", text: "Learn what DHL is and who we serve.", href: "about.html" },
      { id: "v2", title: "Life in Korea", text: "Find practical help for language, work and daily life.", href: "korea.html" },
      { id: "v3", title: "Join Community", text: "Join our group chat or a fellowship meeting.", href: "community.html" },
      { id: "v4", title: "Meet a Mentor", text: "Get to know someone who can walk with you.", form: "mentor" }
    ] },
  { id: "seeker", name: "Gospel Seeker", line: "red", who: "Curious about Jesus and the Bible",
    stations: [
      { id: "s1", title: "Gospel Introduction", text: "Read the good news in simple words.", href: "gospel.html#intro" },
      { id: "s2", title: "Gospel Course", text: "Six short lessons you can do at your own pace.", href: "gospel.html#course" },
      { id: "s3", title: "Personal Bible Study", text: "Study a passage with a guide.", href: "gospel.html#studies" },
      { id: "s4", title: "Faith & Salvation", text: "Understand what it means to trust Christ.", href: "gospel.html#topics" }
    ] },
  { id: "disciple", name: "Growing Disciple", line: "blue", who: "A believer who wants to grow",
    stations: [
      { id: "g1", title: "Discipleship Course", text: "Walk through the seven discipleship steps.", href: "discipleship.html#path" },
      { id: "g2", title: "Small Group", text: "Join a Bible study group.", form: "bibleStudy" },
      { id: "g3", title: "Mentoring", text: "Meet regularly with a mentor.", form: "mentor" },
      { id: "g4", title: "Service", text: "Find a place to serve.", href: "leadership.html" }
    ] },
  { id: "leader", name: "Future Leader", line: "mango", who: "Ready to lead and train others",
    stations: [
      { id: "l1", title: "Leadership Training", text: "Enroll in the DHL Leadership Academy.", href: "academy.html" },
      { id: "l2", title: "Practical Ministry", text: "Lead a study, care for people, create content.", href: "academy.html#practicum" },
      { id: "l3", title: "Mentoring", text: "Be mentored and begin mentoring others.", form: "mentor" },
      { id: "l4", title: "Evaluation", text: "Review your growth with your mentor.", href: "academy.html#recognition" },
      { id: "l5", title: "Commissioning", text: "Be recognized and sent to lead.", href: "academy.html#certificates" }
    ] }
];

/* --------------------------------------------------------------------------
   10. COMMUNITY GROUPS (sample: replace with your real groups)
   -------------------------------------------------------------------------- */
const communityGroups = [
  { sample: true, name: "Tuesday Zoom Bible study", when: "Tuesdays, 8:00 PM", where: "Online (Zoom)", lang: "English and Tagalog",
    text: "A relaxed study for workers who can't meet in person on weekdays.", form: "bibleStudy" },
  { sample: true, name: "Filipino fellowship", when: "Sundays, 3:00 PM", where: "Seoul (location shared after sign-up)", lang: "Tagalog and English",
    text: "Worship, a shared meal and time to talk.", form: "community" },
  { sample: true, name: "Korean conversation café", when: "Saturdays, 2:00 PM", where: "Online and in person", lang: "Korean practice",
    text: "Practice everyday Korean with friendly volunteers.", form: "community" },
  { sample: true, name: "Leaders' circle", when: "First Monday of the month, 8:00 PM", where: "Online (Zoom)", lang: "English",
    text: "Encouragement and training for small group leaders.", form: "leadership" }
];

/* --------------------------------------------------------------------------
   11. AI ASSISTANT FAQ (used by demo mode together with the topics above)
   -------------------------------------------------------------------------- */
const assistantFaq = [
  { keywords: ["join", "community", "group chat", "friends", "fellowship"], source: "DHL Community page", href: "community.html",
    answer: "You can join the DHL community through our group chats or a fellowship meeting. The Community page lists every option, and you can ask to be connected with a mentor." },
  { keywords: ["topik", "exam", "test"], source: "Life in Korea: TOPIK", href: "korea.html",
    answer: "TOPIK dates, registration and past papers are on the official TOPIK site (topik.go.kr). Our Life in Korea page links to it, and our Korean conversation café can help you practice." },
  { keywords: ["visa", "arc", "residence", "immigration"], source: "Life in Korea: Korean Society", href: "korea.html",
    answer: "For visas and residence cards, use the official Hi Korea portal or call the Immigration Contact Center at 1345 (multilingual). DHL can't give legal advice, but a mentor can help you find the right office." },
  { keywords: ["korean", "language", "learn korean", "kiip"], source: "Life in Korea: Korean Language", href: "korea.html",
    answer: "Good places to start are the KIIP program (through Socinet) and the King Sejong Institute. Our Life in Korea page also has useful everyday expressions." },
  { keywords: ["job", "work", "employer", "salary"], source: "Life in Korea: Jobs", href: "korea.html",
    answer: "Official job information is on the EPS and Work24 sites. If you're having trouble at work, the Life in Korea page lists helplines, and a DHL mentor can listen and help you find support." },
  { keywords: ["leader", "leadership", "academy", "certificate"], source: "DHL Leadership Academy", href: "academy.html",
    answer: "The DHL Leadership Academy has five levels, from Gospel Foundation to a practicum where you lead in real ministry. Certificates recognize completion of DHL training; they are not government-accredited degrees." },
  { keywords: ["start", "begin", "new", "where"], source: "DHL Pathways", href: "pathways.html",
    answer: "A good first step is to choose a pathway: New Visitor, Gospel Seeker, Growing Disciple or Future Leader. Each one shows you the next station to visit." }
];
