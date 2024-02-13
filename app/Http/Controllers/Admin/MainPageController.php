<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class MainPageController extends Controller
{
    const PAGE_NAME = 'My Admin';
    protected string $pageName;

    public function __construct()
    {
        $this->pageName = self::PAGE_NAME;
    }



    public function register(): object
    {
        $message = 'Welcome to dashboard';

        return view('admin.layout.index', [
            'pagename' => $this->pageName,
            'message' => $message,
        ]);
    }
}
