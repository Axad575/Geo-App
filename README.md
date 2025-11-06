# 🌍 GeoNote - Smart Meeting & Project Management Platform

GeoNote is a modern, full-stack web application designed for efficient team collaboration, meeting management, and personal note-taking. Built with Next.js and Firebase, it provides a seamless experience for managing projects, organizing meetings, and keeping track of personal notes.

![Next.js](https://img.shields.io/badge/Next.js-16.0.1-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.0-blue?style=flat-square&logo=react)
![Firebase](https://img.shields.io/badge/Firebase-12.5.0-orange?style=flat-square&logo=firebase)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.0-blue?style=flat-square&logo=tailwindcss)

## ✨ Features

### 🏢 Organization Management
- **Multi-tenant architecture** - Each organization has isolated data
- **User roles and permissions** - Admin, User, and custom role management
- **Organization dashboard** - Overview of projects, meetings, and team activity

### 📅 Meeting Management
- **Create and schedule meetings** with date, time, and location
- **Participant management** - Add team members to meetings
- **Project integration** - Link meetings to specific projects
- **Meeting notes and agenda** - Rich text support for detailed documentation
- **Real-time updates** - Changes sync across all participants

### 📝 Personal Notes System
- **Private note creation** - Personal notes for each user
- **Rich text editor** - Full formatting support
- **Categorization** - Organize notes by categories (Personal, Work, Ideas, etc.)
- **Search and filter** - Find notes quickly by title or content
- **Favorites system** - Mark important notes for quick access
- **CRUD operations** - Create, read, update, and delete notes seamlessly

### 🗂️ Project Management
- **Project creation and tracking** - Manage multiple projects
- **Team collaboration** - Assign team members to projects
- **Integration with meetings** - Link meetings to projects for better organization

### 🔐 Authentication & Security
- **Firebase Authentication** - Secure user login and registration
- **Email/password authentication** - Simple and secure login process
- **User session management** - Persistent login state
- **Role-based access control** - Different permissions for different user types

## 🛠️ Tech Stack

### Frontend
- **[Next.js 16.0.1](https://nextjs.org/)** - React framework with App Router
- **[React 19.2.0](https://reactjs.org/)** - Component-based UI library
- **[TailwindCSS 4.0](https://tailwindcss.com/)** - Utility-first CSS framework
- **Modern JavaScript (ES6+)** - Latest JavaScript features

### Backend & Database
- **[Firebase Firestore](https://firebase.google.com/docs/firestore)** - NoSQL cloud database
- **[Firebase Authentication](https://firebase.google.com/docs/auth)** - User authentication service
- **[Firebase Analytics](https://firebase.google.com/docs/analytics)** - User behavior tracking

### Development Tools
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing
- **Node.js** - JavaScript runtime

## 📁 Project Structure

```
geo-app/
├── app/                          # Next.js App Router directory
│   ├── api/                      # API configurations
│   │   └── firebase.js          # Firebase configuration
│   ├── assets/                   # Static assets
│   │   └── strings.js           # Text constants
│   ├── components/               # Reusable React components
│   │   ├── CreateMeetingModal.js # Meeting creation modal
│   │   ├── CreateNoteModal.js   # Note creation modal
│   │   ├── EditNoteModal.js     # Note editing modal
│   │   ├── MeetingCard.js       # Meeting display component
│   │   ├── navbar.js            # Navigation bar
│   │   ├── sidebar.js           # Side navigation
│   │   └── ...                  # Other components
│   ├── pages/                    # Application pages
│   │   ├── homeScreen/          # Dashboard page
│   │   ├── library/             # Document library
│   │   ├── meetings/            # Meeting management
│   │   ├── notes/               # Personal notes
│   │   ├── projects/            # Project management
│   │   └── news/                # News and updates
│   ├── globals.css              # Global CSS styles
│   ├── layout.js                # Root layout component
│   └── page.js                  # Home page
├── public/                       # Static files
├── package.json                 # Dependencies and scripts
├── next.config.mjs              # Next.js configuration
├── tailwind.config.js           # TailwindCSS configuration
└── README.md                    # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- **Node.js** (version 18 or higher)
- **npm** or **yarn** package manager
- **Firebase project** with Firestore and Authentication enabled

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd geo-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Firebase Setup**
   - Create a new Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable **Firestore Database** and **Authentication**
   - Configure **Authentication providers** (Email/Password)
   - Get your Firebase configuration and update `app/api/firebase.js`

4. **Configure Firestore Security Rules**
   ```javascript
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       // Organizations access
       match /organizations/{orgId} {
         allow read, write: if request.auth != null;
         
         // Organization users
         match /users/{userId} {
           allow read, write: if request.auth != null && request.auth.uid == userId;
         }
         
         // Organization meetings
         match /meetings/{meetingId} {
           allow read, write: if request.auth != null;
         }
         
         // Organization projects
         match /projects/{projectId} {
           allow read, write: if request.auth != null;
         }
       }
       
       // Personal notes
       match /notes/{noteId} {
         allow read, write: if request.auth != null && request.auth.uid == resource.data.userId;
       }
     }
   }
   ```

5. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📊 Database Schema

### Organizations Collection
```javascript
organizations/{orgId}
├── name: string
├── description: string
├── createdAt: timestamp
├── users/{userId}           // Sub-collection
│   ├── name: string
│   ├── email: string
│   ├── role: string
│   └── joinedAt: timestamp
├── meetings/{meetingId}     // Sub-collection
│   ├── title: string
│   ├── date: timestamp
│   ├── location: string
│   ├── participants: array
│   ├── notes: string
│   └── projectId: string
└── projects/{projectId}     // Sub-collection
    ├── title: string
    ├── description: string
    ├── status: string
    └── members: array
```

### Personal Notes Collection
```javascript
notes/{noteId}
├── userId: string           // Owner of the note
├── title: string
├── content: string
├── category: string         // Personal, Work, Ideas, etc.
├── isFavorite: boolean
├── createdAt: timestamp
└── updatedAt: timestamp
```

## 🎨 Key Features In Detail

### Meeting Management
- **Smart Scheduling**: Date and time picker with timezone support
- **Participant Management**: Add team members from organization
- **Project Integration**: Link meetings to ongoing projects
- **Rich Notes**: Markdown support for meeting agendas and notes

### Personal Notes
- **Category System**: Organize notes by Personal, Work, Ideas, Tasks, etc.
- **Search & Filter**: Real-time search across titles and content
- **Favorites**: Star important notes for quick access
- **Responsive Design**: Works seamlessly on desktop and mobile

### User Interface
- **Modern Design**: Clean, intuitive interface with TailwindCSS
- **Responsive Layout**: Mobile-first design approach
- **Dark Mode Ready**: Prepared for dark theme implementation
- **Accessibility**: WCAG guidelines compliance

## 🔧 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Set environment variables for Firebase configuration
4. Deploy automatically on every push

### Manual Deployment
1. Build the application: `npm run build`
2. Upload the `.next` folder to your hosting provider
3. Configure environment variables
4. Start the production server: `npm run start`

## 🛡️ Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [Issues](../../issues) page
2. Create a new issue if your problem isn't listed
3. Provide detailed information about your environment and the issue

## 🔮 Future Enhancements

- [ ] **Real-time collaboration** - Live editing and updates
- [ ] **Mobile app** - React Native implementation
- [ ] **File attachments** - Support for documents and images
- [ ] **Calendar integration** - Sync with Google Calendar, Outlook
- [ ] **Notification system** - Email and push notifications
- [ ] **Advanced search** - Full-text search with filters
- [ ] **Export functionality** - PDF export for meetings and notes
- [ ] **Themes** - Dark mode and custom themes
- [ ] **API endpoints** - RESTful API for third-party integrations
- [ ] **Offline support** - PWA with offline capabilities

---

**Built with ❤️ using Next.js and Firebase**
