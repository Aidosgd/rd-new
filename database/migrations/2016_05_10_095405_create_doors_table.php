<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDoorsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('doors', function (Blueprint $table) {
            $table->increments('id');
            $table->string('doors_category_id');
            $table->string('manufacturer');
            $table->string('title');
            $table->string('slug');
            $table->string('weight');
            $table->boolean('active');
            $table->boolean('main_page');
            $table->string('main_image');
            $table->longText('description');

            //seo
            $table->string('seo_title');
            $table->string('seo_keywords');
            $table->string('seo_description');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('doors');
    }
}
