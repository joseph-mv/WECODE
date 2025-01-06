# wecode-web
This is the main website of WeCode Community

## Features

- **Responsive Design**:Optimised for all devices, ensuring a great user experience on mobile, tablet, and desktop.
- **Modern UI**: Clean and professional interface with Tailwind CSS.
- **Fast Loading**:  Built with Vite for lightning-fast development and deployment.
- **Interactive Components**: Engaging and dynamic content powered by React and TypeScript.




## Technologies Used

### Frontend
- **React.js**: For building a component-based architecture.

- **TypeScript**: Ensures type safety and better code maintainability.

- **Vite**: Fast build tool and development server.

- **Tailwind CSS**: For modern, utility-first styling.



## Getting Started

### Prerequisites

Ensure you have the following installed on your local machine:

- Node.js
- npm (Node Package Manager)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/joseph-mv/WECODE.git
   cd WECODE/frontend
    ```


2. **Install frontend dependencies:**

   ```bash
   npm install
    ```

### Running the application

1.**Start the frontend server :**
- Open a new terminal, navigate to the frontend directory, and run

 ```bash
   npm run dev

```
This command starts a local development server. By default, it runs on http://localhost:5173, where you can view the application in your browser. Any changes you make to the code will automatically refresh the page.
2.**Build the project for production:**

 ```bash
   npm run build

```
This command generates an optimised production build in the dist folder. The build is minified and includes all necessary assets for deployment.

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

* Thanks to the React, TypeScript, Vite, Tailwind CSS, communities for their excellent tools and resources..
