# STRATA

This is a [Next.js](https://nextjs.org) project for STRATA Studio.

## Getting Started

To run the STRATA website locally, follow these steps:

### 1. Clone the repository

```bash
git clone https://github.com/abhranilsingharoy-cloud/STRATA.git
cd STRATA
```

*(Note: Depending on your local setup, the directory name might vary. Navigate to the appropriate project directory.)*

### 2. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### 3. Set up environment variables

Copy the `.env.example` file to create your own `.env.local` file:

```bash
cp .env.example .env.local
```

Fill in the real values in `.env.local` as needed (such as your site URL, SMTP settings for the contact form, or newsletter API keys).

### 4. Run the development server

Start the Next.js development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

### 5. View the site

Open [http://localhost:4000](http://localhost:4000) with your browser to see the result. 
*(Note: The development server for this project runs on port `4000` by default).*

---

## Editing the Code

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
