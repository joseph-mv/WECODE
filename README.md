
# wecode-web
This is the main website of WeCode Community

## Features

- **Responsive Design**:Optimised for all devices, ensuring a great user experience on mobile, tablet, and desktop.
- **Modern UI**: Clean and professional interface with Tailwind CSS.
- **Fast Loading**:  Built with Vite for lightning-fast development and deployment.
- **Interactive Components**: Engaging and dynamic content powered by React and TypeScript.
- User authentication with Google OAuth via Passport.js
- Cross-Origin Resource Sharing (CORS) configuration
- Security headers set via `helmet`
- TypeScript support for type-checking and development



## Technologies Used

### Frontend
- **React.js**: For building a component-based architecture.

- **TypeScript**: Ensures type safety and better code maintainability.

- **Vite**: Fast build tool and development server.

- **Tailwind CSS**: For modern, utility-first styling.
### Backend
- **Node.js**
- **TypeScript**
- **Express.js**
- **MongoDB**: with `mongoose`
- **Passport.js**: with Google OAuth 2.0
- **Nodemon**: for auto-reloading during development
- **Helmet**: for HTTP headers security
- **CORS**: for handling cross-origin requests
- **Express-Session**: for session management


## Getting Started

### Prerequisites

Ensure you have the following installed on your local machine:

- Node.js
- npm (Node Package Manager)
- A Google Developer account.

### Steps to Set Up Google OAuth Authentication

1. Go to the [Google Developer Console](https://console.developers.google.com/).
2. Select your project (or create a new one).
3. Navigate to **APIs & Services** > **Credentials**.  
4. Configure the OAuth Consent Screen:
   - In the left sidebar, navigate to APIs & Services > OAuth consent screen.
   - Choose User Type:
External →  your app will be used by users outside your organization (public app).
   - Fill in the Consent Screen Details.
   - On the Scopes screen, click Add or Remove Scopes.
Choose the required scopes (.../auth/userinfo.email,.../auth/userinfo.profile,openid).
5. Click on **Create Credentials** and select **OAuth Client ID**.
   - Choose Application Type: Web Application (for web apps).
   - Enter a name (e.g., "Wecode").
   - Under Authorized redirect URIs, add:
   `http://localhost:3000/auth/google/callback
   ` 
   - Click create.
   - After creation, you'll see your Client ID and Client Secret. Copy and store them securely.

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/joseph-mv/WECODE.git
   cd WECODE
    ```


2. **Install backend dependencies:**

   ```bash
   npm install
    ```
3. **Set up environment variables:** Create a .env file in backend folder and add the following variable:
  ```bash
PORT=3000
MONGO_URI=mongodb://localhost:27017/Wecode
NODE_ENV=development
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GOOGLE_CALLBACK_URL=http://localhost:3000/auth/google/callback
CLIENT_URL=http://localhost:5173
```
4. **Install frontend dependencies:**

   ```bash
   cd frontend
   npm install
    ```

 5. **Set up environment variables:** Create a .env file in frontend folder and add the following variable:
  ```bash
VITE_BASE_URL=http://localhost:3000
```



### Running the application

1.**Start the frontend server :**
- Open a new terminal, navigate to the frontend directory, and run

 ```bash
   npm run dev

```
This command starts a local development server. By default, it runs on http://localhost:5173, where you can view the application in your browser. Any changes you make to the code will automatically refresh the page.
2.**Build the frontend project for production:**

 ```bash
   npm run build

```
This command generates an optimised production build in the dist folder. The build is minified and includes all necessary assets for deployment.

3.**Start the backend  server :**
- Open a terminal and navigate to the backend directory, then run:


 ```bash
   npm run dev

```

4.**Build the backend project for production:**

 ```bash
   npm run build

```

## Deployment
### Steps to deploy on Vercel:
1.Sign in to your Vercel account or create a new account at Vercel.

2.Click on "New Project" and import your GitHub repository.

3.Configure the project settings if needed, and click "Deploy."

4.Vercel will automatically build and deploy your application. Once completed, you will receive a live URL to access your deployed site.

### Steps to deploy on Netlify:

1.Sign in to your Netlify account or create a new account at Netlify.

2.Click on "Add new site" and select "Import from Git."

3.Connect your GitHub repository and choose the branch to deploy.

4.Configure the build settings if needed (` npm run build ` for the build command and `dist` as the publish directory).

5.Click "Deploy Site." Netlify will build and deploy your application, providing you with a live URL.



**License:**

[MIT License]

**Acknowledgements:**

* Thanks to the React, TypeScript, Vite, Tailwind CSS, Node.js ,Express.js communities for their excellent tools and resources..

