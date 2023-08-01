<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('users')->insert([
            'role' => 'admin',
            'first_name' => 'admin',
            'last_name' => 'admin',
            'phone' => '8382944932479',
            'email' => 'admin@gmail.com',
            'password' => Hash::make('admin')
        ]);
    }
}
