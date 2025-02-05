# 🏨 Hotel Quest - A Complete Hotel Booking System

## Overview

**Hotel Quest** is a fully functional hotel booking web application designed to provide users with a seamless experience to browse, book, and review rooms. The app allows users to explore room listings, make bookings, and manage their reservations. It also includes features such as user authentication, reviews, booking cancellation, and more. Built with **React.js** and **Firebase Authentication**, this platform makes hotel booking easier for users while offering an attractive design with several key features.

Live demo: [Hotel Quest - Live Link](https://hotel-quest-87bc7.web.app/)

## Main Features 📋

### Homepage Design 🏡
- **Banner**: A slider section displaying a heading title, short description, and a button redirecting users to the Rooms page.
- **Map**: Display the hotel's location using an embedded map (react-leaflet).
- **Featured Rooms**: Show top-rated rooms with images, descriptions, and a "Book Now" button leading to the room's detail page.
- **User Reviews**: Display reviews for each room (if available).
- **Extra Sections**: Two additional attractive sections for the homepage.

### User Authentication 📝
- **Login Page**: Allows users to log in with email/password or through Google/GitHub login.
- **Register Page**: Users can register with email, password, and photo URL.
  - **Password Verification**: Enforces password requirements (uppercase, lowercase, at least 6 characters).
  - **Toast/Alerts**: Show toast notifications on successful login or registration.
  
### Navigation Bar 🧭
- Includes links to the "Rooms" page and "My Bookings" page.
- The "My Bookings" page is only accessible to authenticated users.

### Rooms Page 🛌
- Display all rooms fetched from the database with images and descriptions.
- Clicking a room card redirects the user to the room's detail page.

### Room Details Page 🏡
- Detailed room information with images, descriptions, and total reviews.
- A "Book Now" button that opens a modal for booking confirmation, including a date picker.
- Ensures users can only book available rooms, marking rooms as unavailable after booking.

### My Bookings Page 🛌
- Shows all the rooms booked by the currently logged-in user in a table format.
- Users can cancel bookings, with a confirmation modal for cancellation.
- Users can update the booking date and see booking changes reflected in the database.

### Review System 📝
- Users can leave reviews for rooms they have booked.
- Reviews consist of a username, rating (1-5), comment, and timestamp.
- Reviews are shown on the room details page for other users.

### Access Control 🔒
- Only logged-in users can book rooms and leave reviews.
- Redirects users to the login page if they are not logged in when attempting to book.

### 404 Page 🚀
- A custom 404 page with an exciting gif/jpg and a "Back to home" button.

## Dependecies Used

- **React.js** for building the front-end
- **Firebase Authentication** for user authentication (email/password, Google/GitHub login)
- **react-leaflet** for embedding hotel location on the map
- **Framer Motion** for animations
- **Helmet** for managing document metadata and browser tab title
- **CSS (Tailwind CSS)** for styling
- **Date Picker** for selecting booking dates
- **React Router** for navigation
- **React Context API** for managing authentication state

## Installation Instructions

### 1. Clone the Repository
Clone the project from GitHub.

```bash
git clone https://github.com/your-username/hotel-quest.git
cd hotel-quest

