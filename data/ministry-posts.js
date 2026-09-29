
/* ==========================================================================
   data/ministry-posts.js — the Latest Ministry Content feed.
   Add a post anywhere in the list; the site sorts by date, newest first.

   type:     "youtube" | "facebook" | "study" | "event" | "announcement"
             | "testimony" | "resource"
   date:     "YYYY-MM-DD"
   videoId:  (YouTube only) the part after "watch?v=" in the video link
   image:    thumbnail path or URL (optional)
   category: short label shown on the card (optional)
   sample:   true shows a "Sample" badge; delete it for real posts
   ========================================================================== */
const ministryPosts = [];

/* Shown on the Media page when the YouTube API isn't configured or fails.
   category: "message" | "study" | "testimony" | "korea" | "leadership" */
const fallbackVideos = [
  { sample: true, videoId: "", title: "Welcome to DHL", date: "2026-09-27", category: "message",
    description: "From connection to commission.", thumbnail: "assets/images/thumb-youtube.svg" },
  { sample: true, videoId: "", title: "Gospel course, lesson 1: God who made you", date: "2026-09-20", category: "study",
    description: "Genesis 1 and Acts 17.", thumbnail: "assets/images/thumb-study.svg" },
  { sample: true, videoId: "", title: "A sample testimony", date: "2026-09-15", category: "testimony",
    description: "How community led to faith.", thumbnail: "assets/images/thumb-testimony.svg" },
  { sample: true, videoId: "", title: "Korean at the hospital", date: "2026-09-08", category: "korea",
    description: "Ten useful phrases.", thumbnail: "assets/images/thumb-korea.svg" },
  { sample: true, videoId: "", title: "Servant leadership in Mark 10", date: "2026-09-01", category: "leadership",
    description: "What makes a leader great?", thumbnail: "assets/images/thumb-announcement.svg" }
];

/* Words used to sort YouTube videos into Media page categories. */
const VIDEO_CATEGORY_KEYWORDS = {
  korea: ["korean", "korea", "topik", "life in korea"],
  testimony: ["testimony", "my story"],
  leadership: ["leader", "leadership", "academy", "mentor"],
  study: ["bible study", "study", "lesson", "course"],
  message: ["message", "sermon", "preaching"]
};
