<?php

use Illuminate\Support\Facades\Route;

Route::get('/', [\App\Http\Controllers\Front\MainPageController::class, 'main'])->name('main.front');
Route::get('/admin/{any?}', [\App\Http\Controllers\Admin\MainPageController::class, 'register'])->name('admin')->where('any', '.*');
