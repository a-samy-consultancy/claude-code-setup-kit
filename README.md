# 🧠 Claude Code Setup Kit

**The best practices of the people who built Claude Code, made simple.**
Turn Claude Code into a disciplined build team in 10 minutes. One file. Any project. No setup skills needed.

Built by **[Abdo Samy](https://abdosamy.com)** · [LinkedIn](https://www.linkedin.com/in/abdallahsamy) · [License: CC BY 4.0](LICENSE)

---

## 👋 Why I built this

> I'm Abdo. I'm obsessed with learning from the best. I constantly watch how the **Anthropic engineers who built Claude Code** use it themselves, study the best practices they share, and dig into how top engineers set up their projects.
>
> Then I test it all on my own live products, keep what works, build on it, and drop the noise.
>
> **This kit is the result: the best of all of it, in one bucket.** Simple, clear and ready to use, especially if you're a vibe coder or a business owner, not a developer.

| | Built on | What that means for you |
|---|---|---|
| 🏛️ | **Anthropic's official best practices** | Project memory, helper agents, hooks and permissions, set up the way [Anthropic recommends](https://www.anthropic.com/engineering/claude-code-best-practices) |
| 👩‍💻 | **How Claude Code's own creators work** | Plan before building, verify every change, let Claude check its own work ([docs](https://code.claude.com/docs/en/best-practices)) |
| 🏗️ | **Proven engineering practice** | Tests, lint, code review, safe deploys, least-access security, a log of every decision |
| 🧪 | **Battle-tested by me** | Running every day on my own live websites and AI agents |

<sub>Independent project. Not affiliated with or endorsed by Anthropic.</sub>

---

## 😩 The problem

Claude Code is brilliant, but out of the box it **forgets everything** between sessions, works without guardrails, and can push a broken change straight to your live app.

## ✅ The fix

Drop **one file** into your project. Claude interviews you, reads your code, and builds a proven working structure around it:

| | What you get | Why it matters |
|---|---|---|
| 🧠 | **Project memory** (`CLAUDE.md` + `docs/`) | Every session starts knowing what's live, what's next and what was decided |
| 📏 | **House rules** (`.claude/rules/`) | Security, testing, clean code and plain-language communication, every time |
| 🤖 | **A team of 7 helper agents** | Cheaper, faster models search, build, test and check; the main model plans and reviews |
| 🚦 | **Lanes: 🟢 Small · 🟡 Medium · 🔴 Large** | The riskier the change, the more checks it gets, automatically |
| 🛡️ | **Push guard** | Blocks pushes to the wrong place, force pushes, and pushes with failing checks |
| 🧪 | **Automatic tests + lint** | A broken change never reaches your users |
| 🔄 | **`/update-docs`** | One command saves your progress for the next session |

---

## ⚡ Quick start (3 steps)

1. **Download** [`SETUP-CLAUDE-STRUCTURE.md`](SETUP-CLAUDE-STRUCTURE.md) (open it → "Download raw file").
2. **Drop it** in the root folder of your project. A brand-new empty folder works too.
3. **Open Claude Code** in that folder and say:

```
Follow SETUP-CLAUDE-STRUCTURE.md
```

Claude asks you 5 short questions, shows you the plan, and **waits for your "yes"** before changing anything.

> 🔐 Claude Code protects the `.claude/` folder, so it will ask permission before writing each file there. That's expected: choose **Allow**.

---

## 👥 Who it's for

| You are | You get |
|---|---|
| 💼 **Business owner** | A safe way to build with AI without being a developer. Plain words, tables, 🟢🟡🔴 status. |
| ✨ **Vibe coder** | Structure and guardrails, so your fast-moving project doesn't fall apart |
| 🛠️ **IT person** | Clear boundaries: what Claude does alone vs. what comes to you as a ready-to-action request |
| 👩‍💻 **Developer** | A sharp orchestrator–worker setup, push guard and test discipline, without the hand-holding |

Works for **new ideas and existing repos**. Best on **Cloudflare Workers**, and adapts to any stack (Vercel, Node, Python and more).

---

## 🔐 Safety promises

- ✋ **Asks before it acts.** No structural change without your clear "yes".
- 🚫 **Never pushes without asking.** Pushing may publish your app, so you decide.
- 🔑 **Never stores secrets.** Key and token names only, never values.
- 🧱 **Never changes how your app works.** Setup adds structure, docs, checks and tests. Nothing else.
- 🧪 **Tests can't touch real services.** Secrets are blanked during tests.

---

## ❓ FAQ

<details>
<summary><b>I'm not on Cloudflare. Does it still work?</b></summary>

Yes. Claude detects your stack and adapts the checks, tests and rules. Cloudflare-only parts are skipped.
</details>

<details>
<summary><b>I already have a CLAUDE.md. Will it be overwritten?</b></summary>

No. Claude keeps your content, moves it into the right place, and git keeps the old version.
</details>

<details>
<summary><b>Do I need to know git or the terminal?</b></summary>

No. Claude explains each step in plain words, one step at a time, and does the technical work.
</details>

<details>
<summary><b>Windows?</b></summary>

The push guard is a bash script. Use WSL or Git Bash. Claude tells you what to install.
</details>

<details>
<summary><b>Which AI provider does it use for AI apps?</b></summary>

It recommends OpenRouter (one key, many models) but never forces it. If you already use a provider, it stays.
</details>

---

## 📜 Versions

The latest version always lives here. See [CHANGELOG.md](CHANGELOG.md) for what changed, and [Releases](../../releases) for older versions.

## 💬 Feedback

Used it? Hit a snag? Have an idea? I read everything.

- 📝 **[Share feedback](../../issues/new/choose)** (GitHub account needed)
- 💼 **[Message me on LinkedIn](https://www.linkedin.com/in/abdallahsamy)**

## ⚖️ License

[CC BY 4.0](LICENSE): free to use, share and adapt, including commercially. If you share or adapt the file, **credit Abdo Samy and link back** to this repo.

---

<p align="center"><b>Built by <a href="https://abdosamy.com">Abdo Samy</a></b> · AI consultant · <a href="https://abdosamy.com">abdosamy.com</a></p>
