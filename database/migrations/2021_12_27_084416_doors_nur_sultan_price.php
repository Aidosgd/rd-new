<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class DoorsNurSultanPrice extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('doors', function(Blueprint $table)
        {
            $table->integer('price_nur_sultan')->after('second_price');;
            $table->integer('second_price_nur_sultan')->after('price_nur_sultan');;
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('doors', function(Blueprint $table)
        {
            $table->dropColumn('price_nur_sultan');
            $table->dropColumn('second_price_nur_sultan');
        });
    }
}
