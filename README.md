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
