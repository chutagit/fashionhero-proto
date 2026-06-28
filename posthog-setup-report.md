# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into the FashionHero prototype. The integration adds `posthog-js` and `@posthog/react` to the project, initialises PostHog with `PostHogProvider` in `src/main.jsx`, and instruments 12 custom events across all interactive components in `src/App.jsx`. Events cover the two core user journeys: buyer shopping (search, category browsing, hero CTAs, product and promoted-listing clicks) and seller monetization (panel entry, campaign creation funnel, campaign pauses and removals).

| Event name | Description | File |
|---|---|---|
| `search_performed` | User submits a search query via the navbar or search page form. | `src/App.jsx` |
| `category_browsed` | User clicks a homepage category tile (Nowosci, Dla Mezczyzn, Dla Kobiet, Bestsellery). | `src/App.jsx` |
| `hero_cta_clicked` | User clicks a hero section call-to-action button to start shopping. | `src/App.jsx` |
| `search_filter_applied` | User applies a category filter in the search results page. | `src/App.jsx` |
| `product_clicked` | User clicks on an organic product card to view it. | `src/App.jsx` |
| `promoted_product_clicked` | User clicks on a promoted product slot in home or search results. | `src/App.jsx` |
| `seller_panel_viewed` | User navigates to the seller panel, marking the top of the seller monetization funnel. | `src/App.jsx` |
| `campaign_form_opened` | Seller opens the promote-product form for a specific product. | `src/App.jsx` |
| `campaign_started` | Seller launches a new paid promotion campaign for a product. | `src/App.jsx` |
| `campaign_status_toggled` | Seller pauses or resumes an existing promotion campaign. | `src/App.jsx` |
| `campaign_removed` | Seller removes a promotion campaign from the active list. | `src/App.jsx` |
| `sale_simulated` | Seller triggers a simulated promoted sale from the campaigns dashboard. | `src/App.jsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- [Analytics basics (wizard) dashboard](https://eu.posthog.com/project/211666/dashboard/779423)
- [Campaign launches over time](https://eu.posthog.com/project/211666/insights/KprxQL6q)
- [Promoted vs organic product clicks](https://eu.posthog.com/project/211666/insights/WwfXR2WH)
- [Seller campaign conversion funnel](https://eu.posthog.com/project/211666/insights/NZ4pFhy3)
- [Search activity over time](https://eu.posthog.com/project/211666/insights/LxAilIUN)
- [Campaign churn: pauses and removals](https://eu.posthog.com/project/211666/insights/2OkfvczX)

## Verify before merging

- [ ] Run a full production build (the wizard only verified the files it touched) and fix any lint or type errors introduced by the generated code.
- [ ] Run the test suite — call sites that were rewritten or instrumented may need updated mocks or fixtures.
- [ ] Add the exact PostHog env var names (`VITE_POSTHOG_PROJECT_TOKEN`, `VITE_POSTHOG_HOST`) to `.env.example` and any monorepo/bootstrap scripts so collaborators know what to set.
- [ ] Wire source-map upload (`posthog-cli sourcemap` or your bundler's upload step) into CI so production stack traces de-minify.

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.
