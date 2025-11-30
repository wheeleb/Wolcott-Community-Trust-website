# Wolcott Community Trust Website

A responsive, accessible React application built for the Wolcott Community Trust.

## Quick Start (Local Development)

1.  **Install Dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

2.  **Run Locally:**
    ```bash
    npm start
    # or
    yarn start
    ```
    Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Content Management

This site is designed to be easily editable by non-developers.

*   **Trustee List & Events:** Edit `constants.ts`. This file contains the list of trustees, events, and contact info in a simple format.
*   **Images:** Currently using placeholder images. Replace URLs in `constants.ts` with real image paths (e.g., `/images/event1.jpg`) after adding files to the `public/` folder.

## Configuration & Environment

The application uses standard React environment variables.

*   `REACT_APP_API_KEY`: (Optional) If you integrate a real backend later (e.g., Firebase).
*   **Email:** Currently, the contact form logs to the console. To make it functional, integrate a service like EmailJS or Formspree in `pages/Contact.tsx`.

## Deployment

### Build
Run the build command to create a static production bundle:
```bash
npm run build
```

### Firebase Hosting
1.  Install Firebase CLI: `npm install -g firebase-tools`
2.  Login: `firebase login`
3.  Initialize: `firebase init` (Select Hosting, choose `build` as public directory, configure as single-page app: Yes)
4.  Deploy: `firebase deploy`

### Netlify
1.  Drag and drop the `build` folder into the Netlify dashboard.
2.  Or connect your Git repository and set the build command to `npm run build` and publish directory to `build`.

## Architecture Notes
*   **Routing:** Uses `HashRouter` to ensure compatibility with all static hosting providers without complex server redirects.
*   **Styling:** Tailwind CSS (loaded via CDN for this preview version, recommend installing local package for production).
*   **Icons:** Custom SVG components in `components/Icons.tsx` to remove external dependencies.
