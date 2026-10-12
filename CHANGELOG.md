# Changelog

What changed in each version of `SETUP-CLAUDE-STRUCTURE.md`. Newest first. Older versions: see [Releases](../../releases).

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
