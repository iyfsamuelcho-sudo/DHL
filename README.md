# DHL – Diaspora Hub for Leaders

**From Connection to Commission**

A free, static website for GitHub Pages: a digital ministry hub that helps foreigners in Korea, especially Filipinos, move from receiving help to becoming disciples, leaders and people who develop other leaders.

**Reach → Connect → Gospel → Disciple → Train → Serve → Multiply**

Built with plain HTML, CSS and JavaScript. No server, database, build step, paid service or paid AI API.

---

## Contents

1. [What DHL is](#1-what-dhl-is)
2. [Project structure](#2-project-structure)
3. [Run it on your computer](#3-run-it-on-your-computer)
4. [Upload to GitHub](#4-upload-to-github)
5. [Turn on GitHub Pages](#5-turn-on-github-pages)
6. [Connect YouTube](#6-connect-youtube)
7. [Connect Facebook](#7-connect-facebook)
8. [Add ministry posts](#8-add-ministry-posts)
9. [Add courses and lessons](#9-add-courses-and-lessons)
10. [Add events](#10-add-events)
11. [How the newest-first feed works](#11-how-the-newest-first-feed-works)
12. [How the AI demo works](#12-how-the-ai-demo-works)
13. [Connecting a real AI/RAG backend later](#13-connecting-a-real-airag-backend-later)
14. [Why API keys must not be exposed](#14-why-api-keys-must-not-be-exposed)
15. [Replace the demo content](#15-replace-the-demo-content)
16. [Customize the DHL branding](#16-customize-the-dhl-branding)
17. [What works today vs. what needs a backend](#17-what-works-today-vs-what-needs-a-backend)

---

## 1. What DHL is

DHL is a central digital ministry hub for foreigners and diaspora communities in Korea. Social media attracts people; DHL gathers them; community connects them; discipleship develops them; leadership training equips them; mission sends them; and leaders multiply.

The site is built around one idea: **visitors should never get lost.** Every page shows:

- **Where am I?** A "You are here" strip under the page title shows the current step of the seven-step journey.
- **What can I learn?** The page's topics, lessons or resources.
- **What should I do next?** A "next step" band at the bottom of every page.
- **How can I connect with someone?** Mentor, community and prayer buttons throughout, plus the "Ask DHL AI" button.

The design uses a **Seoul-metro route map** as its visual language. Foreigners in Korea already know how to read one. The ministry journey is one line with seven stations, the four pathways are four colored lines, and the home page hero shows social media lines converging on the DHL hub and continuing to mission.

## 2. Project structure

```
/
├── index.html              Home: hero, journey, areas, pathways, academy, feed, and more
├── pathways.html           Four pathways with stations you can mark as done
├── gospel.html             Gospel topics (searchable), Beginner Gospel course, Bible studies
├── discipleship.html       Seven-step discipleship pathway and topics
├── leadership.html         Leadership courses with practical assignments
├── korea.html              Life in Korea: resources, Korean expressions, help numbers
├── digital-ministry.html   Digital ministry topics and downloadable templates
├── academy.html            Leadership Academy: 5 levels, courses, certificates
├── media.html              Video library, social media hub, Facebook embed
├── community.html          Group chats, groups, the online-to-offline bridge
├── events.html             Upcoming and past events with filters
├── ai-assistant.html       Full-page AI assistant and how it works
├── about.html              What DHL is, the model, multiplication, architecture
├── contact.html            Help, prayer, Bible study, leadership and community
├── 404.html                "Page not found" page
│
├── css/
│   ├── style.css           Colors, fonts, layout, header, footer, heroes
│   ├── components.css      Metro lines, cards, pathways, academy, chat and more
│   └── responsive.css      Tablet and desktop layouts, reduced motion
│
├── js/
│   ├── content.js          ← SETTINGS + section content (edit this first)
│   ├── main.js             Shared code: header, menu, feed, pages, progress
│   ├── youtube.js          Loads your newest YouTube videos
│   ├── pathways.js         Journey map, pathways, discipleship path
│   ├── academy.js          Academy levels, courses, certificates
│   └── ai-chat.js          AI assistant (demo mode and live mode)
│
├── data/
│   ├── courses.js          Academy levels, courses, certificates
│   ├── lessons.js          Beginner Gospel course and Bible studies
│   ├── events.js           Events
│   └── ministry-posts.js   Feed posts and fallback videos
│
├── knowledge/              Folders for future AI source documents (not used yet)
├── assets/
│   ├── logo/               DHL logo
│   ├── icons/              Favicon and phone home-screen icon
│   ├── images/             Sharing image and placeholder thumbnails
│   └── downloads/          Templates offered on the Digital Ministry page
├── sitemap.xml, robots.txt, .nojekyll
└── README.md
```

**Where to edit what**

| To change… | Edit |
|---|---|
| Links, forms, YouTube, Facebook, AI settings | `js/content.js`, section 1 |
| Gospel, discipleship, leadership, Korea, digital topics, pathways, groups | `js/content.js`, sections 2–11 |
| Feed posts and fallback videos | `data/ministry-posts.js` |
| Events | `data/events.js` |
| Academy courses and certificates | `data/courses.js` |
| Gospel course lessons and Bible studies | `data/lessons.js` |
| Page wording and SEO text | the `.html` files |

## 3. Run it on your computer

You can double-click `index.html` to open it, and most things work. For a more realistic test, especially for YouTube, run a small local web server in the project folder:

```
python3 -m http.server 8000
```

Then open http://localhost:8000. (On Windows, use `python` instead of `python3`. With VS Code, the "Live Server" extension works too.)

## 4. Upload to GitHub

1. Sign in at github.com and click **New repository**. Name it (for example `dhl`), choose **Public**, and click **Create repository**.
2. Click **uploading an existing file**.
3. Unzip the project, open the folder, select **everything inside it** and drag it into the browser. Folders upload with their contents.
4. Click **Commit changes**.

`index.html` must be at the top level of the repository, not inside another folder. The `.nojekyll` file may be hidden on your computer; the site works without it.

## 5. Turn on GitHub Pages

1. In the repository, open **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
3. Choose branch **main** and folder **/ (root)**, then **Save**.
4. After a minute or two, your address appears, for example `https://your-username.github.io/dhl/`.

All links are relative, so they work at that address. Then find and replace `https://your-username.github.io/your-repository` with your real address in every `.html` file, `sitemap.xml` and `robots.txt`.

## 6. Connect YouTube

Without a key, the Media page shows `fallbackVideos` from `data/ministry-posts.js`. With a key, your newest uploads load automatically.

1. **Channel ID:** YouTube Studio → Settings → Channel → Advanced settings → copy the Channel ID (starts with `UC`).
2. **API key:** at console.cloud.google.com, create a project, enable **YouTube Data API v3**, then go to **Credentials → Create credentials → API key**.
3. **Restrict the key.** This step is essential:
   - Application restrictions → **Websites** → add `https://your-username.github.io/*` (and `http://localhost:8000/*` while testing).
   - API restrictions → **Restrict key** → only **YouTube Data API v3**.
4. In `js/content.js`:
   ```js
   const YOUTUBE_API_KEY = "AIzaSy...";
   const YOUTUBE_CHANNEL_ID = "UC...";
   ```

The site reads your channel's uploads playlist, which costs **1 quota unit** per request (search would cost 100). It caches results in the visitor's browser for an hour. If anything fails, it quietly shows the fallback videos.

Videos are sorted into Media page categories (Message, Bible study, Testimony, Life in Korea, Leadership) by words in their titles. Edit the words in `VIDEO_CATEGORY_KEYWORDS` in `data/ministry-posts.js`.

## 7. Connect Facebook

In `js/content.js`:

```js
const FACEBOOK_PAGE_URL = "https://www.facebook.com/your-page";
```

**What works automatically:** the Media page uses Facebook's official **Page Plugin** to show your latest public posts. It loads only when a visitor clicks "Show Facebook posts", which keeps the site fast and doesn't share visitors' data with Facebook until they choose. Your Page must be public. Some browsers and privacy extensions block the embed, so a link to your Page is always shown.

**What doesn't, and why:** automatically pulling Facebook posts into the DHL feed would need a Page access token. That is a secret, and it can't be placed in a public website. Until there's a backend, add important Facebook posts to the feed by hand (next section). It takes about a minute each.

Also set `social.facebookGroup`, `social.messenger`, `social.kakaoOpenChat` and the other links in `CONFIG.social`. Empty links are hidden automatically.

## 8. Add ministry posts

Open `data/ministry-posts.js`, copy an entry, paste it anywhere in `ministryPosts`, and edit it:

```js
{
  type: "facebook",            // youtube | facebook | study | event | announcement | testimony | resource
  title: "Prayer for new workers",
  date: "2026-10-02",          // YYYY-MM-DD
  description: "Join us in praying for friends starting new jobs.",
  url: "https://www.facebook.com/your-page/posts/123",
  image: "assets/images/thumb-facebook.svg",
  category: "Prayer"
},
```

- For **YouTube** posts, add `videoId` (the part after `watch?v=`). The video then plays in a pop-up on your site.
- Put your own images in `assets/images/` (landscape, about 1280 × 720) and set `image: "assets/images/your-photo.jpg"`.
- Every entry is wrapped in `{ }` and followed by a comma. If the page goes blank after an edit, a comma or quotation mark is usually missing.

## 9. Add courses and lessons

- **Academy courses:** in `data/courses.js`, add to a level's `courses` list:
  ```js
  { id: "a3-worship", title: "Leading worship", lessons: 4, format: "Workshop" }
  ```
  Each `id` must be unique. Add `href: "page.html"` to link the course title.
- **Gospel course lessons and Bible studies:** `data/lessons.js`.
- **Topic cards** (Gospel, Discipleship, Leadership, Digital, Life in Korea): `js/content.js`, sections 4–8.
- **Pathways and their stations:** `js/content.js`, section 9. A station can link to a page (`href`) or open a form (`form: "mentor"`).

**Theological content.** Every Gospel and discipleship summary is marked `status: "draft"` and shows a "Draft for review" badge. Replace the wording with DHL-approved teaching, then change it to `status: "approved"`. The drafts only summarize what the listed Bible passages say; they're starting points, not DHL doctrine.

## 10. Add events

In `data/events.js`, copy an entry and edit it. Times use 24-hour format:

```js
{ title: "Bible camp", date: "2026-12-26", startTime: "09:00", endTime: "17:00",
  location: "Gapyeong", category: "Bible Camp",
  description: "Two days of teaching and fellowship.",
  registrationUrl: "https://forms.gle/...", contact: "camp@your-dhl-ministry.org" },
```

Upcoming events are sorted soonest first. Events whose date has passed move to "Past events" automatically. Categories become filter buttons, and each event gets an "Add to Google Calendar" link.

## 11. How the newest-first feed works

When the home page loads, it takes every entry in `ministryPosts` and adds your newest YouTube uploads (if the API is configured), skipping videos already in your list. It then sorts everything by `date`, newest first. The newest post is shown large, the rest in a grid. Visitors can filter by type and load more. You never rearrange anything by hand.

## 12. How the AI demo works

The "Ask DHL AI" button appears on every page, and `ai-assistant.html` has a full-page version.

In **demo mode** (`AI_CONFIG.enabled: false`, the default), **no AI is used**. The assistant:

1. breaks the question into keywords,
2. searches the DHL content already on the site (topics, lessons, studies, Life in Korea resources and the `assistantFaq` list in `content.js`),
3. shows the best-matching passage **word for word**, with its sources and Bible references,
4. recommends a DHL mentor for theological questions, and whenever nothing matches.

Every demo answer is labelled "Demo mode: this text comes directly from DHL content, not from an AI." This honestly demonstrates the retrieval half of RAG.

**Safety.** Messages mentioning suicide, self-harm, abuse, violence or an emergency skip the search. They get a caring reply with Korean emergency numbers (112, 119, 109 suicide prevention, 1345 multilingual immigration help) and the mentor button. Check these numbers periodically in `koreaHelpNumbers` in `content.js`.

Conversations are not stored anywhere.

## 13. Connecting a real AI/RAG backend later

### The AI assistant

A secure backend (a "proxy") sits between the website and the AI provider:

```
Browser  ──question──▶  Your backend  ──▶  Search approved DHL knowledge base
                              │                    │
                              │◀── relevant passages
                              │
                              ├──▶  AI provider (secret key stored here only)
                              │◀── answer
Browser  ◀── answer + sources ┘
```

1. Build an endpoint, for example `https://api.your-dhl.org/ai/ask`. Serverless platforms such as Cloudflare Workers, Vercel Functions or Supabase Edge Functions work well and have free tiers (check their current terms).
2. The site sends:
   ```json
   { "question": "What is repentance?", "history": [{ "role": "user", "content": "..." }], "page": "/gospel.html" }
   ```
3. Your endpoint returns:
   ```json
   {
     "answer": "Repentance means...",
     "sources": [{ "title": "DHL Gospel Course, lesson 5", "url": "https://.../gospel.html#course" }],
     "refs": ["Acts 3:19"],
     "needsMentor": false
   }
   ```
4. In `js/content.js`:
   ```js
   const AI_CONFIG = { enabled: true, endpoint: "https://api.your-dhl.org/ai/ask", ... };
   ```

If the endpoint fails, the site falls back to demo search automatically. The safety handling (section 12) stays in the browser either way; add the same checks on the server.

**Building the knowledge base (RAG):**

1. Put **approved** documents in `knowledge/gospel/`, `knowledge/discipleship/` and the other folders. Only use material DHL owns or has written permission to use. Don't upload copyrighted books without permission.
2. On the backend, split documents into short passages and create embeddings (a searchable index).
3. For each question, retrieve the top passages and instruct the model to answer **only** from them, cite them, and set `needsMentor: true` when the passages don't answer the question or the question is personal or sensitive.
4. Return short quotations and summaries, never whole chapters or books.
5. Have DHL leaders review a sample of answers regularly.

The `knowledge/` folder is excluded from search engines in `robots.txt`. Anything in a public GitHub repository is public, though, so keep unpublished or licensed material in a private repository or on the backend instead.

### Accounts, progress and data

Today, pathway and course progress is saved in the visitor's browser only (`DHL.Progress` in `main.js`), and the site says so. To move to accounts:

- Set `CONFIG.backend = { enabled: true, baseUrl: "https://api.your-dhl.org" }`. The site will then request `GET /posts` and `GET /events` (returning the same JSON shapes as the data files), and fall back to local files if the backend is unavailable.
- Replace the four methods of `Progress` (`read`, `write`, `isDone`, `toggle`) with API calls. The pages already use only these methods.
- Planned entities: Users, Profiles, Courses, Lessons, Enrollments, Progress, Groups, Mentors, Disciples, Leaders, Assignments, Certificates, Events, Prayer Requests, Ministry Posts and AI Conversations.

Real sign-in must use a proper authentication service on the backend. The site contains no login and does not pretend to.

## 14. Why API keys must not be exposed

Everything in a GitHub Pages site, including every JavaScript file, can be read by anyone.

- **YouTube browser key: acceptable when restricted.** It reads only public data, and with website and API restrictions it can't be used elsewhere. The worst case is someone using up your free daily quota.
- **AI provider keys (OpenAI, Anthropic, Google and others): never.** Anyone could copy the key and run up charges on your account, or misuse it in your name. That is why `AI_CONFIG` has only an `endpoint`, and the key lives on the backend.
- **Facebook Page tokens, database passwords, service accounts: never.**

If a secret key is ever committed by mistake, **revoke it immediately** in the provider's dashboard. Deleting the file isn't enough, because Git keeps history.

## 15. Replace the demo content

Demo items are marked `sample: true` (posts, events, groups, videos) or `status: "draft"` (topics and lessons), and they show a badge.

1. Replace or delete the sample posts, videos, events and groups.
2. Replace the draft teaching with DHL-approved wording and set `status: "approved"`.
3. Rewrite "Our story" in `about.html`. Don't list partnerships, people or credentials that aren't confirmed.
4. Set every form URL in `CONFIG.forms` to your real Google Forms.
5. When everything is real, set `showDemoLabels: false` in `CONFIG`.

**Forms to create** (Google Forms is free): prayer request, contact, Bible study sign-up, mentor request, community sign-up, Academy application and event registration. Paste each form's share link into `CONFIG.forms`. An empty link hides its button.

## 16. Customize the DHL branding

- **Name, tagline, description, email:** `CONFIG` in `js/content.js`. Page titles and descriptions are written in each `.html` `<head>` so search engines can read them; update those with find-and-replace.
- **Logo:** replace `assets/logo/dhl-logo.svg` (square SVG or PNG), and `assets/icons/favicon.svg` and `apple-touch-icon.png` (180 × 180).
- **Sharing image:** replace `assets/images/og-image.png` (1200 × 630).
- **Colors:** edit the variables at the top of `css/style.css`. `--navy` is the main color, `--mango` the action color, and `--teal`, `--red`, `--blue` the pathway line colors.
- **Fonts:** Sora (headings) and Noto Sans / Noto Sans KR (body, including Korean text), from Google Fonts.
- **Hero photo:** to use a photo behind the home hero instead of the route map, add a `style="background-image: linear-gradient(rgba(13,36,64,.85), rgba(13,36,64,.85)), url('assets/images/your-photo.jpg')"` attribute and the class `has-photo` to the `<section class="hero">` in `index.html`. Use a photo you have permission to use.
- **Bible links:** `CONFIG.bibleVersion` sets which version BibleGateway opens (for example `"NIV"`, `"ESV"` or `"KJV"`).

## 17. What works today vs. what needs a backend

| Works today on GitHub Pages | Needs a backend later |
|---|---|
| All pages, navigation and mobile menu | Member accounts and sign-in |
| Newest-first ministry feed and filters | Progress saved across devices |
| YouTube newest videos (with a restricted key) | Automatic Facebook posts in the feed |
| Facebook Page Plugin embed | Group, mentor and disciple management |
| Pathways, discipleship and Academy progress (this browser only) | Practicum tracking and evaluations |
| Gospel topic search, lessons and study guides | Issuing certificates |
| Events with filters and calendar links | Prayer request database (use Google Forms for now) |
| AI assistant in demo mode (search, sources, safety) | AI answers with RAG over approved documents |
| Forms through Google Forms | |

**Accessibility:** semantic landmarks, a skip link, keyboard-operable menu, chat and dialogs (Escape closes them), visible focus, labelled controls, live announcements for progress changes, readable sizes and contrast, and reduced-motion support.

**Tested layouts:** 360, 390, 768, 1024 and 1440 pixels wide.
