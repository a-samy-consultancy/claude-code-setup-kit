# Changelog

What changed in each version of `SETUP-CLAUDE-STRUCTURE.md`. Newest first. Older versions: see [Releases](../../releases).

## v3.2 · 2026-10-12

- 🚦 **Push guard fix (both guards):** a `~` path (`git -C ~/repo push`, `cd ~/repo && git push`) now resolves to the home folder. Before, the guard blocked it as "not inside a git repo".

## v3.1 · 2026-10-12

- 🚦 **Push guard fix (both guards):** the force-push check now looks only at the `git push …` part of a command. Before, a ` + ` or `-f` anywhere (e.g. "backup + restore" in a commit message) blocked the push by mistake. `+main`, `-f` and `--force` on the push itself are still blocked. Tested with 14 cases.

## v3.0 · 2026-10-12

Safer by default, plus three optional extras that protect your whole computer, not just one project.

- 🙈 **Secret files blocked:** `.claude/settings.json` now denies reading `.env` / `.dev.vars` files, anchored to the project root. `security.md` explains what the rules don't cover (`grep -r`, scripts) and the stronger options (sandbox, password-manager references)
- 🔍 **Leak check for public repos** (optional, Step 6c): a private term list kept outside the repo, scanned on every push; fails closed if the list is missing
- 🚦 **Safety-net push guard** (optional, Step 6d): a personal-level guard for sessions opened in a parent folder, where repo guards don't load. Skips when the repo's own guard is running, so there are no double checks
- 💾 **Config backup + restore fire drill** (optional, Step 6d): whitelist-only backup of `~/.claude`, settings snippets instead of `settings.json`, a `RESTORE.md` checklist and a `/backup-claude` skill
- 📋 The plan step now offers the optional extras, each with a one-line "why"

## v2.0 · 2026-10-12

First public release. Works for any owner (business owner, vibe coder, IT person, developer) and any repo, new or existing.

- 🤖 **7 helper agents:** Explore, summarizer, test-runner (`haiku`); implementer, researcher, visual-qa, seo-a11y-auditor (`sonnet`)
- 🚦 **Lanes 🟢🟡🔴** and a workflow sized to the project's risk level
- 🛡️ **Push guard hook:** blocks the wrong remote, force pushes and failing checks
- 🗣️ **Visual communication style** that adapts to how technical the owner is
- 👥 **`boundaries.md`:** what Claude does alone vs. what needs the owner or IT, with ready-to-send requests
- 🧹 **Clean code:** `/simplify` + `/code-review` before every push, `/security-review` on 🔴 changes
- 🧪 **Lint in the build**, secrets blanked in tests, real database migrations in tests, lint-only mode for static sites
- 🔐 **Leak check** so repo-only files are never published; optional read-only preview behind sign-in
- 🤖 **AI apps:** OpenRouter recommended, never enforced
- 📄 **Docs** with 🚦 At a glance, 📋 Summary and 🧯 Problem → fix sections

## v1 · 2026

Private first version for one team's internal apps: `CLAUDE.md`, rules, `docs/`, `/update-docs`, 2 helper agents, Vitest tests.
