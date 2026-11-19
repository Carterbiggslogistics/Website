# Production deployment

## Build

Use the committed npm lockfile for repeatable installs:

```sh
npm ci
npm run build
```

AWS Amplify builds this repository using `amplify.yml` and deploys the generated `build/` directory. The current production build completes successfully and is approximately 13 MB including images.

## Hosting requirements

- In the Amplify console, add an SPA rewrite so direct requests to React Router paths reach `index.html`. AWS documents the SPA rewrite rule [here](https://docs.aws.amazon.com/amplify/latest/userguide/redirect-rewrite-examples.html#redirects-for-single-page-web-apps-spa).
- Serve hashed files under `build/static/` with long-lived immutable caching. Serve `index.html` with revalidation so new releases take effect promptly.
- Set the public site URL and update canonical and social metadata, plus a sitemap, once the production domain is known. The current metadata is shared across pages and there is no sitemap yet.

## Supabase (optional)

Create production build-time variables from `.env.example` in the hosting provider:

- `REACT_APP_SUPABASE_URL`
- `REACT_APP_SUPABASE_ANON_KEY`

These values are embedded into the client bundle at build time. Use only the Supabase anon/public key in the browser; never put a service role key in a `REACT_APP_` variable. Configure database access policies before enabling production writes. Without these variables, Insights uses its bundled sample content and newsletter sign-up reports that it is not live.

## Before release

- Confirm the Amplify `main` branch has automatic deployments enabled and add the SPA rewrite rule in the Amplify console.
- Configure the Supabase project and database policies if live Insights or newsletter sign-up is required.
- Replace the four remaining leadership portrait placeholders in the People section.
- Add optional Supabase build-time environment variables in Amplify and configure database policies before enabling production writes.
- Verify the homepage, case study deep links, contact form, and newsletter behavior on the deployed domain.
