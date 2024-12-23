# BoiGhor - Online Bookstore

BoiGhor is a full-stack online bookstore application that facilitates the buying and selling of books. It includes role-based dashboards for buyers, sellers, and admins. The project uses React for the frontend, Tailwind CSS for styling, Firebase for authentication, and Axios for API calls. JSON Web Tokens (JWT) ensure secure user sessions.

---

## Features

### Frontend

- **React Sweeper Slider**: For showcasing featured books.
- **Tailwind CSS**: For responsive and modern UI.
- **Firebase Authentication**: Enables secure login and signup.
- **Role-based Dashboards**:
  - **Buyer Dashboard**: View and purchase books.
  - **Seller Dashboard**: Add and manage books for sale.
  - **Admin Dashboard**: Manage users and overall operations.
- **JWT Integration**: Secure API communications.

### Backend

- **Node.js and Express.js**: API development and routing.
- **MongoDB**: Database for storing user and book data.
- **RESTful APIs**: Built for seamless frontend-backend communication.
- **Role Management**: Enables different functionalities for buyers, sellers, and admins.

---

## Technologies Used

### Frontend

- React.js
- Tailwind CSS
- Firebase Authentication
- Axios

### Backend

- Node.js
- Express.js
- MongoDB
- JWT

---

## Installation

### Prerequisites

- Node.js (>=14.x)
- MongoDB instance
- Firebase project credentials

### Clone the Repositories

1. **Frontend**

   ```bash
   git clone <frontend_repo_link>
   cd <frontend_repo>
   npm install
   npm start
   ```

2. **Backend**
   ```bash
   git clone https://github.com/mdsoponhossain/book_shop_server
   cd book_shop_server
   npm install
   npm start
   ```

### Environment Variables

Create a `.env` file in the backend project root and add:

```env
PORT=5000
MONGO_URI=<your_mongo_db_connection_string>
JWT_SECRET=<your_jwt_secret>
```

---

## How to Use

1. **User Roles**:
   - **Buyer**: Browse and purchase books.
   - **Seller**: List and manage books for sale.
   - **Admin**: Manage users and their roles.
2. **Authentication**: Use Firebase for secure signup and login.
3. **Dashboards**: Access role-specific features through respective dashboards.

---

## Live Preview

- [BoiGhor Website](https://boi-ghor-827b2.web.app/products)

---

## Contribution

1. Fork the repository
2. Create a feature branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -m 'Add feature'`)
4. Push to the branch (`git push origin feature-name`)
5. Create a pull request

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.
