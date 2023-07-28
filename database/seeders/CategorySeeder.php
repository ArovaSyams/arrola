<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories= [
            'Pasta & Noodles',
            'Chicken & Poultry',
            'Seafood',
            'Desserts & Sweets',
            'Salads & Dressings',
            'Breakfast & Brunch',
            'Soups & Stews',
            'Vegetarian & Vegan',
            'Grilling & Barbecue',
            'Quick & Easy Recipes',
        ];

        foreach ($categories as $category) {
            DB::table('categories')->insert([
                'category' => $category
            ]);
        }
    }
}
