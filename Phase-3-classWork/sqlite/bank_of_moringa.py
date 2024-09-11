import sqlite3

def create_database_table():
    db_connection = sqlite3.connect("moringa_bank.db")
    db_cursor = db_connection.cursor()

    db_cursor.execute("CREATE TABLE IF NOT EXISTS bank_users(id INTEGER PRIMARY KEY AUTOINCREMENT, owners_name TEXT NOT NULL, location TEXT NOT NULL, account_number INTEGER NOT NULL )")
    db_connection.commit()

class BankApplication:
    def __init__(self, owners_name, location, account_number):
        self.owners_name = owners_name
        self.location = location
        self.account_number = account_number

    def __str__(self):
        return f"Account for {self.owners_name} has been created successfully, and the account number is {self.account_number}"


def main():
    create_database_table()  # Dictionary to store users
    print("Welcome to the Bank of Moringa application")

    while True:
        print("\nMenu options:")
        print("1. Create an account")
        print("2. Exit")

        menu_option = input("Choose from menu options: ")

        if menu_option == "1":
            owner_name = input("Enter your full name: ")
            location = input("Enter your location: ")
            account_number = input("Enter your account number: ")

            db_connection = sqlite3.connect("moringa_bank.db")
            db_cursor = db_connection.cursor()
            db_cursor.execute("CREATE TABLE IF NOT EXISTS bank_users(id INTEGER PRIMARY KEY AUTOINCREMENT, owners_name TEXT NOT NULL, location TEXT NOT NULL, account_number INTEGER NOT NULL )")
            db_connection.commit()
            else:
                bank_users[account_number] = BankApplication(owner_name, location, account_number)  # Correct assignment
                print(bank_users[account_number])  # This will call the __str__ method
        elif menu_option == "2":
            print("Thank you for using the Bank of Moringa application!")
            break
        else:
            print("Invalid option, please choose a correct option")


if __name__ == "__main__":
    main()
