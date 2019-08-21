<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddLangFieldsToDoorsTable extends Migration
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
            $table->string('title_kk');
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
        Schema::table('doors', function(Blueprint $table)
        {
            $table->dropColumn('title_kk');
            $table->dropColumn('description_kk');
        });
    }
}
