<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddFieldsToSlider extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('sliders', function(Blueprint $table)
        {
            $table->string('text_ru')->nullable();
            $table->string('text_kk')->nullable();
            $table->longText('description_ru')->nullable();
            $table->longText('description_kk')->nullable();
            $table->boolean('blank')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('sliders', function(Blueprint $table)
        {
            $table->dropColumn('text_ru');
            $table->dropColumn('text_kk');
            $table->dropColumn('description_ru');
            $table->dropColumn('description_kk');
            $table->dropColumn('blank');
        });
    }
}
