<?php

use App\Models\szakdoga;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('szakdogas', function (Blueprint $table) {
            $table->id();
            $table->string('szakdoga_nev');
            $table->string('githublink')->unique();
            $table->string('oldallink')->unique()->nullable();
            $table->string('tagokneve');
            $table->timestamps();
        });

        szakdoga::create([
            'szakdoga_nev'=>'Szakd1',
            'githublink'=>'https://github.com/dominikdobos/DolgozatJava.git',
            'tagokneve'=>'Név1, Név2, Név3, Név4'
        ]);
        szakdoga::create([
            'szakdoga_nev'=>'Szakd12',
            'githublink'=>'https://github.com/dominikdobos/laravel_library.git',
            'tagokneve'=>'Név Valami1, Név Valami2, Név Valami3, Név Valami4'
        ]);
        szakdoga::create([
            'szakdoga_nev'=>'Szakdolgozat 3 Hosszú Cím',
            'githublink'=>'https://github.com',
            'tagokneve'=>'Viszonylag Hosszú1, Viszonylag Hosszú2, Viszonylag Hosszú3'
        ]);
        szakdoga::create([
            'szakdoga_nev'=>'Szakd4',
            'githublink'=>'https://github.com/dominikdobos/webaruhaz_frontend.git',
            'oldallink'=> 'https://getbootstrap.com',
            'tagokneve'=>'Név1, Név2, Név3, Név4'
        ]);
    }

    public function down(): void
    {
        Schema::dropIfExists('szakdogas');
    }
};
