
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
const fallbackVideos = [];

/* Words used to sort YouTube videos into Media page categories. */
const VIDEO_CATEGORY_KEYWORDS = {};
