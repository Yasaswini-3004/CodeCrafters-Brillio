Follow these steps to set up the project using XAMPP and MySQL:

### 1. Download and Install XAMPP

Download and install XAMPP from the [official website](https://www.apachefriends.org/index.html). Follow the installation instructions for your operating system.

### 2. Clone or Download the Repository

Clone or download this repository to your local machine.

### 3. Move Files to XAMPP's htdocs
Locate your XAMPP installation directory and navigate to the htdocs folder. This directory typically exists where XAMPP is installed, such as C:\xampp\htdocs on Windows or /Applications/XAMPP/htdocs on macOS. Extract all the files from the 'Backend' repository and move them to the `htdocs` folder in your XAMPP installation directory.

### 4. Start Apache and MySQL

Open the XAMPP Control Panel and start the Apache and MySQL services.

### 5. Create a Database in phpMyAdmin

- Open your web browser and navigate to `http://localhost/phpmyadmin`.
- From the left panel in phpMyAdmin, create a new database named `user_auth`.

### 6. Import Database File

- Select the newly created `user_auth` database.
- Click on the "Import" tab from the top menu.
- Choose all the four files 'jobs','profile_info','sent_emails','users' from the repository and import it into the `user_auth` database. Click "OK" to complete the import.

### 7. Access Project in Browser

- Open a new tab in your web browser.
- Type `http://localhost/foldername` in the URL, where `foldername` is the name of the folder where you moved the project files inside the `htdocs` directory.
- You should now be able to access and interact with the project through your web browser using XAMPP.

