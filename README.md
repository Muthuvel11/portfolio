# Muthuvel M | Full Stack Developer Portfolio

A premium, high-performance portfolio website built with **Next.js**, **TypeScript**, and **Tailwind CSS**. This project showcases my professional experience, technical skills, and featured projects with a focus on clean design and smooth user experience.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.
- **Dynamic Contact Form**: Integrated with **Google Apps Script** to send emails and save messages directly to **Google Sheets**.
- **Performance Optimized**: High Lighthouse scores with optimized images and code splitting.
- **Responsive Design**: Fully fluid layout that looks great on mobile, tablet, and desktop.
- **Analytics**: Integrated with **Google Analytics (gtag)** for visitor tracking.
- **Theming**: Support for dark/light modes with a premium aesthetic.

## 🛠️ Tech Stack

- **Frontend**: Next.js, React, TypeScript, Tailwind CSS, Lucide React (Icons)
- **Backend/Integration**: Google Apps Script (Contact Form)
- **Deployment**: Vercel (Recommended)
- **Analytics**: Google Analytics 4

## 📦 Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/muthu234/Whisper-Ai.git
   cd Whisper-Ai
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment Variables:**
   Create a `.env` file in the root directory and add the following:
   ```env
   NEXT_PUBLIC_GA_ID=your_google_analytics_id
   NEXT_PUBLIC_CONTACT_FORM_URL=your_google_apps_script_url
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to see the result.

## 📧 Contact Form Backend Setup

The contact form uses a Google Apps Script Web App as a serverless backend.

1. Create a new Google Sheet.
2. Go to **Extensions > Apps Script**.
3. Paste the `doPost` script (found in the project documentation or `ContactClient.tsx` comments).
4. Deploy as a **Web App**:
   - Execute as: **Me**
   - Who has access: **Anyone**
5. Copy the Web App URL and paste it into your `.env` file as `NEXT_PUBLIC_CONTACT_FORM_URL`.

## 📂 Project Structure

- `app/`: Next.js App Router pages and layouts.
- `components/`: Reusable UI components (Contact, Project Cards, etc.).
- `data/`: Centralized data files for easy updates (skills, projects, personal info).
- `lib/`: Utility functions and third-party integrations (gtag).
- `public/`: Static assets like images and fonts.

## 👤 Author

**Muthuvel M**
- **Role**: Full Stack Developer
- **Email**: [muthuvel638381@email.com](mailto:muthuvel638381@email.com)
- **LinkedIn**: [muthuvel-m](https://linkedin.com/in/muthuvel-m-53bb4b25a)

---
Built with ❤️ using Next.js
