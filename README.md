# Franchise Directory Website

## **Description**
The Franchise Directory Website is a centralized platform designed to assist:
- **Franchise brands**: Expand into new regions efficiently.
- **Novice investors**: Discover lucrative opportunities and connect with suitable franchises.
- **Business owners**: Gain insights on regional markets and supply chain requirements.

This platform bridges the knowledge gap between franchisors and franchisees, fostering growth with contextual expertise.

## **Purpose**
The website connects business owners with investors, enabling effective expansion of franchises into diverse markets.

## **Target Audience**
- Prospective franchisees
- Business owners
- Investors
- Regulators
- Brokers

## **Key Features**
- Franchise portfolio management
- Revenue tracking
- Automated business matching between franchisees and investors
- Centralized dashboard for franchise data and insights

---

## **Environment & Tools**
- **IDE**: VS Code (v1.61)
- **Framework**: Laravel (v9.0)
- **PHP Version**: 8.1
- **Web Server**: Apache 2.4 (via XAMPP)
- **Database**: MySQL 8.0

---

## **Scope**
### **In Scope**
- User registration, login, and profile management for franchisees and investors.
- Business listing management, including dashboards and revenue tracking for franchises.
- Basic reporting on franchise data, revenue, and deal-making analytics.

### **Out of Scope**
- Integration with payment processing systems.
- Advanced reporting and AI-driven predictive analytics.

---

## **Functional Requirements**

### **Front-End Requirements**
Built with **React.js**, the front end provides a dynamic, responsive user interface.

#### **1. Home Page**
- **Search Bar**: Search franchises by name or keywords.
- **Filters**:
  - Industry
  - Investment Range
  - Location
- **Featured Franchises**: Display popular or top-rated franchises.

#### **2. Franchise Opportunities Page**
- **Franchise Cards**: Display key franchise details:
  - Logo
  - Name
  - Brief description
  - Investment range
  - Call-to-action button (e.g., "Learn More")
- **Detailed Franchise Page**:
  - Franchise details (e.g., name, logo, description)
  - Royalty fees and investment range
  - Location
  - Franchisee testimonials (optional: names, locations, short videos)
- **Sort and Filter Options**: Sort opportunities by investment, industry, or location.

#### **3. Franchisor Pages**
- **Dashboard**: Manage franchise opportunities, view applications, and update franchise information.
- **Franchise Opportunities Page**: Add/edit franchise listings.
- **Franchise Agreement Section**: Upload and manage legal documents.

#### **4. Franchisee Pages**
- **Dashboard**: Manage applications, track progress, and access resources.
- **Franchise Application Page**: Submit applications with required details.
- **Franchisee Resources Page**: Access guides, FAQs, and terms.

#### **5. Contact Us Page**
- **Contact Form**:
  - Full Name
  - Email Address
  - Phone Number
  - Subject/Inquiry Type
  - Message
- **Social Media Links**: Links to official social media accounts.
- **FAQ or Help Section**: Answers to common questions.
- **CTA**: Encourage actions (e.g., newsletter subscription).

#### **6. Login/Sign Up Page**
- **Login Form**:
  - Email
  - Password
  - "Remember Me" option
  - Forgot Password link
  - Login button
- **Sign Up Form**:
  - Full Name
  - Email
  - Password
  - Confirm Password
  - Agree to Terms checkbox
  - Sign Up button

### **Back-End Requirements**
Powered by **Laravel**, the back end ensures robust authentication, database management, and secure server-side operations.

#### **1. User Management**
- **Roles**: Two user types – Franchisors and Franchisees.
- **Authentication**: Use Laravel’s built-in authentication.
- **Account Management**: Enable profile updates, password changes, and account management.

#### **2. Franchise Management (Franchisors)**
- Create/Edit franchise opportunities.
- Manage franchisee applications (view, approve, or reject).
- Upload franchise agreements (legal documents).

#### **3. Franchisee Application Management**
- Submit applications.
- Track application status (e.g., Pending, Accepted).
- Store application details (e.g., preferences, investment range).

#### **4. Contact Us Form**
- Store submissions in a database and send email notifications.
- Validate form fields (e.g., email format, required fields).

#### **5. Franchisee Testimonials (Optional)**
- Manage testimonials for franchises.
- Display selected testimonials on franchise detail pages.

#### **6. API Integration**
- Implement search and filtering mechanisms to support dynamic front-end requests (e.g., by industry, location).

#### **7. Notifications**
- Email notifications for new franchise applications.

---

## **Getting Started**

### **Installation**

1. Install XAMPP and ensure Apache and MySQL are running via the XAMPP Control Panel.
2. Clone the repository into the `htdocs` directory:
   ```bash
   git clone <repository-url> C:\xampp\htdocs\franchise-directory
   ```
3. Navigate to the project directory in PowerShell or Command Prompt:
   ```bash
   cd C:\xampp\htdocs\franchise-directory
   ```
4. Install dependencies using XAMPP’s PHP:
   ```bash
   C:\xampp\php\php.exe composer install
   npm install
   ```
5. Set up the environment file:
   ```bash
   cp .env.example .env
   ```
   Update database credentials in the `.env` file:
   ```env
   DB_CONNECTION=mysql
   DB_HOST=127.0.0.1
   DB_PORT=3306
   DB_DATABASE=your_database_name
   DB_USERNAME=root
   DB_PASSWORD=
   ```
6. Run database migrations:
   ```bash
   C:\xampp\php\php.exe artisan migrate
   ```
   if using xampp on windows 

   ```powershell
   C:\xampp\php\php.exe artisan migrate
   ```
5. Start the development server:
  
  if using xampp on windows 

   ```powershell
   C:\xampp\php\php.exe artisan serve
   ```
7. Serve the application using XAMPP's Apache server:
   - Ensure Apache’s document root points to the `public` directory of the Laravel project, or access via `http://localhost/franchise-directory/public`.

8. Build assets for the front end:
   ```bash
   npm run dev
   ```
---

### **Usage**
- Access the application via your browser at `http://localhost/franchise-directory/public`.
- Login or register as a franchisor or franchisee to explore the platform.

---

## **License**
This project is licensed under the MIT License.
