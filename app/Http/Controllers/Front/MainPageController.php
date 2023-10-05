<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class MainPageController extends Controller
{
    const PAGE_NAME = 'Your Estate';
    protected string $pageName;

    public function __construct()
    {
        $this->pageName = self::PAGE_NAME;
    }



    public function main(): object
    {
        $message = 'Welcome to main';

        return view('front.main.index', [
            'pagename' => $this->pageName,
            'message' => $message,
        ]);
    }
}
