<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
         $this->call(UserTableSeeder::class);
         $this->call(MenuTableSeeder::class);
         $this->call(CategoryTableSeeder::class);
    }
}

class UserTableSeeder extends Seeder {
    public function run()
    {
        \App\User::create(array(
            'name' => 'admin',
            'email' => 'admin@example.com',
            'password' => Hash::make('123123'),
            'super_user' => 1,
        ));
    }
}

class MenuTableSeeder extends Seeder {
    public function run()
    {
        \App\Models\Menu::create(array(
            'title' => 'Главная',
            'link' => '/',
            'weight' => '1',
            'parent_id' => null,
        ));

        \App\Models\Menu::create(array(
            'title' => 'Межкомнатные двери',
            'link' => '/doors/mezhkomnatnye-dveri/',
            'weight' => '2',
            'parent_id' => null,
        ));

        \App\Models\Menu::create(array(
            'title' => 'Металлические двери',
            'link' => '/doors/metalicheskie-dveri/',
            'weight' => '3',
            'parent_id' => null,
        ));

        \App\Models\Menu::create(array(
            'title' => 'О нас',
            'link' => '/',
            'weight' => '4',
            'parent_id' => null,
        ));
    }
}

class CategoryTableSeeder extends Seeder {
    public function run()
    {
        \App\Models\Category::create(array(
            'name' => 'Межкомнатные двери',
            'slug' => 'mezhkomnatnye-dveri',
            'weight' => '1',
        ));

        \App\Models\Category::create(array(
            'name' => 'Металлические двери',
            'slug' => 'metalicheskie-dveri',
            'weight' => '2',
        ));
    }
}