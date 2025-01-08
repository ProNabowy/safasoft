# Safa Soft React Task  

This repository contains the solution for the **React Development Challenge** by Safa Soft. The goal of this project is to create a React-based application with a time-limited special offer box, multi-step form, and responsive design.  

---

## Task Overview  

The challenge involves implementing a stepper page with:  
- A **timer** to display a time-limited special offer.  
- A **multi-step form** with input validation.  
- **Responsiveness** for both desktop and mobile devices.  

### Input  
- **Design**: [Adobe XD Design](https://xd.adobe.com/view/3579fb5c-07f5-413a-92d8-bf44dd84fdf2-602a/)  
- **API Documentation**: [Postman API](https://documenter.getpostman.com/view/42322/TVCmS5md)  

### Output  
The final product includes:  
1. A stepper-based registration form.  
2. Timer functionality.  
3. Real-time input validation and navigation between steps.  

---

## Features  

### 1. **Stepper Navigation**  
- A multi-step registration form that allows users to navigate forward and backward.  
- Stores previously entered data for easy review.  

### 2. **Timer for Special Offer**  
- Displays a countdown timer to indicate the validity of the special offer.  

### 3. **Real-Time Form Validation**  
- Validates all input fields dynamically and provides error feedback.  

### 4. **Responsive Design**  
- Fully responsive for desktop and mobile devices.  

### 5. **API Integration**  
- Uses the provided API to fetch and handle data dynamically.  

---

## Project Structure  

```plaintext
src/  
├── assets/                # Static assets like images and icons  
├── components/            # Reusable components  
│   ├── Autocomplete/      # Autocomplete input component  
│   ├── InputNumberMask/   # Number masking input component  
│   ├── PasswordInput/     # Password input component  
│   ├── PrefixInput/       # Input with prefix  
│   └── index.jsx          # Export all reusable components  
├── context/               # React Context for global state management  
│   └── index.jsx          # Context setup  
├── pages/                 # Page-level components  
│   ├── Register/          # Registration page and its subcomponents  
│   │   ├── components/    # Subcomponents for the Register page  
│   │   │   ├── ActionsButton/  
│   │   │   ├── CompanyInfo/  
│   │   │   ├── Congrats/  
│   │   │   ├── Form/  
│   │   │   ├── Ready/  
│   │   │   ├── Stepper/  
│   │   │   ├── UploadLogo/  
│   │   │   └── Verification/  
│   │   └── index.jsx       # Main entry point for Register page  
├── routes/                # Application routes configuration  
│   └── routes.jsx         # Route definitions  
├── theme/                 # Theme-related components and styles  
│   ├── components/        # Theme utilities  
│   │   └── theme.js       # Theme configuration  
├── App.jsx                # Main application component  
├── main.jsx               # Main entry point for React app  
├── index.html             # HTML template for the app  



## Getting Started

### Prerequisites
Ensure you have the following installed on your system:
- Node.js
- npm or yarn
- Vite (for development server)

### Installation
1. Clone the repository: 
   git clone <repository-url>
   cd orthoplex-task
2. npm install
3. npm run dev
4. http://localhost:3000

## User Credentials

The following users can be used to log in to the application during testing:

```
1. **User 1**
   - Email: `niya@gmail.com`
   - Password: `123456789`

2. **User 2**
   - Email: `das@gmail.com`
   - Password: `dasdsa`

3. **User 3**
   - Email: `nico@gmail.com`
   - Password: `1243`

4. **User 4**
   - Email: `anas@gmail.com`
   - Password: `12345`

5. **User 5**
   - Email: `mahmoudramdn20001352000@gmail.com`
   - Password: `7745687234hfjkhfdfasiu8493295`

6. **User 6**
   - Email: `liyan@gmail.com`
   - Password: `12345678`

7. **User 7**
   - Email: `1111@mail.com`
   - Password: `1111`
```

# Key Libraries Used

- **React**: Frontend library.
- **TailwindCSS**: Utility-first CSS framework for styling.
- **Axios**: HTTP client for API integration.
- **Vite**: Build tool for faster development.
- **React Router**: For managing application routes.

## API Integration

- The profile page fetches data from an API endpoint using Axios.
- Ensure the backend is running and the API URL is correctly configured in the application.

## Improvements and Future Enhancements

- Enhance error messages and input validation feedback.
- Improve UI/UX with additional animations and transitions.
- Implement additional features like password recovery.

## How to Contribute

1. Fork this repository.
2. Create a new branch for your feature or bug fix:
    ```bash
    git checkout -b feature-name
    ```
3. Commit your changes:
    ```bash
    git commit -m "Description of changes"
    ```
4. Push your changes to your fork:
    ```bash
    git push origin feature-name
    ```
5. Create a pull request.

---

Thank you for reviewing this project! For any feedback or queries, feel free to reach out.
