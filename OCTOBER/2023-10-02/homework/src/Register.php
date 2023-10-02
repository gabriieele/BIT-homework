<?php 

namespace Ignas\Homework;

class Register{
    public static function email(){
        return readline('Your email: ');
    }
    public static function name(){
        return readline('Your name: ');
    }
    public static function lastname(){
        return readline('Your lastname: ');
    }
    public static function password(){
        return readline('Your password: ');
    }

    public static function registerUser()
    {
        $email = self::email();
        $name = self::name();
        $lastname = self::lastname();
        $pasw = self::password();
        $password = md5($pasw);

        if ($email && $name && $lastname && $password) {
            try {
                $db = new \mysqli('localhost', 'root', '', 'terminal');
            } catch(\Exception $klaida) {
                echo 'Cannot connect to database';
                exit;
            }

            //email validacija
            $user = $db->query(sprintf("SELECT * FROM users WHERE email='%s'", $email));
            if ($user->num_rows > 0) {
                echo 'This email or username is already registered';
                exit;
            } else {
                $result = $db->query("INSERT INTO users (email, name, lastname, password) VALUES ('$email', '$name', '$lastname', '$password')");
                if (!$result) {
                    echo 'Registration is unsuccessful';
                    exit;
                } else {
                    echo 'Registration is successful';
                }
            }

        } else {
            echo 'Fields must not be empty';
        }
    }
}

