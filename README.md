# 🏃‍♂️ Fitness Tracker - MERN Stack Capstone Project

A comprehensive fitness tracking application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) that allows users to track their daily health metrics, workouts, and progress over time.

## 🚀 Live Demo

- Frontend: [Deployed on Vercel](week-8-capstone-kerrynk-mgi3lmxky-kerrynks-projects.vercel.app)
- Backend API: [Deployed on Render](https://week-8-capstone-kerrynk.onrender.com)

## ✨ Features

### Core Functionality

- 🔐 User Authentication: Secure registration and login with JWT
- 📊 Health Metrics Tracking: Steps, calories, distance, weight, workout logs
- 📝 CRUD Operations: Create, read, update, delete fitness entries
- 📈 Progress Visualization: Charts and graphs showing progress over time
- 🔔 Real-time Notifications: Socket.io integration for live updates
- 📱 Responsive Design: Works seamlessly on desktop, tablet, and mobile

### Technical Features

- 🛡️ Security: JWT authentication, bcrypt password hashing, input validation
- 🧪 Testing: Comprehensive test suite (Jest, React Testing Library, Cypress)
- 🚀 Performance: Optimized API calls, lazy loading, efficient state management
- 📊 Data Visualization: Interactive charts using Chart.js
- 🔄 Real-time Updates: Socket.io for live data synchronization

## 🛠️ Tech Stack

### Backend

- Runtime: Node.js
- Framework: Express.js
- Database: MongoDB with Mongoose ODM
- Authentication: JWT + bcrypt
- Real-time: Socket.io
- Testing: Jest + Supertest
- Validation: Joi
- Security: Helmet, CORS, rate limiting

### Frontend

- Framework: React.js with Hooks
- Routing: React Router v6
- State Management: Context API + useReducer
- Styling: Tailwind CSS + CSS Modules
- HTTP Client: Axios
- Charts: Chart.js with react-chartjs-2
- Testing: React Testing Library + Jest
- E2E Testing: Cypress

### DevOps

- Version Control: Git + GitHub
- CI/CD: GitHub Actions
- Backend Deployment: Render
- Frontend Deployment: Vercel
- Database: MongoDB Atlas

## 📁 Project Structure

`
fitness-tracker/
├── backend/                 # Express.js API server
│   ├── config/             # Database and environment config
│   ├── controllers/        # Route controllers
│   ├── middleware/         # Custom middleware
│   ├── models/             # Mongoose schemas
│   ├── routes/             # API routes
│   ├── utils/              # Utility functions
│   └── tests/              # Backend tests
├── frontend/               # React.js client
│   ├── public/             # Static assets
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── context/        # React Context providers
│   │   ├── hooks/          # Custom hooks
│   │   ├── pages/          # Page components
│   │   ├── services/       # API services
│   │   ├── utils/          # Utility functions
│   │   └── styles/         # CSS and styling
│   └── tests/              # Frontend tests
└── docs/                   # Documentation
`

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- MongoDB Atlas account (or local MongoDB)
- Git

### Backend Setup

1. Clone the repository
   `bash
   git clone https://github.com/your-username/fitness-tracker.git
   cd fitness-tracker
   `

2. Install backend dependencies
   `bash
   cd backend
   npm install
   `

3. Environment Configuration
   Create a `.env` file in the backend directory:
   `env
   NODE_ENV=development
   PORT=5000
   MONGODB_URI=your_mongodb_atlas_connection_string
   JWT_SECRET=your_jwt_secret_key
   JWT_EXPIRE=7d
   `

4. Start the backend server
   `bash
   npm run dev
   `

### Frontend Setup

1. Install frontend dependencies
   `bash
   cd frontend
   npm install
   `

2. Environment Configuration
   Create a `.env` file in the frontend directory:
   `env
   REACT_APP_API_URL=http://localhost:5000/api
   REACT_APP_SOCKET_URL=http://localhost:5000
   `

3. Start the frontend development server
   `bash
   npm start
   `

### Database Setup

1. MongoDB Atlas Setup
   - Create a free MongoDB Atlas account
   - Create a new cluster
   - Get your connection string
   - Add it to your backend `.env` file

2. Seed Data (Optional)
   `bash
   cd backend
   npm run seed
   `

## 🧪 Testing

### Backend Tests

`bash
cd backend
npm test              # Run all tests
npm run test:watch    # Run tests in watch mode
npm run test:coverage # Run tests with coverage
`

### Frontend Tests

`bash
cd frontend
npm test              # Run all tests
npm run test:coverage # Run tests with coverage
npm run test:e2e      # Run end-to-end tests
`

## 📊 API Documentation

### Authentication Endpoints

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user profile
- `PUT /api/auth/profile` - Update user profile

### Fitness Data Endpoints

- `GET /api/fitness` - Get all fitness entries for user
- `POST /api/fitness` - Create new fitness entry
- `PUT /api/fitness/:id` - Update fitness entry
- `DELETE /api/fitness/:id` - Delete fitness entry
- `GET /api/fitness/stats` - Get user statistics

### Workout Endpoints

- `GET /api/workouts` - Get all workouts for user
- `POST /api/workouts` - Create new workout
- `PUT /api/workouts/:id` - Update workout
- `DELETE /api/workouts/:id` - Delete workout

## 🚀 Deployment

### Backend Deployment (Render)

1. Connect your GitHub repository to Render
2. Create a new Web Service
3. Set environment variables
4. Deploy automatically on push

### Frontend Deployment (Vercel)

1. Connect your GitHub repository to Vercel
2. Set environment variables
3. Deploy automatically on push

## 📸 Screenshots

### Dashboard

![Dashboard](docs/screenshots/dashboard.png)

### Fitness Entry Form

![Entry Form](docs/screenshots/entry-form.png)

### Progress Charts

![Charts](docs/screenshots/charts.png)

### Mobile Responsive

![Mobile](docs/screenshots/mobile.png)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

  Your Name
-GitHub: [@KerryNK](https://github.com/KerryNK)

## 🙏 Acknowledgments

- [MongoDB Atlas](https://www.mongodb.com/atlas) for database hosting
- [Render](https://render.com) for backend deployment
- [Vercel](https://vercel.com) for frontend deployment
- [Tailwind CSS](https://tailwindcss.com) for styling
- [Chart.js](https://www.chartjs.org) for data visualization
