<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('users')->delete();
        
        \DB::table('users')->insert(array (
            0 => 
            array (
                'id' => 1,
                'name' => 'admin',
                'email' => 'admin@abv.bg',
                'email_verified_at' => NULL,
                'password' => bcrypt('123456'),
                'remember_token' => NULL,
                'created_at' => '2023-10-27 07:10:45',
                'updated_at' => '2023-11-01 17:20:26',
            ),
        ));
        
        
    }
}