<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMenuTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('menu', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('parent_id')->nullable();
            $table->string('title');
            $table->string('link');
            $table->string('weight');
            $table->timestamps();

            $table->foreign('parent_id')
                ->references('id')
                ->on('menu')
                ->onUpdate('cascade')
                ->onDelete('set null');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('menu', function(Blueprint $table)
        {
            $table->dropForeign('menu_parent_id_foreign');
        });
        Schema::drop('menu');
    }
}
