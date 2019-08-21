<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddLangFieldsToReviewsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('reviews', function(Blueprint $table)
        {
            $table->string('name_kk');
            $table->string('city_kk');
            $table->longText('description_kk');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('reviews', function(Blueprint $table)
        {
            $table->dropColumn('name_kk');
            $table->dropColumn('city_kk');
            $table->dropColumn('description_kk');
        });
    }
}
