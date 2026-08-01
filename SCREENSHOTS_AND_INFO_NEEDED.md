# What's Still Needed From Wathiq

Everything the site currently shows is built from confirmed facts or clearly labeled as a fictional/sample interface. These are the concrete items needed to replace placeholders with the real thing.

## Product screenshots

- Real, redacted screenshots of the client dashboard (verification list, detail view, webhook delivery status, team access screen) — to replace the sample UI on `/client-dashboard` and in the homepage "Platform" section.
- Real, redacted screenshots or screen recordings of the mobile app verification journey (start, capture, submit, result) — to replace the sample UI on `/mobile-app` and the homepage.
- Confirm: is "Sample interface — fictional data, pending final screenshots" acceptable framing, or should placeholders be removed entirely until real assets exist?

## ePassport coverage

- The approved list of the 140 supported countries/passport types (with versions, if support varies by version), and a source we can treat as authoritative going forward.
- A process/cadence for keeping `/epassport-coverage` current, and the actual last-updated date for the current list (the site currently makes no specific date claim, correctly, since none was available).
- Confirmation of the exact meaning of "140": passports issued by 140 countries (this was confirmed during this engagement) — flag if that ever changes.

## API & developer docs

- Confirmation of whether the API is RESTful (currently not claimed either way).
- Real endpoint names, authentication scheme, request/response parameters, webhook event names, and error codes — none of these are shown on `/developers` today; only a generic, non-specific architecture diagram (Client → API → Verification → Result → Webhook → Dashboard) is shown.
- A public API documentation URL, if/when one exists, to link from `/developers`.

## Security & Privacy

- Completed technical/legal security questionnaire: encryption specifics, hosting location(s), data retention periods, access controls (e.g. RBAC), incident management process, subprocessors.
- This directly unblocks `/security`, `/privacy`, and the new `/service-data` page, which currently carry honest "we're finalizing this documentation" holding statements instead of specifics.
- Confirmation of any real certifications (SOC 2, ISO, pen-test cadence) — none are currently claimed; all were removed in Phase 1 as unverified.

## Business/legal

- Approved list of target sectors for use-case content (currently the homepage "Use Cases" section and `/industries` carry forward the existing generic, non-claiming sector descriptions rather than new invented ones).
- A real URL for "Client Login" in the header — currently a placeholder link.
- Confirmation of current phone number, business hours, and whether support is genuinely 24/7 anywhere (currently not claimed).
- Real social media URLs (LinkedIn etc.) — footer icons currently link to `#`.
- Confirmation that `NEXT_PUBLIC_GA_ID` is/isn't set in production, so the Cookie Notice's analytics section stays accurate.
- Any genuine, documented, customer-approved case study to replace the `/case-studies` holding page.
- First blog articles, once written and approved, to replace the `/blog` holding page.
