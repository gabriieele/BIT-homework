<?php 

namespace Ignas\Homework;

class Login
{
    public static function email()
    {
        return readline('Your email: ');
    }

    public static function password()
    {
        return readline('Your password: ');
    }

    public static function loggedinUser()
    {
        $email = self::email();
        $password = self::password();

        if ($email && $password) {
            try {
                $db = new \mysqli('localhost', 'root', '', 'terminal');
            } catch(\Exception $klaida) {
                echo 'Cannot connect to database';
                exit;
            }

            $result = $db->query("SELECT id FROM users WHERE email = '$email' AND password = '$password'");

            if ($result->num_rows) {
                echo 'Logged in successfully';
                $users = $db->query("SELECT * FROM users")->fetch_all(MYSQLI_ASSOC);
                print_r($users);
            } else {
                echo 'Wrong email or password';
                exit;
            }

        } else {
            echo 'Fields must not be empty';
        }
    }
}

