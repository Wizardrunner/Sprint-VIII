# Inprocode Project

![Angular](https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white) ![NodeJS](https://img.shields.io/badge/node.js-%2343853D.svg?style=for-the-badge&logo=node.js&logoColor=white)

This project includes a frontend Angular application and a backend Node.js server. It requires setting up a `.env` file and a MySQL database using XAMPP and phpMyAdmin.

## 🚀 Set Up

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Wizardrunner/Sprint-VIII.git
   ```

2. **Navigate to the frontend directory:**
   ```bash
   cd inprocode
   ```

3. **Install frontend dependencies:**
   ```bash
   npm install
   ```

4. **Navigate to the backend directory:**
   ```bash
   cd backend
   ```

5. **Install backend dependencies:**
   ```bash
   npm install
   ```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the backend directory with the following structure:
```
BCRYPT_SALT=10
EMAIL_HOST=smtp.example.com
EMAIL_USERNAME=your_email@example.com
EMAIL_PORT=587
EMAIL_PASSWORD=your_email_password
FROM_EMAIL=your_email@example.com
HOST_NAME=localhost
USER_NAME=root
PASSWORD=
DATABASE=db_curs_nodejs
JWT_SECRET=your_jwt_secret
CLIENT_URL=http://localhost:4200
NODE_ENV=development
BASE_DIR=
```
Replace placeholder values with your actual configuration details.

### Database Setup

1. Install [XAMPP](https://www.apachefriends.org/index.html) and launch phpMyAdmin.
2. Create a new database named `db_curs_nodejs`.
3. Import the provided SQL file to set up the database schema and initial data.

## 🖥 Development Server

### Frontend

```bash
# Navigate to the 'inprocode' directory if you are not already there
cd inprocode
ng serve
```
Navigate to `http://localhost:4200/`.

### Backend

```bash
# Navigate to the 'backend' directory if you are not already there
cd backend
npm start
```
This will start the server on `http://localhost:3000/`.

## 📦 Building for Production

```bash
# Make sure you are in the 'inprocode' directory
ng build --prod
```

## 🛠 Further Help

For more help on the Angular CLI:
```bash
ng help
```
Or check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).