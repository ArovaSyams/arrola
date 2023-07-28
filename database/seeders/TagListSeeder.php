<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TagListSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $tags = [
            'recipes',
            'food',
            'cooking',
            'delicious',
            'yummy',
            'homemade',
            'instafood',
            'foodporn',
            'foodie',
            'foodphotography',
            'easyrecipes',
            'healthy',
            'desserts',
            'breakfast',
            'lunch',
            'dinner',
            'vegetarian',
            'vegan',
            'glutenfree',
            'instagood',
            'yum',
            'foodgasm',
            'recipeoftheday',
            'foodlover',
            'foodbloggers',
        ];

        foreach ($tags as $tag) {
            DB::table('tag_lists')->insert([
                'tag' => $tag
            ]);
        }
    }
}
