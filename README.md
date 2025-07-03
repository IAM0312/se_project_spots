# Project 3: Spots

## Project Description

Spots is a simple, interactive social media web app where users can:

- Upload new photos
- Delete their own photos
- Like and unlike other users' photos
- Edit their profile details

![Web Image](/vendor/Spots%20App.png)
![Mobile Web Image](/vendor/Spots%20App%20Mobile%20Version.png)

The interface is responsive and adjusts seamlessly across desktop, tablet, and mobile screen sizes.

## Live Demo

## Features

- **User Profile Section**

  - Displays user avatar, name, and bio
  - "Edit Profile" button opens a pop-up form for updating details

- **New Post Creation**

  - "New Post" button opens a form to upload a photo and add a title

- **Photo Gallery**

  - Grid of cards displaying uploaded photos
  - Each card shows an image, title, and a like button
  - Like button toggles liked state and updates like count

- **Responsive Design**
  - Mobile-first layout with media queries
  - Flexbox and CSS Grid used for fluid layouts

## Technologies Used

- **HTML5** for semantic structure
- **CSS3** with Flexbox/Grid for layout and BEM naming convention
- **JavaScript** for interactivity (upload, delete, like actions)
- **Git** for version control
- **BEM** methodology has been used for the files structure as well as for the HTML and CSS.

## Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/IAM0312/se_project_spots.git
   cd se_project_spots
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm start
   ```

## Usage

- Click **Edit Profile** to change your avatar, name, or bio.
- Click **New Post** to add a photo with a title.
- Click the **heart icon** on each card to like or unlike a photo.
- Click the **trash icon** (if implemented) to delete your own posts.

## Folder Structure

```
/
├── pages/
│   └── index.css
├── images/
│   ├── avatar.jpg
│   ├── logo.svg
│   └── ...photo assets...
├── index.html
├── README.md
└── package.json
```

## Future Improvements

- **Authentication & User Accounts**: Add login, signup, and user sessions.
- **Backend Integration**: Connect to a database (e.g., MongoDB, PostgreSQL) to persist data.
- **Real-time Updates**: Implement WebSockets for live feed updates when new posts or likes occur.
- **Image Optimization**: Lazy-load images and serve responsive image sizes.
- **Accessibility Enhancements**: Add ARIA roles and keyboard navigation support.

---
